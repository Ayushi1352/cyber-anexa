import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ProjectsSection from "@/components/home/ProjectsSection";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: site.pages.projects.title };

export default function ProjectsPage() {
  return (
    <>
      <PageBanner title={site.pages.projects.title} />
      <div className="xl:[&>section]:pb-[3.1rem] xl:[&>section]:pt-[2.9rem]">
        <ProjectsSection />
      </div>
    </>
  );
}
