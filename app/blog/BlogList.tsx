"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "@/components/home/BlogCard";
import { blogPosts, site } from "@/lib/site";

/** Blog grid with client-side pagination (posts per page set in site.json). */
export default function BlogList() {
  const perPage = site.pages.blog.postsPerPage;
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / perPage));
  const [page, setPage] = useState(1);
  const posts = blogPosts.slice((page - 1) * perPage, page * perPage);

  const goTo = (p: number) => {
    setPage(Math.min(totalPages, Math.max(1, p)));
    document.getElementById("blog-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navBtn =
    "flex size-[2.2rem] items-center justify-center rounded-full border border-[#e3eaf4] bg-white text-navy shadow-[0_0.3rem_0.8rem_-0.4rem_rgba(23,72,160,0.3)] transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40";

  return (
    <div id="blog-list" className="scroll-mt-28">
      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:mt-[1.6rem] xl:gap-x-[0.94rem] xl:gap-y-[0.85rem]">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} compact />
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="mt-8 flex items-center justify-center gap-[0.3rem] xl:mt-[1.9rem]" aria-label="Blog pagination">
          <button type="button" onClick={() => goTo(page - 1)} disabled={page === 1} className={navBtn} aria-label="Previous page">
            <ChevronLeft className="size-[1rem]" strokeWidth={2.4} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              aria-current={p === page ? "page" : undefined}
              className={`flex size-[2.2rem] items-center justify-center rounded-full font-body text-[0.875rem] font-semibold transition-colors ${
                p === page
                  ? "bg-primary text-white shadow-[0_0.4rem_0.9rem_-0.3rem_rgba(5,96,254,0.6)]"
                  : "border border-[#e3eaf4] bg-white text-navy hover:border-primary hover:text-primary"
              }`}
            >
              {p}
            </button>
          ))}
          <button type="button" onClick={() => goTo(page + 1)} disabled={page === totalPages} className={navBtn} aria-label="Next page">
            <ChevronRight className="size-[1rem]" strokeWidth={2.4} />
          </button>
        </nav>
      )}
    </div>
  );
}
