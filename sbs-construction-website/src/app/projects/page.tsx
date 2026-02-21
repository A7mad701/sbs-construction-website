import { ProjectsPageContent } from "@/components/projects/ProjectsPageContent";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore construction and infrastructure projects powered by SBS Co. equipment and sustainable building solutions in Jordan.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
