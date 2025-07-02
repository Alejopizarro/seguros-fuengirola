"use client";

import { useCookieConsent } from "@/contexts/cookie-consent-contexts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, Settings } from "lucide-react";

export default function CookieBanner() {
  const { consent, openModal } = useCookieConsent();

  // No mostrar el banner si ya hay consentimiento
  if (consent) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-1000 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-4 shadow-lg border-l-4 border-l-orange-500">
        <div className="flex items-start gap-3">
          <Cookie className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <p className="text-sm font-medium">Utilizamos cookies</p>
            <p className="text-xs text-muted-foreground">
              Para mejorar tu experiencia y analizar el uso de nuestro sitio.
            </p>
            <div className="flex gap-2">
              <Button size="sm" onClick={openModal} className="flex-1">
                <Settings className="h-3 w-3 mr-1" />
                Configurar
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
