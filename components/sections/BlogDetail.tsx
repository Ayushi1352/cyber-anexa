import { BlogArticle } from "@/components/sections/BlogArticle";
import { BlogSidebar } from "@/components/sections/BlogSidebar";
import type { BlogDetailData } from "@/types/templates.types";

/** Blog detail page body: the article and the "Recent Post" + contact sidebar. */
export function BlogDetail({ data }: { data?: BlogDetailData }) {
  if (!data) return null;
  return (
    <section className="py-[32px] bg-[linear-gradient(180deg,var(--color-page-top)_0%,var(--color-page-bottom)_100%)]">
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[807fr_430fr] lg:gap-[2.25rem] xl:pl-[6.2rem] xl:pr-[4.25rem]">
        <div data-reveal="up">
          <BlogArticle data={data} />
        </div>
        <div data-reveal="up" data-reveal-delay="150">
          <BlogSidebar data={data} />
        </div>
      </div>
    </section>
  );
}
