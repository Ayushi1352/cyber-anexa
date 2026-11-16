import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { CyberSecurityTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Quote } from '@/components/sections/Quote';

export const metadata: Metadata = { ...(rawData as CyberSecurityTemplateData).common.quoteBreadcrumb?.seo };

export default function GetAQuotePage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.quoteBreadcrumb} ui={commonData.globalUI} />
      <Quote data={sectionData.Quote?.variants?.CyberSecurityQuote1} />
    </main>
  );
}
