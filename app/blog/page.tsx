import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { CyberSecurityTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogListing } from "@/components/sections/BlogListing";

const templateData: CyberSecurityTemplateData = rawData;
const sectionData = templateData.categories.CyberSecurity.sections;
const commonData = templateData.common;

export const metadata: Metadata = commonData.blogBreadcrumb.seo;

export default function BlogPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogBreadcrumb} ui={commonData.globalUI} />
      <BlogListing blogs={sectionData.Blogs?.variants?.CyberSecurityBlogs1} data={sectionData.BlogGrid?.variants?.CyberSecurityBlogGrid1} ui={commonData.globalUI} />
    </main>
  );
}
