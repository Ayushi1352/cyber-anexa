import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { CyberSecurityTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Projects } from '@/components/sections/Projects';

export const metadata: Metadata = { ...(rawData as CyberSecurityTemplateData).common.projectsBreadcrumb?.seo };

export default function ProjectsPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.projectsBreadcrumb} ui={commonData.globalUI} />
      <Projects data={sectionData.Projects?.variants?.CyberSecurityProjects1} paginated />
    </main>
  );
}
