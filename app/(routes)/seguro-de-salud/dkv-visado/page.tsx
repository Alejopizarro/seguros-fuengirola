import ClientPage from "./client-page";
import SchemaOrg from "./schema-org";

// Importar metadata optimizada para SEO
export { extranjeriaMetadata as metadata } from "./metadata";

export default function Page() {
  return (
    <>
      {/* Schema.org - JSON-LD para Rich Snippets en Google */}
      <SchemaOrg />

      {/* Componente cliente con toda la lógica y contenido */}
      <ClientPage />
    </>
  );
}
