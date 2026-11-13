"use client";

import { useState } from "react";
import { Pagination } from "@/components/ui/Pagination";
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

  return (
    <div id="blog-list" className="scroll-mt-28">
      <div data-reveal-stagger className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:mt-[1.6rem] xl:gap-x-[0.94rem] xl:gap-y-[0.85rem]">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} readMore={ui?.readMore} compact />
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={goTo}
        label={ui?.paginationLabel}
        previousLabel={ui?.previousPageLabel}
        nextLabel={ui?.nextPageLabel}
        pageLabel={ui?.goToPageLabel}
      />
    </div>
  );
}
