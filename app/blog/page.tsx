import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import type { CyberSecurityTemplateData } from '@/types/templates.types';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogGrid } from '@/components/sections/BlogGrid';

export const metadata: Metadata = { ...(rawData as CyberSecurityTemplateData).common.blogBreadcrumb?.seo };

export default function BlogPage() {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData?.categories?.CyberSecurity?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogBreadcrumb} ui={commonData.globalUI} />
      <BlogGrid data={sectionData.BlogGrid?.variants?.CyberSecurityBlogGrid1} blogs={sectionData.Blogs?.variants?.CyberSecurityBlogs1} />
    </main>
  );
}
