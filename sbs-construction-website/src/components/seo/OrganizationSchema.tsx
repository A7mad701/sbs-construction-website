import { getOrganizationSchema } from "@/lib/metadata";

export function OrganizationSchema() {
  const schema = getOrganizationSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
