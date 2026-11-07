"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Lines, plainText } from "@/components/ui/Text";
import type { GlobalUIData, ProjectItem } from "@/types/templates.types";

const LEFT_RATIOS = ["aspect-[749/687]", "aspect-[749/579]"];
const RIGHT_RATIOS = ["aspect-[723/613]", "aspect-[723/552]"];
const ITEMS_PER_PAGE = 4;

function ProjectCard({ project, ratio }: { project: ProjectItem; ratio: string }) {
  return (
    <Link href={project.url} data-reveal="up" className="group block">
      <div className={`relative overflow-hidden rounded-[0.47rem] ${ratio}`}>
        <Image
          src={project.image}
          alt={plainText(project.title)}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-5 font-body text-[1.0625rem] font-medium text-primary xl:mt-[1.2rem] xl:text-[1.3rem]">
        {project.category}
      </p>
      <h3 className="mt-2 font-heading text-[1.45rem] font-bold leading-[1.3] tracking-[-0.015em] text-navy transition-colors group-hover:text-primary xl:mt-[0.45rem] xl:text-[1.82rem]">
        <Lines text={project.title} breakFrom="lg" />
      </h3>
    </Link>
  );
}

export function ProjectsGrid({
  projects,
  paginated,
  ui,
}: {
  projects: ProjectItem[];
  paginated: boolean;
  ui?: GlobalUIData;
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE));
  const pageProjects = paginated
    ? projects.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    : projects.slice(0, 4);
  const left = pageProjects.filter((_, i) => i % 2 === 0);
  const right = pageProjects.filter((_, i) => i % 2 === 1);
  const goTo = (nextPage: number) => {
    setPage(Math.min(totalPages, Math.max(1, nextPage)));
    document.getElementById("projects-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const navBtn =
    "flex size-[2.2rem] items-center justify-center rounded-full border border-[var(--color-pagination-border)] bg-white text-navy shadow-[0_0.3rem_0.8rem_-0.4rem_var(--color-shadow-blue-30)] transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-40";

  return (
    <>
      <div id="projects-list" className="scroll-mt-28 mt-10 grid grid-cols-1 gap-12 md:grid-cols-[747fr_723fr] md:gap-x-8 xl:mt-[3.6rem] xl:gap-x-[2.95rem]">
        <div className="flex flex-col gap-12 xl:gap-[3.2rem]">
          {left.map((project, i) => (
            <ProjectCard key={project.id} project={project} ratio={LEFT_RATIOS[i % 2]} />
          ))}
        </div>
        <div className="flex flex-col gap-12 md:pt-[5rem] xl:gap-[3.2rem] xl:pt-[6.6rem]">
          {right.map((project, i) => (
            <ProjectCard key={project.id} project={project} ratio={RIGHT_RATIOS[i % 2]} />
          ))}
        </div>
      </div>

      {paginated && totalPages > 1 && (
        <nav className="mt-8 flex items-center justify-center gap-[0.3rem] xl:mt-[1.9rem]" aria-label={ui?.paginationLabel}>
          <button type="button" onClick={() => goTo(page - 1)} disabled={page === 1} className={navBtn} aria-label={ui?.previousPageLabel}>
            <LuChevronLeft className="size-[1rem]" strokeWidth={2.4} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => goTo(pageNumber)}
              aria-current={pageNumber === page ? "page" : undefined}
              className={`flex size-[2.2rem] items-center justify-center rounded-full font-body text-[0.875rem] font-semibold transition-all duration-300 ${
                pageNumber === page
                  ? "border border-primary bg-primary text-white shadow-[0_0.4rem_0.9rem_-0.3rem_var(--color-shadow-primary-60)] hover:border-primary hover:bg-white hover:text-primary"
                  : "border border-[var(--color-pagination-border)] bg-white text-navy hover:border-primary hover:bg-primary hover:text-white"
              }`}
            >
              {pageNumber}
            </button>
          ))}
          <button type="button" onClick={() => goTo(page + 1)} disabled={page === totalPages} className={navBtn} aria-label={ui?.nextPageLabel}>
            <LuChevronRight className="size-[1rem]" strokeWidth={2.4} />
          </button>
        </nav>
      )}
    </>
  );
}
