import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heading, Lines } from "@/components/ui/Text";
import { BlogGrid } from "@/components/sections/BlogGrid";
import type { BlogGridData, BlogsData, GlobalUIData } from "@/types/templates.types";

/** Blog page: the same heading as the home blog section, then every post with pagination. */
export function BlogListing({ blogs, data, ui }: { blogs?: BlogsData; data?: BlogGridData; ui?: GlobalUIData }) {
  if (!blogs) return null;
  return (
    <section className="py-[32px] bg-[linear-gradient(180deg,var(--color-page-top-alt)_0%,var(--color-page-bottom-cool)_100%)]">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-8 xl:px-[2.35rem]">
        <div data-reveal="up" className="text-center">
          <SectionLabel text={blogs.label} variant="dots-lines" />
          <h2 className="mx-auto mt-3 max-w-[46rem] font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2rem] xl:mt-[0.85rem] xl:text-[3rem]">
            <Heading text={blogs.title} highlight={blogs.titleHighlight} breakFrom="md" />
          </h2>
          <p className="mx-auto mt-3 max-w-[46rem] font-body text-[1.0625rem] leading-[1.49] text-body xl:mt-[0.45rem] xl:text-[1.07rem]">
            <Lines text={blogs.description} breakFrom="lg" />
          </p>
        </div>
        <BlogGrid data={data} posts={blogs.posts} ui={ui} />
      </div>
    </section>
  );
}
