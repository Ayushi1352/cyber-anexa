import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CyberSecurityTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Quote } from "@/components/sections/Quote";

const templateData: CyberSecurityTemplateData = rawData;
const sectionData = templateData.categories.CyberSecurity.sections;
const commonData = templateData.common;

export const metadata: Metadata = commonData.quoteBreadcrumb.seo;

export default function GetAQuotePage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.quoteBreadcrumb} ui={commonData.globalUI} />
      <Quote data={sectionData.Quote?.variants?.CyberSecurityQuote1} />
    </main>
  );
}
