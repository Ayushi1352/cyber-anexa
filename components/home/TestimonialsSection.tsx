"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import RichText from "@/components/ui/RichText";
import { site } from "@/lib/site";

export default function TestimonialsSection() {
  const content = site.home.testimonials;
  const items = content.items;
  const [active, setActive] = useState(0);
  const current = items[active];

  const go = (dir: 1 | -1) => setActive((i) => (i + dir + items.length) % items.length);

  return (
    <section className="overflow-hidden bg-[#f8fbff] pb-16 pt-16 md:pb-20 xl:pb-[4.85rem] xl:pt-[2.6rem]">
      <div className="container-site">
        <div className="mx-auto grid max-w-[77rem] grid-cols-1 items-start gap-12 lg:grid-cols-[561fr_550fr] lg:gap-[2.6rem] xl:gap-[7.4rem]">
          {/* Left: text */}
          <div className="xl:pt-[0.15rem]">
            <div className="flex items-center gap-[1.05rem]">
              <span className="block h-[0.094rem] w-[3rem] bg-primary" aria-hidden="true" />
              <span className="font-body text-[0.875rem] font-semibold uppercase leading-none text-primary xl:text-[0.94rem]">
                {content.label}
              </span>
              <span className="block h-[0.094rem] w-[3rem] bg-primary" aria-hidden="true" />
            </div>
            <h2 className="mt-5 font-heading text-[2.1rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-navy sm:text-[2.6rem] xl:mt-[1.35rem] xl:text-[3.25rem] xl:leading-[1.1]">
              <RichText text={content.title} breakFrom="always" />
            </h2>

            <div className="mt-8 flex items-center gap-[1rem] xl:mt-[1.7rem]">
              <span className="font-heading text-[1.25rem] font-semibold leading-none text-navy">{content.rating}</span>
              <span className="flex gap-[0.45rem]" aria-label={`Rated ${content.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-[1.45rem] fill-[#f7b500] text-[#f7b500]" strokeWidth={1} />
                ))}
              </span>
            </div>

            <figure className="mt-6 xl:mt-[1.45rem]">
              <blockquote className="relative pl-[2.9rem] xl:pl-[3rem]">
                <svg
                  viewBox="0 0 40 32"
                  className="absolute left-0 top-[0.2rem] h-[1.5rem] w-[1.9rem] text-[#3d86f8]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 32V19.6C0 8.9 5.6 2.3 16 0l1.6 4C11.9 5.9 9.1 9.6 8.8 15.2H16V32H0Zm22.4 0V19.6C22.4 8.9 28 2.3 38.4 0L40 4c-5.7 1.9-8.5 5.6-8.8 11.2h7.2V32H22.4Z" />
                </svg>
                <p
                  key={active}
                  className="min-h-[9.5rem] animate-[fadeIn_0.4s_ease] font-body text-[1.0625rem] leading-[1.45] text-body sm:min-h-[8rem] xl:min-h-[8.6rem] xl:max-w-[32.1rem] xl:text-[1.16rem] xl:leading-[1.44]"
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
                className="flex size-[3.56rem] items-center justify-center rounded-full border border-[#d9e4f3] bg-white text-primary transition-colors hover:border-primary"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="size-[1.35rem]" strokeWidth={2.2} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex size-[3.56rem] items-center justify-center rounded-full bg-[#1f6ff8] text-white shadow-[0_0.5rem_1.2rem_-0.4rem_rgba(5,96,254,0.6)] transition-colors hover:bg-primary-dark"
                aria-label="Next testimonial"
              >
                <ArrowRight className="size-[1.35rem]" strokeWidth={2.2} />
              </button>
            </div>
          </div>

          {/* Right: client avatars + photo */}
          <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:gap-[1.75rem]">
            <div className="flex justify-center gap-3 sm:flex-col sm:gap-[0.75rem]">
              {items.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative size-[3.5rem] shrink-0 overflow-hidden rounded-full transition-all sm:size-[5.5rem] ${
                    i === active ? "ring-[0.19rem] ring-[#2f7ff5] ring-offset-[0.22rem] ring-offset-[#f8fbff]" : "opacity-95 hover:opacity-100"
                  }`}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-pressed={i === active}
                >
                  <Image src={item.avatar} alt={item.name} fill sizes="88px" className="object-cover" />
                </button>
              ))}
            </div>
            <div className="relative w-full sm:mt-[0.05rem] sm:w-auto sm:flex-1 lg:max-w-[26.9rem]">
              <span
                className="absolute -right-[1.8rem] -top-[2.75rem] h-[23.15rem] w-[83%] rounded-[1.4rem] bg-[#e7f0fd] max-sm:hidden"
                aria-hidden="true"
              />
              <span
                className="absolute left-[87%] top-[69.8%] h-[10.7rem] w-[7.1rem] bg-[radial-gradient(circle,#80aaf5_0.09rem,transparent_0.11rem)] bg-[length:1.17rem_1.17rem] max-sm:hidden"
                aria-hidden="true"
              />
              <div className="relative aspect-[574/655] overflow-hidden rounded-[1rem]">
                <Image src={content.image} alt={content.imageAlt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
