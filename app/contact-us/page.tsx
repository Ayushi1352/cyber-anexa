import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { CyberSecurityTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = { ...(rawData as CyberSecurityTemplateData).common.contactBreadcrumb?.seo };

export default function ContactUsPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <Contact data={sectionData.Contact?.variants?.CyberSecurityContact1} />
    </main>
  );
}
