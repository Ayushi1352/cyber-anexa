import { ArrowButton } from "@/components/ui/ArrowButton";
import { Heading, Lines } from "@/components/ui/Text";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { container } from "@/components/ui/classes";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import type { GlobalUIData, ProjectsData } from "@/types/templates.types";

/** Portfolio grid — used on Home and the Projects page. */
export function ProjectsSection({
  data: content,
  paginated = false,
  ui,
}: {
  data?: ProjectsData;
  paginated?: boolean;
  ui?: GlobalUIData;
}) {
  if (!content) return null;

  return (
    <section className="section-spacing bg-[var(--color-section-tint)]">
      <div className={`${container}`}>
        <div className="mx-auto max-w-[71.8rem]">
          <div data-reveal="up">
          <SectionLabel text={content.label} variant="line-left" />
          <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2rem] xl:mt-[0.95rem] xl:text-[3.62rem] xl:leading-[1.1]">
            <Heading text={content.title} highlight={content.titleHighlight} breakFrom="md" />
          </h2>
          <p className="mt-4 max-w-[52rem] font-body text-[1.0625rem] leading-[1.5] text-body xl:mt-[1.15rem] xl:text-[1.41rem]">
            <Lines text={content.description} breakFrom="lg" />
          </p>
          </div>

          <ProjectsGrid projects={content.items} paginated={paginated} ui={ui} />

          {!paginated && (
            <div className="mt-12 text-center xl:mt-[4.5rem]">
              <ArrowButton
                href={content.buttonUrl}
                label={content.buttonText}
                className="h-[3.4rem] px-[2.3rem] text-[1.0625rem] xl:h-[3.75rem] xl:w-[17.55rem] xl:text-[1.13rem]"
                iconClassName="size-[1.45rem]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
