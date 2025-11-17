import ClientPage from "./client-page";
import SchemaOrg from "./schema-org";

export { decesosMetadata as metadata } from "./metadata";

export default function Page() {
  return (
    <>
      {/* Schema.org - JSON-LD para Rich Snippets */}
      <SchemaOrg />

      {/* Componente cliente con toda la lógica */}
      <ClientPage />
    </>
  );
}
