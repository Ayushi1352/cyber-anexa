import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/ui/PageBanner";
import BlogArticle from "./BlogArticle";
import BlogSidebar from "./BlogSidebar";
import { blogPosts, getPost, plain, site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  return post ? { title: plain(post.title), description: plain(post.excerpt) } : {};
}

export default async function BlogDetailPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner title={site.pages.blogDetail.title} />
      <section className="bg-[linear-gradient(180deg,#fafcff_0%,#f6f9fe_100%)] pb-16 pt-12 md:pt-14 xl:pb-[4.1rem] xl:pt-[4.9rem]">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[807fr_430fr] lg:gap-[2.25rem] xl:pl-[6.2rem] xl:pr-[4.25rem]">
          <BlogArticle post={post} />
          <BlogSidebar />
        </div>
      </section>
    </>
  );
}
