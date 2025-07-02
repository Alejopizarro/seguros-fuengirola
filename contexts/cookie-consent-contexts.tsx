/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { deleteGoogleCookies } from "@/utils/cookie-utils";

interface CookieConsent {
  analytics: boolean;
  marketing: boolean;
  necessary: boolean;
}

interface CookieConsentContextType {
  consent: CookieConsent | null;
  showModal: boolean;
  gtmLoaded: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: CookieConsent) => void;
  openModal: () => void;
  closeModal: () => void;
}

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [gtmLoaded, setGtmLoaded] = useState(false);

  useEffect(() => {
    // Inicializar dataLayer inmediatamente
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: any[]) {
      window.dataLayer.push(args);
    };

    // Configurar consentimiento por defecto (denegado)
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      functionality_storage: "granted",
      security_storage: "granted",
      wait_for_update: 500,
    });

    // Verificar si ya existe consentimiento guardado
    const savedConsent = localStorage.getItem("cookie-consent");
    if (savedConsent) {
      const parsedConsent = JSON.parse(savedConsent);
      setConsent(parsedConsent);

      // Si hay consentimiento para analytics, cargar GTM inmediatamente
      if (parsedConsent.analytics) {
        loadGTM(parsedConsent);
      }
    } else {
      // Si no hay consentimiento guardado, mostrar modal
      setShowModal(true);
    }
  }, []);

  const loadGTM = (consentData: CookieConsent) => {
    if (gtmLoaded) return;

    // Actualizar consentimiento antes de cargar GTM
    window.gtag("consent", "update", {
      analytics_storage: consentData.analytics ? "granted" : "denied",
      ad_storage: consentData.marketing ? "granted" : "denied",
      functionality_storage: "granted",
      security_storage: "granted",
    });

    // Cargar GTM
    const gtmScript = document.createElement("script");
    gtmScript.async = true;
    gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KN882DHG";

    // Añadir el script al head
    document.head.appendChild(gtmScript);

    // Inicializar GTM en dataLayer
    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });

    // Añadir noscript para GTM al body
    const noscript = document.createElement("noscript");
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-KN882DHG";
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.appendChild(noscript);

    setGtmLoaded(true);

    // Disparar evento de consentimiento otorgado
    setTimeout(() => {
      window.gtag("event", "consent_granted", {
        event_category: "consent",
        event_label: "analytics_marketing",
      });
    }, 100);
  };

  const saveConsent = (consentData: CookieConsent) => {
    const previousConsent = consent;
    setConsent(consentData);
    localStorage.setItem("cookie-consent", JSON.stringify(consentData));

    if (consentData.analytics && !gtmLoaded) {
      // Cargar GTM si se acepta analytics por primera vez
      loadGTM(consentData);
    } else if (consentData.analytics && gtmLoaded) {
      // Si GTM ya está cargado, solo actualizar consentimiento
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: consentData.marketing ? "granted" : "denied",
      });
    } else if (!consentData.analytics) {
      // Si se rechaza analytics
      if (gtmLoaded && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
        });
      }

      // Eliminar cookies de Google
      setTimeout(() => {
        deleteGoogleCookies();
      }, 100);
    }

    // Si cambia el consentimiento de marketing
    if (
      gtmLoaded &&
      previousConsent &&
      previousConsent.marketing !== consentData.marketing
    ) {
      window.gtag("consent", "update", {
        ad_storage: consentData.marketing ? "granted" : "denied",
      });
    }

    setShowModal(false);
  };

  const acceptAll = () => {
    const fullConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(fullConsent);
  };

  const rejectAll = () => {
    const minimalConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveConsent(minimalConsent);
  };

  const savePreferences = (preferences: CookieConsent) => {
    saveConsent(preferences);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showModal,
        gtmLoaded,
        acceptAll,
        rejectAll,
        savePreferences,
        openModal,
        closeModal,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
}

// Declaración de tipos para gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
