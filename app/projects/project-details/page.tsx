import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CyberSecurityTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ProjectDetail } from "@/components/sections/ProjectDetail";

const templateData: CyberSecurityTemplateData = rawData;
const sectionData = templateData.categories.CyberSecurity.sections;
const commonData = templateData.common;

// One common detail page for every project: all project links point here.
export const metadata: Metadata = commonData.projectDetailBreadcrumb.seo;

export default function ProjectDetailsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.projectDetailBreadcrumb} ui={commonData.globalUI} />
      <ProjectDetail data={sectionData.ProjectDetail?.variants?.CyberSecurityProjectDetail1} />
    </main>
  );
}
