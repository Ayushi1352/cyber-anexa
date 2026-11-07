import Image from "next/image";
import { LuCalendarDays, LuFolderOpen } from "react-icons/lu";
import type { BlogDetailData } from "@/types/templates.types";

const textClass = "font-body text-[1.0625rem] leading-[1.66] text-[var(--color-text-article)] xl:text-[1.2rem]";

export function BlogArticle({ data: content }: { data: BlogDetailData }) {
  const { post } = content;
  const image = post.image;

  return (
    <article>
      <div className="relative aspect-[1077/745] overflow-hidden rounded-[0.75rem]">
        <Image src={image} alt={post.title} fill priority sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-[0.85rem] gap-y-1 font-body text-[0.95rem] xl:mt-[1.4rem] xl:px-[0.4rem] xl:text-[1.03rem]">
        <span className="inline-flex items-center gap-[0.55rem] text-primary">
          <LuFolderOpen className="size-[1.15rem] fill-primary" strokeWidth={1.5} aria-hidden="true" />
          {post.category}
        </span>
        <span className="text-[var(--color-text-faint)]" aria-hidden="true">|</span>
        <span className="inline-flex items-center gap-[0.55rem] text-muted">
          <LuCalendarDays className="size-[1.15rem] text-primary" strokeWidth={2} aria-hidden="true" />
          {post.date}
        </span>
      </div>

      <div className="xl:px-[0.4rem]">
        <h2 className="mt-4 font-body text-[2rem] font-bold leading-[1.25] tracking-[-0.015em] text-navy sm:text-[2.3rem] xl:mt-[1.15rem] xl:text-[2.45rem] xl:leading-[1.33]">
          {post.title}
        </h2>
        <p className={`mt-4 xl:mt-[0.75rem] ${textClass}`}>{content.intro}</p>

        <blockquote className="relative mt-6 min-h-[5rem] rounded-[0.56rem] bg-[var(--color-article-tag-bg)] py-5 pl-[5.6rem] pr-5 xl:mt-[1.7rem] xl:min-h-[8.95rem] xl:py-[1.85rem] xl:pl-[6.9rem] xl:pr-[2rem]">
          <span className="absolute left-0 top-0 flex size-[4.25rem] items-center justify-center rounded-[0.4rem] bg-primary xl:h-[5rem] xl:w-[4.9rem]">
            <svg viewBox="0 0 40 32" className="h-[1.6rem] w-[2rem] text-white xl:h-[2rem] xl:w-[2.5rem]" fill="currentColor" aria-hidden="true">
              <path d="M0 32V19.6C0 8.9 5.6 2.3 16 0l1.6 4C11.9 5.9 9.1 9.6 8.8 15.2H16V32H0Zm22.4 0V19.6C22.4 8.9 28 2.3 38.4 0L40 4c-5.7 1.9-8.5 5.6-8.8 11.2h7.2V32H22.4Z" />
            </svg>
          </span>
          <p className="font-body text-[1.125rem] italic leading-[1.5] text-navy xl:text-[1.31rem]">{content.quote}</p>
        </blockquote>

        <p className={`mt-5 xl:mt-[1.35rem] ${textClass}`}>{content.body}</p>

        <div className="mt-6 grid grid-cols-1 gap-[1.2rem] sm:grid-cols-[398fr_380fr] xl:mt-[1.6rem]">
          {content.images.map((img) => (
            <div key={img.src} className="relative aspect-[531/336] overflow-hidden rounded-[0.56rem]">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 28vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>

        {content.sections.map((section, i) => (
          <div key={section.heading} className={i === 0 ? "mt-8 xl:mt-[2rem]" : "mt-7 xl:mt-[2.35rem]"}>
            <h3 className="font-body text-[1.4rem] font-semibold leading-tight text-navy xl:text-[1.57rem]">{section.heading}</h3>
            <p className={`mt-3 xl:mt-[0.75rem] ${textClass}`}>{section.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
