"use client";

import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { BlogCard } from "@/components/sections/BlogCard";
import type { BlogGridData, BlogPost, GlobalUIData } from "@/types/templates.types";

/** Blog grid with client-side pagination (posts per page set in templates.json). */
export function BlogGrid({ data, posts: blogPosts, ui }: { data?: BlogGridData; posts: BlogPost[]; ui?: GlobalUIData }) {
  const perPage = data?.postsPerPage ?? 8;
  const postsToShow = blogPosts.slice(0, data?.totalPosts ?? blogPosts.length);
  const totalPages = Math.max(1, Math.ceil(postsToShow.length / perPage));
  const [page, setPage] = useState(1);
  const posts = postsToShow.slice((page - 1) * perPage, page * perPage);

  const goTo = (p: number) => {
    setPage(Math.min(totalPages, Math.max(1, p)));
    document.getElementById("blog-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navBtn =
    "flex size-[2.2rem] items-center justify-center rounded-full border border-[var(--color-pagination-border)] bg-white text-navy shadow-[0_0.3rem_0.8rem_-0.4rem_var(--color-shadow-blue-30)] transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-40";

  return (
    <div id="blog-list" className="scroll-mt-28">
      <div data-reveal-stagger className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:mt-[1.6rem] xl:gap-x-[0.94rem] xl:gap-y-[0.85rem]">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} readMore={ui?.readMore} compact />
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="mt-8 flex items-center justify-center gap-[0.3rem] xl:mt-[1.9rem]" aria-label={ui?.paginationLabel}>
          <button type="button" onClick={() => goTo(page - 1)} disabled={page === 1} className={navBtn} aria-label={ui?.previousPageLabel}>
            <LuChevronLeft className="size-[1rem]" strokeWidth={2.4} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              aria-current={p === page ? "page" : undefined}
              className={`flex size-[2.2rem] items-center justify-center rounded-full font-body text-[0.875rem] font-semibold transition-all duration-300 ${
                p === page
                  ? "border border-primary bg-primary text-white shadow-[0_0.4rem_0.9rem_-0.3rem_var(--color-shadow-primary-60)] hover:border-primary hover:bg-white hover:text-primary"
                  : "border border-[var(--color-pagination-border)] bg-white text-navy hover:border-primary hover:bg-primary hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
          <button type="button" onClick={() => goTo(page + 1)} disabled={page === totalPages} className={navBtn} aria-label={ui?.nextPageLabel}>
            <LuChevronRight className="size-[1rem]" strokeWidth={2.4} />
          </button>
        </nav>
      )}
    </div>
  );
}
