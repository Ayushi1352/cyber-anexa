"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Heading, fill } from "@/components/ui/Text";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { container } from "@/components/ui/classes";
import type { GlobalUIData, TestimonialsData } from "@/types/templates.types";

export function TestimonialsSection({ data: content, ui }: { data?: TestimonialsData; ui?: GlobalUIData }) {
  const [active, setActive] = useState(0);
  if (!content) return null;
  const items = content.items;
  const current = items[active];

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + items.length) % items.length);

  return (
    <section className="py-[32px] overflow-hidden bg-[var(--color-section-tint)]">
      <div className={`${container}`}>
        <div className="mx-auto grid max-w-[77rem] grid-cols-1 items-start gap-12 lg:grid-cols-[561fr_550fr] lg:gap-[2.6rem] xl:gap-[7.4rem]">
          {/* Left: text */}
          <div data-reveal="left" className="xl:pt-[0.15rem]">
            <SectionLabel text={content.label} variant="line-left" />
            <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2.2rem] sm:leading-[1.15] xl:mt-[1.35rem] xl:text-[3.25rem] xl:leading-[1.1]">
              <Heading text={content.title} highlight={content.titleHighlight} breakFrom="md" />
            </h2>

            <div className="mt-8 flex items-center gap-[1rem] xl:mt-[1.7rem]">
              <span className="font-heading text-[1.25rem] font-semibold leading-none text-navy">{content.rating}</span>
              <span className="flex gap-[0.45rem]" aria-label={fill(ui?.ratingLabel ?? "", { rating: content.rating })}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon name="LuStar" key={i} className="size-[1.45rem] fill-[var(--color-star)] text-[var(--color-star)]" strokeWidth={1} />
                ))}
              </span>
            </div>

            <figure className="mt-6 xl:mt-[1.45rem]">
              <blockquote className="relative pl-[2.9rem] xl:pl-[3rem]">
                <svg
                  viewBox="0 0 40 32"
                  className="absolute left-0 top-[0.2rem] h-[1.5rem] w-[1.9rem] text-[var(--color-quote-icon)]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 32V19.6C0 8.9 5.6 2.3 16 0l1.6 4C11.9 5.9 9.1 9.6 8.8 15.2H16V32H0Zm22.4 0V19.6C22.4 8.9 28 2.3 38.4 0L40 4c-5.7 1.9-8.5 5.6-8.8 11.2h7.2V32H22.4Z" />
                </svg>
                <p
                  key={active}
                  className="min-h-[9.5rem] animate-fade-in font-body text-[1.0625rem] leading-[1.45] text-body sm:min-h-[8rem] xl:min-h-[8.6rem] xl:max-w-[32.1rem] xl:text-[1.16rem] xl:leading-[1.44]"
                >
                  {current.quote}
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-start gap-[1.5rem] xl:mt-[1.35rem]">
                <span className="mt-[0.65rem] block h-[0.14rem] w-[3rem] shrink-0 bg-primary" aria-hidden="true" />
                <span>
                  <span className="block font-heading text-[1.2rem] font-semibold leading-tight text-navy xl:text-[1.25rem]">
                    {current.name}
                  </span>
                  <span className="mt-[0.45rem] block font-body text-[1rem] text-muted xl:text-[1.06rem]">{current.role}</span>
                </span>
              </figcaption>
            </figure>

            <div className="mt-8 flex gap-[1.35rem] xl:mt-[1.25rem]">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex size-[3.56rem] items-center justify-center rounded-full border-2 border-primary bg-white text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md active:bg-primary active:text-white active:scale-95"
                aria-label={ui?.previousLabel}
              >
                <Icon name="LuArrowLeft" className="size-[1.35rem]" strokeWidth={2.2} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex size-[3.56rem] items-center justify-center rounded-full border-2 border-primary bg-white text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md active:bg-primary active:text-white active:scale-95"
                aria-label={ui?.nextLabel}
              >
                <Icon name="LuArrowRight" className="size-[1.35rem]" strokeWidth={2.2} />
              </button>
            </div>
          </div>

          {/* Right: client avatars + photo */}
          <div data-reveal="right" className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-start sm:justify-center sm:gap-[1.75rem]">
            <div className="flex w-full items-center justify-center gap-2 py-2 sm:w-auto sm:flex-col sm:gap-[0.75rem] sm:py-0">
              {items.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative size-[2.85rem] shrink-0 overflow-hidden rounded-full transition-all min-[360px]:size-[3.15rem] min-[420px]:size-[3.5rem] sm:size-[5.5rem] ${
                    i === active
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-[var(--color-section-tint)] sm:ring-[0.19rem] sm:ring-[var(--color-blue-accent)] sm:ring-offset-[0.22rem]"
                      : "opacity-90 hover:opacity-100"
                  }`}
                  aria-label={fill(ui?.showTestimonialLabel ?? "", { name: item.name })}
                  aria-pressed={i === active}
                >
                  <Image src={item.avatar} alt={item.name} fill sizes="88px" className="object-cover" />
                </button>
              ))}
            </div>
            <div className="relative w-full max-w-[24rem] sm:mt-[0.05rem] sm:w-auto sm:max-w-[21rem] sm:flex-1 lg:max-w-[26.9rem]">
              <span
                className="absolute -right-[1.8rem] -top-[2.75rem] h-[23.15rem] w-[83%] rounded-[1.4rem] bg-[var(--color-blue-tint)] max-sm:hidden"
                aria-hidden="true"
              />
              <span
                className="absolute left-[87%] top-[69.8%] h-[10.7rem] w-[7.1rem] bg-[radial-gradient(circle,var(--color-dots)_0.09rem,transparent_0.11rem)] bg-[length:1.17rem_1.17rem] max-sm:hidden"
                aria-hidden="true"
              />
              <div className="relative aspect-[574/655] overflow-hidden rounded-[1rem]">
                <Image
                  key={active}
                  src={current.image ?? content.image}
                  alt={current.image ? current.name : content.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="animate-fade-in object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
