"use client";

import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Heading } from "@/components/ui/Text";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/sections/ServiceCard";
import type { GlobalUIData, ServicesGridData } from "@/types/templates.types";

export function ServicesGrid({ data: content, ui }: { data?: ServicesGridData; ui?: GlobalUIData }) {
  const [page, setPage] = useState(1);
  if (!content) return null;
  const perPage = 9;
  const totalPages = Math.max(1, Math.ceil(content.items.length / perPage));
  const services = content.items.slice((page - 1) * perPage, page * perPage);
  const goTo = (nextPage: number) => {
    setPage(Math.min(totalPages, Math.max(1, nextPage)));
    document.getElementById("services-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const navBtn =
    "flex size-[2.2rem] items-center justify-center rounded-full border border-[var(--color-pagination-border)] bg-white text-navy shadow-[0_0.3rem_0.8rem_-0.4rem_var(--color-shadow-blue-30)] transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40";

  return (
    <section className="section-spacing bg-[linear-gradient(180deg,var(--color-page-top)_0%,var(--color-page-bottom-alt)_100%)]">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-8 xl:px-[3.9rem]">
        <div data-reveal="up" className="text-center">
          <SectionLabel text={content.label} variant="dots-lines" />
          <h2 className="-mx-2 mt-3 font-heading text-[3.9vw] font-extrabold leading-[1.3] tracking-[-0.02em] text-navy sm:mx-auto sm:leading-[1.25] md:text-[2rem] xl:mt-[1.05rem] xl:text-[3rem] xl:leading-[1.125] [&>span]:whitespace-nowrap">
            <Heading text={content.title} highlight={content.titleHighlight} breakFrom="always" />
          </h2>
        </div>

        <div id="services-list" className="scroll-mt-28">
          <div data-reveal-stagger className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:mt-[2.6rem] xl:gap-x-[1.03rem] xl:gap-y-[1.45rem]">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} readMore={content.readMore} />
            ))}
          </div>
        </div>

        {totalPages > 1 && (
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
                className={`flex size-[2.2rem] items-center justify-center rounded-full font-body text-[0.875rem] font-semibold transition-colors ${
                  pageNumber === page
                    ? "bg-primary text-white shadow-[0_0.4rem_0.9rem_-0.3rem_var(--color-shadow-primary-60)]"
                    : "border border-[var(--color-pagination-border)] bg-white text-navy hover:border-primary hover:text-primary"
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
      </div>
    </section>
  );
}
