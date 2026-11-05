import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/ui/PageBanner";
import ProjectContent from "./ProjectContent";
import ProjectSidebar from "./ProjectSidebar";
import ProjectChallenges from "./ProjectChallenges";
import { getProject, plain, projects, site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  return project ? { title: plain(project.title), description: project.detail.description } : {};
}

export default async function ProjectDetailPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageBanner title={site.pages.projectDetail.title} />
      <section className="bg-[linear-gradient(180deg,#f9fbff_0%,#f6f9fe_100%)] pb-16 pt-12 md:pt-14 xl:pb-[4.25rem] xl:pt-[3.55rem]">
        <div className="mx-auto w-full max-w-[90rem] px-5 md:px-8 xl:pl-[5.8rem] xl:pr-[4rem]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1108fr_538fr] lg:gap-[3rem]">
            <ProjectContent project={project} />
            <div className="lg:pt-[0.2rem]">
              <ProjectSidebar project={project} />
            </div>
          </div>
          <ProjectChallenges project={project} />
        </div>
      </section>
    </>
  );
}
