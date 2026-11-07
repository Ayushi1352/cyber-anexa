import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "@/components/ui/ArrowButton";
import type { BlogDetailData } from "@/types/templates.types";

export function BlogSidebar({ data: detail }: { data: BlogDetailData }) {
  const recent = detail.recentPosts;

  return (
    <aside className="flex flex-col gap-8 xl:gap-[1.9rem]">
      <div className="rounded-[0.75rem] border border-[var(--color-sidebar-border)] bg-white px-5 pb-6 pt-7 shadow-[0_0.8rem_2rem_-1.3rem_var(--color-shadow-blue-25)] xl:pb-[2rem] xl:pl-[1.25rem] xl:pr-[0.85rem] xl:pt-[1.85rem]">
        <h2 className="flex items-center gap-[0.75rem] font-body text-[1.3rem] font-bold leading-none text-navy xl:text-[1.42rem]">
          <span className="block h-[1.85rem] w-[0.28rem] rounded-full bg-primary" aria-hidden="true" />
          {detail.recentTitle}
        </h2>
        <ul className="mt-6 xl:mt-[1.85rem]">
          {recent.map((post, i) => (
            <li key={post.id} className={i < recent.length - 1 ? "border-b border-[var(--color-sidebar-divider)] pb-[1rem] xl:pb-[1.05rem]" : ""}>
              <Link href={post.url} className={`group flex items-start gap-[1.25rem] ${i > 0 ? "pt-[1rem] xl:pt-[1.15rem]" : ""}`}>
                <span className="relative aspect-[164/150] w-[6.5rem] shrink-0 overflow-hidden rounded-[0.4rem] xl:w-[7.5rem]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="min-w-0 xl:pt-[0.2rem]">
                  <span className="block font-body text-[1rem] font-semibold leading-[1.5] text-navy transition-colors group-hover:text-primary xl:text-[1.15rem] xl:leading-[1.62]">
                    {post.title}
                  </span>
                  <span className="mt-[0.45rem] block font-body text-[0.95rem] text-muted xl:mt-[0.5rem] xl:text-[1.03rem]">{post.date}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative aspect-[551/788] w-full overflow-hidden rounded-[0.75rem] max-lg:max-w-[26rem] lg:mx-auto lg:w-[96%]">
        <Image src={detail.cta.image} alt="" fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-shadow-navy-25)_0%,var(--color-shadow-navy-0)_55%)]" aria-hidden="true" />
        <div className="relative px-[1.7rem] pt-[2rem] xl:pt-[2.05rem]">
          <h2 className="max-w-[15rem] font-body text-[1.65rem] font-bold leading-[1.42] text-white xl:text-[1.8rem] xl:leading-[1.45]">
            {detail.cta.title}
          </h2>
          <p className="mt-4 max-w-[16rem] font-body text-[1rem] leading-[1.5] text-white/90 xl:mt-[1.05rem] xl:text-[1.06rem]">
            {detail.cta.text}
          </p>
          <ArrowButton
            href={detail.cta.buttonUrl}
            label={detail.cta.buttonText}
            className="mt-6 h-[3.3rem] px-[1.75rem] text-[1.0625rem] xl:mt-[1.85rem] xl:h-[3.55rem] xl:w-[12.5rem] xl:text-[1.1rem]"
            iconClassName="size-[1.15rem]"
          />
        </div>
      </div>
    </aside>
  );
}
