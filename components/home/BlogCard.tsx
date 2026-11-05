import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, FolderOpen } from "lucide-react";
import RichText from "@/components/ui/RichText";
import { plain, site, type BlogPost } from "@/lib/site";

/**
 * Horizontal blog card — used on Home and the Blog page.
 * `compact` = the slightly smaller version used in the Blog page grid.
 */
export default function BlogCard({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className={`group flex flex-col gap-5 rounded-[0.47rem] border border-[#edf2f9] bg-white p-3 shadow-[0_0.5rem_1.4rem_-1rem_rgba(23,72,160,0.18)] sm:flex-row sm:items-start ${
        compact ? "sm:gap-[1.3rem] sm:p-[0.5rem] sm:pr-[0.4rem]" : "sm:gap-[1.4rem] sm:p-[0.7rem]"
      }`}>
      <Link
        href={href}
        className={`relative block w-full shrink-0 overflow-hidden rounded-[0.4rem] sm:w-[42%] ${
          compact ? "aspect-[331/218] sm:max-w-[15.5rem] xl:w-[15.5rem]" : "aspect-[351/247] sm:max-w-[16.45rem] xl:w-[16.45rem]"
        }`}
        aria-label={plain(post.title)}
      >
        <Image
          src={post.image}
          alt={plain(post.title)}
          fill
          sizes="(min-width: 640px) 18vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className={`flex min-w-0 flex-1 flex-col px-1 pb-2 sm:px-0 sm:pb-0 ${compact ? "sm:pt-[0.45rem]" : "sm:pt-[0.6rem]"}`}>
        <div className="flex flex-wrap items-center gap-x-[0.6rem] gap-y-1 font-body text-[0.78rem] leading-none">
          <span className="inline-flex items-center gap-[0.45rem] text-primary">
            <FolderOpen className="size-[0.95rem] fill-primary text-primary" strokeWidth={1.5} aria-hidden="true" />
            {post.category}
          </span>
          <span className="text-[#c3cad6]" aria-hidden="true">|</span>
          <span className="inline-flex items-center gap-[0.45rem] text-muted">
            <CalendarDays className="size-[0.95rem] text-primary" strokeWidth={2} aria-hidden="true" />
            {post.date}
          </span>
        </div>
        <h3 className={`${compact ? "mt-[0.5rem]" : "mt-[0.6rem]"} font-heading text-[1.1rem] font-semibold leading-[1.34] tracking-[-0.03em] text-navy xl:text-[1.19rem]`}>
          <Link href={href} className="transition-colors hover:text-primary">
            <RichText text={post.title} breakFrom="xl" />
          </Link>
        </h3>
        <p className={`${compact ? "mt-[0.3rem] leading-[1.4]" : "mt-[0.45rem] leading-[1.45]"} font-body text-[0.9rem] text-[#646b85]`}>
          <RichText text={post.excerpt} breakFrom="xl" highlightClassName="" />
        </p>
        <Link
          href={href}
          className={`inline-flex items-center gap-[1.3rem] ${compact ? "pt-[0.3rem]" : "pt-[0.5rem]"} font-body text-[0.9rem] font-semibold text-primary`}
        >
          {site.pages.blog.readMore}
          <span className={`flex ${compact ? "size-[2.1rem]" : "size-[2.35rem]"} items-center justify-center rounded-full bg-[#e5effd] transition-colors group-hover:bg-primary group-hover:text-white`}>
            <ArrowRight className="size-[1.05rem]" strokeWidth={2.4} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </article>
  );
}
