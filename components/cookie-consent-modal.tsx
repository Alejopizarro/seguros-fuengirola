"use client";

import { useState, useEffect } from "react";
import { useCookieConsent } from "@/contexts/cookie-consent-contexts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cookie, Shield, BarChart3, Target, AlertTriangle } from "lucide-react";
import { hasGoogleCookies } from "@/utils/cookie-utils";

export default function CookieConsentModal() {
  const { showModal, acceptAll, rejectAll, savePreferences /*closeModal*/ } =
    useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [hasExistingCookies, setHasExistingCookies] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (showModal) {
      setHasExistingCookies(hasGoogleCookies());
    }
  }, [showModal]);

  if (!showModal) return null;

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-1001 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <div className="flex items-center gap-2">
            <Cookie className="h-6 w-6 text-orange-500" />
            <CardTitle>Configuración de Cookies</CardTitle>
          </div>
          <CardDescription>
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web
            y ofrecerte contenido personalizado.
          </CardDescription>

          {hasExistingCookies && (
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-amber-800">Cookies detectadas</p>
                <p className="text-amber-700">
                  Se han detectado cookies existentes. Si rechazas las cookies,
                  serán eliminadas automáticamente.
                </p>
              </div>
            </div>
          )}
        </CardHeader>

        <CardContent>
          {!showDetails ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Respetamos tu privacidad y te damos control total sobre tus
                datos. Puedes aceptar todas las cookies, rechazarlas o
                personalizar tus preferencias.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">
                  ¿Por qué utilizamos cookies?
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>
                    • <strong>Necesarias:</strong> Para el funcionamiento básico
                    del sitio
                  </li>
                  <li>
                    • <strong>Analíticas:</strong> Para entender cómo usas
                    nuestro sitio (Google Analytics)
                  </li>
                  <li>
                    • <strong>Marketing:</strong> Para mostrarte contenido
                    relevante
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Tabs defaultValue="necessary" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="necessary">Necesarias</TabsTrigger>
                <TabsTrigger value="analytics">Analíticas</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>

              <TabsContent value="necessary" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <Label htmlFor="necessary" className="font-semibold">
                      Cookies Necesarias
                    </Label>
                  </div>
                  <Switch id="necessary" checked={true} disabled={true} />
                </div>
                <p className="text-sm text-muted-foreground">
                  Estas cookies son esenciales para el funcionamiento del sitio
                  web y no se pueden desactivar. Incluyen cookies de sesión,
                  seguridad y funcionalidad básica.
                </p>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    <Label htmlFor="analytics" className="font-semibold">
                      Cookies Analíticas (Google Analytics)
                    </Label>
                  </div>
                  <Switch
                    id="analytics"
                    checked={preferences.analytics}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: checked,
                      }))
                    }
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Nos ayudan a entender cómo interactúas con nuestro sitio web
                  mediante Google Analytics. Esta información nos permite
                  mejorar la experiencia del usuario. Solo se cargan si das tu
                  consentimiento.
                </p>
              </TabsContent>

              <TabsContent value="marketing" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-500" />
                    <Label htmlFor="marketing" className="font-semibold">
                      Cookies de Marketing
                    </Label>
                  </div>
                  <Switch
                    id="marketing"
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: checked,
                      }))
                    }
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Se utilizan para mostrar anuncios más relevantes y medir la
                  efectividad de nuestras campañas publicitarias.
                </p>
              </TabsContent>
            </Tabs>
          )}
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          {!showDetails ? (
            <>
              <div className="flex gap-2 w-full">
                <Button onClick={acceptAll} className="flex-1">
                  Aceptar Todas
                </Button>
                <Button
                  onClick={rejectAll}
                  variant="outline"
                  className="flex-1 bg-transparent"
                >
                  Rechazar Todas
                  {hasExistingCookies && (
                    <span className="ml-1 text-xs">(Eliminar existentes)</span>
                  )}
                </Button>
              </div>
              <Button
                onClick={() => setShowDetails(true)}
                variant="ghost"
                className="w-full"
              >
                Personalizar Preferencias
              </Button>
            </>
          ) : (
            <>
              <div className="flex gap-2 w-full">
                <Button onClick={handleSavePreferences} className="flex-1">
                  Guardar Preferencias
                </Button>
                <Button
                  onClick={acceptAll}
                  variant="outline"
                  className="flex-1 bg-transparent"
                >
                  Aceptar Todas
                </Button>
              </div>
              <Button
                onClick={() => setShowDetails(false)}
                variant="ghost"
                className="w-full"
              >
                Volver
              </Button>
            </>
          )}

          <p className="text-xs text-muted-foreground text-center">
            Puedes cambiar tus preferencias en cualquier momento desde nuestra
            política de cookies.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
