import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CyberSecurityTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

const templateData: CyberSecurityTemplateData = rawData;
const sectionData = templateData.categories.CyberSecurity.sections;
const commonData = templateData.common;

export const metadata: Metadata = commonData.projectsBreadcrumb.seo;

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.projectsBreadcrumb} ui={commonData.globalUI} />
      <ProjectsSection data={sectionData.Projects?.variants?.CyberSecurityProjects1} paginated ui={commonData.globalUI} />
    </main>
  );
}
