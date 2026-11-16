import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { CyberSecurityTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Team } from '@/components/sections/Team';

export const metadata: Metadata = { ...(rawData as CyberSecurityTemplateData).common.aboutBreadcrumb?.seo };

export default function AboutUsPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.CyberSecurityAboutUs1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.CyberSecurityWhyChooseUs1} />
      <Team data={sectionData.Team?.variants?.CyberSecurityTeam1} />
    </main>
  );
}
