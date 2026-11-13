import { ProjectContent } from "@/components/sections/ProjectContent";
import { ProjectSidebar } from "@/components/sections/ProjectSidebar";
import { ProjectChallenges } from "@/components/sections/ProjectChallenges";
import type { ProjectDetailData } from "@/types/templates.types";

/** Project detail page body: content + "Project Information" sidebar, then the challenge / solution boxes. */
export function ProjectDetail({ data }: { data?: ProjectDetailData }) {
  if (!data) return null;
  return (
    <section className="py-[32px] bg-[linear-gradient(180deg,var(--color-page-top-alt)_0%,var(--color-page-bottom)_100%)]">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-8 xl:pl-[5.8rem] xl:pr-[4rem]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1108fr_538fr] lg:gap-[3rem]">
          <div data-reveal="up">
            <ProjectContent data={data} />
          </div>
          <div data-reveal="up" data-reveal-delay="150" className="lg:pt-[0.2rem]">
            <ProjectSidebar data={data} />
          </div>
        </div>
        <div data-reveal="up">
          <ProjectChallenges data={data} />
        </div>
      </div>
    </section>
  );
}
