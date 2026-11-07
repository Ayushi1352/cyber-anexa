import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CyberSecurityTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { NotFoundSection } from "@/components/sections/NotFoundSection";

const templateData: CyberSecurityTemplateData = rawData;
const sectionData = templateData.categories.CyberSecurity.sections;
const commonData = templateData.common;

export const metadata: Metadata = commonData.notFoundBreadcrumb.seo;

export default function NotFound() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.notFoundBreadcrumb} ui={commonData.globalUI} />
      <NotFoundSection data={sectionData.NotFound?.variants?.CyberSecurityNotFound1} />
    </main>
  );
}
