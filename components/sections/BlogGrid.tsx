'use client';

import { useState } from 'react';
import { BlogCard } from '@/components/ui/BlogCard';
import { Pagination } from '@/components/ui/Pagination';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Heading, Lines } from '@/components/ui/Text';
import type { BlogGridData, BlogGridProps, BlogsData } from '@/types/templates.types';

/** Every post with client-side pagination (posts per page set in templates.json). */
const PostList = ({ data, blogs }: { data: BlogGridData; blogs: BlogsData }) => {
  const perPage = data.postsPerPage;
  const postsToShow = blogs.posts.slice(0, data.totalPosts);
  const totalPages = Math.max(1, Math.ceil(postsToShow.length / perPage));
  const [page, setPage] = useState(1);
  const posts = postsToShow.slice((page - 1) * perPage, page * perPage);

  const goTo = (p: number) => {
    setPage(Math.min(totalPages, Math.max(1, p)));
    document.getElementById('blog-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id="blog-list" className="scroll-mt-28">
      <div data-reveal-stagger className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:mt-[1.6rem] xl:gap-x-[0.94rem] xl:gap-y-[0.85rem]">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} card={blogs.card} compact />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onChange={goTo} data={data.pagination} />
    </div>
  );
};

/** Blog page: the same heading as the home blog section, then every post with pagination. */
export function BlogGrid({ data, blogs }: BlogGridProps) {
  if (!data || !blogs) return null;
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
        <PostList data={data} blogs={blogs} />
      </div>
    </section>
  );
}
