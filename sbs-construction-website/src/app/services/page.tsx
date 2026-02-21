import { ServicesPageContent } from "@/components/services/ServicesPageContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Equipment supply, sustainable building solutions, heavy machinery procurement, and technical consultation. End-to-end construction solutions in Jordan.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
