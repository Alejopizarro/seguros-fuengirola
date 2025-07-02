"use client";

import { useCookieConsent } from "@/contexts/cookie-consent-contexts";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function CookieSettingsButton() {
  const { openModal } = useCookieConsent();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={openModal}
      className="text-muted-foreground hover:text-foreground"
    >
      <Settings className="h-4 w-4 mr-2" />
      Configuración de Cookies
    </Button>
  );
}
