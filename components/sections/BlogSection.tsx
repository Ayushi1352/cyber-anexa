import { ArrowButton } from "@/components/ui/ArrowButton";
import { Heading, Lines } from "@/components/ui/Text";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BlogCard } from "@/components/sections/BlogCard";
import type { BlogsData, GlobalUIData } from "@/types/templates.types";

export function BlogSection({ data: content, ui }: { data?: BlogsData; ui?: GlobalUIData }) {
  if (!content) return null;
  return (
    <section className="section-spacing bg-[linear-gradient(180deg,var(--color-section-tint)_0%,var(--color-light)_100%)]">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-8 xl:px-[2.35rem]">
        <div data-reveal="up" className="text-center">
          <SectionLabel text={content.label} variant="dots-lines" />
          <h2 className="mx-auto mt-3 max-w-[46rem] font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2rem] xl:mt-[0.85rem] xl:text-[3rem]">
            <Heading text={content.title} highlight={content.titleHighlight} breakFrom="md" />
          </h2>
          <p className="mx-auto mt-3 max-w-[46rem] font-body text-[1.0625rem] leading-[1.49] text-body xl:mt-[0.45rem] xl:text-[1.07rem]">
            <Lines text={content.description} breakFrom="lg" />
          </p>
        </div>

        <div data-reveal-stagger className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:mt-[1.6rem] xl:gap-x-[0.94rem] xl:gap-y-[1.03rem]">
          {content.posts.slice(0, content.count).map((post) => (
            <BlogCard key={post.id} post={post} readMore={ui?.readMore} />
          ))}
        </div>

        <div className="mt-8 text-center xl:mt-[1.05rem]">
          <ArrowButton
            href={content.buttonUrl}
            label={content.buttonText}
            className="h-[3.05rem] px-[2rem] text-[1rem] xl:w-[12.8rem]"
            iconClassName="size-[1.15rem]"
          />
        </div>
      </div>
    </section>
  );
}
