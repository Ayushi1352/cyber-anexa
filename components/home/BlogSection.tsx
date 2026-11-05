import ArrowButton from "@/components/ui/ArrowButton";
import RichText from "@/components/ui/RichText";
import SectionLabel from "@/components/ui/SectionLabel";
import BlogCard from "@/components/home/BlogCard";
import { blogPosts, site } from "@/lib/site";

export default function BlogSection() {
  const content = site.home.blog;
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#f3f8ff_100%)] pb-14 pt-6 md:pb-16 xl:pb-[2.6rem] xl:pt-[1.3rem]">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-8 xl:px-[2.35rem]">
        <div className="text-center">
          <SectionLabel text={content.label} variant="dot-lines" />
          <h2 className="mt-4 font-heading text-[2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy sm:text-[2.5rem] xl:mt-[0.85rem] xl:text-[3rem]">
            <RichText text={content.title} breakFrom="always" />
          </h2>
          <p className="mx-auto mt-3 max-w-[46rem] font-body text-[1.0625rem] leading-[1.49] text-body xl:mt-[0.45rem] xl:text-[1.07rem]">
            <RichText text={content.description} breakFrom="lg" highlightClassName="" />
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:mt-[1.6rem] xl:gap-x-[0.94rem] xl:gap-y-[1.03rem]">
          {blogPosts.slice(0, content.count).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-8 text-center xl:mt-[1.05rem]">
          <ArrowButton
            href={content.button.href}
            label={content.button.label}
            className="h-[3.05rem] px-[2rem] text-[1rem] xl:w-[12.8rem]"
            iconClassName="size-[1.15rem]"
          />
        </div>
      </div>
    </section>
  );
}
