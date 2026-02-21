import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact SBS Co. for construction equipment inquiries, quotes, and technical support in Jordan. Get in touch with our team.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
