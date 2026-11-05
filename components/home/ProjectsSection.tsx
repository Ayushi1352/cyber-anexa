import Image from "next/image";
import Link from "next/link";
import ArrowButton from "@/components/ui/ArrowButton";
import RichText from "@/components/ui/RichText";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects, site, type Project } from "@/lib/site";

/** Image aspect ratios of the staggered (masonry) layout in the design. */
const LEFT_RATIOS = ["aspect-[749/687]", "aspect-[749/579]"];
const RIGHT_RATIOS = ["aspect-[723/613]", "aspect-[723/552]"];

function ProjectCard({ project, ratio }: { project: Project; ratio: string }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className={`relative overflow-hidden rounded-[0.47rem] ${ratio}`}>
        <Image
          src={project.image}
          alt={project.title.replace("\n", " ")}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-5 font-body text-[1.0625rem] font-medium text-primary xl:mt-[1.2rem] xl:text-[1.3rem]">
        {project.category}
      </p>
      <h3 className="mt-2 font-heading text-[1.45rem] font-bold leading-[1.3] tracking-[-0.015em] text-navy transition-colors group-hover:text-primary xl:mt-[0.45rem] xl:text-[1.82rem]">
        <RichText text={project.title} breakFrom="lg" />
      </h3>
    </Link>
  );
}

/** Portfolio grid — used on Home and the Projects page. */
export default function ProjectsSection() {
  const content = site.home.projects;
  const left = projects.filter((_, i) => i % 2 === 0);
  const right = projects.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-[#f8fbff] pb-14 pt-14 md:pt-20 xl:pb-[2.45rem] xl:pt-[3.95rem]">
      <div className="container-site">
        <div className="mx-auto max-w-[71.8rem]">
          <SectionLabel text={content.label} variant="dot-line-left" />
          <h2 className="mt-4 font-heading text-[2.1rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy sm:text-[2.6rem] xl:mt-[0.95rem] xl:text-[3.62rem] xl:leading-[1.1]">
            <RichText text={content.title} breakFrom="sm" />
          </h2>
          <p className="mt-4 max-w-[52rem] font-body text-[1.0625rem] leading-[1.5] text-body xl:mt-[1.15rem] xl:text-[1.41rem]">
            <RichText text={content.description} breakFrom="lg" highlightClassName="" />
          </p>

          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[747fr_723fr] md:gap-x-8 xl:mt-[3.6rem] xl:gap-x-[2.95rem]">
            <div className="flex flex-col gap-12 xl:gap-[3.2rem]">
              {left.map((p, i) => (
                <ProjectCard key={p.slug} project={p} ratio={LEFT_RATIOS[i % 2]} />
              ))}
            </div>
            <div className="flex flex-col gap-12 md:pt-[5rem] xl:gap-[3.2rem] xl:pt-[6.6rem]">
              {right.map((p, i) => (
                <ProjectCard key={p.slug} project={p} ratio={RIGHT_RATIOS[i % 2]} />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center xl:mt-[4.5rem]">
            <ArrowButton
              href={content.button.href}
              label={content.button.label}
              className="h-[3.4rem] px-[2.3rem] text-[1.0625rem] xl:h-[3.75rem] xl:w-[17.55rem] xl:text-[1.13rem]"
              iconClassName="size-[1.45rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
