import { AboutPageContent } from "@/components/about/AboutPageContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Hakmi & Abbas Sustainable Building Solutions Co. - Trusted construction equipment and sustainable building solutions provider in Jordan and the Middle East.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
