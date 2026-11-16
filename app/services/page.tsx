import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { CyberSecurityTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesGrid } from '@/components/sections/ServicesGrid';

export const metadata: Metadata = { ...(rawData as CyberSecurityTemplateData).common.servicesBreadcrumb?.seo };

export default function ServicesPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.servicesBreadcrumb} ui={commonData.globalUI} />
      <ServicesGrid data={sectionData.ServicesGrid?.variants?.CyberSecurityServicesGrid1} />
    </main>
  );
}
