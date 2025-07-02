// Función para eliminar cookies específicas
export function deleteCookie(name: string, domain?: string, path = "/") {
  const cookieString = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path};`;
  document.cookie = domain ? `${cookieString} domain=${domain};` : cookieString;
}

// Función para eliminar todas las cookies de Google Analytics y GTM
export function deleteGoogleCookies() {
  const googleCookiePatterns = [
    "_ga",
    "_ga_",
    "_gid",
    "_gat",
    "_gat_gtag_",
    "_gtm_",
    "__utma",
    "__utmb",
    "__utmc",
    "__utmt",
    "__utmz",
    "_gcl_au",
    "_gcl_aw",
    "_gcl_dc",
    "AMP_TOKEN",
    "_gac_",
  ];

  // Obtener todas las cookies actuales
  const allCookies = document.cookie.split(";");

  allCookies.forEach((cookie) => {
    const cookieName = cookie.split("=")[0].trim();

    // Eliminar cookies que coincidan con patrones de Google
    googleCookiePatterns.forEach((pattern) => {
      if (cookieName.startsWith(pattern)) {
        // Eliminar para diferentes dominios y paths
        deleteCookie(cookieName, undefined, "/");
        deleteCookie(cookieName, window.location.hostname, "/");
        deleteCookie(cookieName, `.${window.location.hostname}`, "/");

        // Para subdominios
        const parts = window.location.hostname.split(".");
        if (parts.length > 1) {
          deleteCookie(cookieName, `.${parts.slice(-2).join(".")}`, "/");
        }
      }
    });
  });

  // Limpiar localStorage y sessionStorage de Google
  try {
    const storageKeys = Object.keys(localStorage);
    storageKeys.forEach((key) => {
      if (
        key.startsWith("_ga") ||
        key.startsWith("_gid") ||
        key.startsWith("gtm")
      ) {
        localStorage.removeItem(key);
      }
    });

    const sessionKeys = Object.keys(sessionStorage);
    sessionKeys.forEach((key) => {
      if (
        key.startsWith("_ga") ||
        key.startsWith("_gid") ||
        key.startsWith("gtm")
      ) {
        sessionStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.warn("No se pudo limpiar el storage:", error);
  }
}

// Función para verificar si existen cookies de Google
export function hasGoogleCookies(): boolean {
  const allCookies = document.cookie.split(";");
  return allCookies.some((cookie) => {
    const cookieName = cookie.split("=")[0].trim();
    return (
      cookieName.startsWith("_ga") ||
      cookieName.startsWith("_gid") ||
      cookieName.startsWith("_gat")
    );
  });
}

// Función para obtener todas las cookies de Google
export function getGoogleCookies(): string[] {
  const allCookies = document.cookie.split(";");
  return allCookies
    .filter((cookie) => {
      const cookieName = cookie.split("=")[0].trim();
      return (
        cookieName.startsWith("_ga") ||
        cookieName.startsWith("_gid") ||
        cookieName.startsWith("_gat")
      );
    })
    .map((cookie) => cookie.trim());
}
