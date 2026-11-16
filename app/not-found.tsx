import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { CyberSecurityTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { NotFound } from '@/components/sections/NotFound';

export const metadata: Metadata = { ...(rawData as CyberSecurityTemplateData).common.notFoundBreadcrumb?.seo };

export default function NotFoundPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.notFoundBreadcrumb} ui={commonData.globalUI} />
      <NotFound data={sectionData.NotFound?.variants?.CyberSecurityNotFound1} />
    </main>
  );
}
