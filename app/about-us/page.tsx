import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CyberSecurityTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TeamSection } from "@/components/sections/TeamSection";

const templateData: CyberSecurityTemplateData = rawData;
const sectionData = templateData.categories.CyberSecurity.sections;
const commonData = templateData.common;

export const metadata: Metadata = commonData.aboutBreadcrumb.seo;

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutSection data={sectionData.AboutUs?.variants?.CyberSecurityAboutUs1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.CyberSecurityWhyChooseUs1} />
      <TeamSection data={sectionData.Team?.variants?.CyberSecurityTeam1} ui={commonData.globalUI} />
    </main>
  );
}
