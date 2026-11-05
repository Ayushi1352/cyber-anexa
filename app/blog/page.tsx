import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import RichText from "@/components/ui/RichText";
import SectionLabel from "@/components/ui/SectionLabel";
import BlogList from "./BlogList";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: site.pages.blog.title };

export default function BlogPage() {
  const header = site.home.blog;
  return (
    <>
      <PageBanner title={site.pages.blog.title} />
      <section className="bg-[linear-gradient(180deg,#f9fbff_0%,#f4f8ff_100%)] pb-14 pt-12 md:pb-16 md:pt-14 xl:pb-[2rem] xl:pt-[3.9rem]">
        <div className="mx-auto w-full max-w-[90rem] px-5 md:px-8 xl:px-[2.35rem]">
          <div className="text-center">
            <SectionLabel text={header.label} variant="dot-lines" />
            <h2 className="mt-4 font-heading text-[2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy sm:text-[2.5rem] xl:mt-[0.85rem] xl:text-[3rem]">
              <RichText text={header.title} breakFrom="always" />
            </h2>
            <p className="mx-auto mt-3 max-w-[46rem] font-body text-[1.0625rem] leading-[1.49] text-body xl:mt-[0.45rem] xl:text-[1.07rem]">
              <RichText text={header.description} breakFrom="lg" highlightClassName="" />
            </p>
          </div>
          <BlogList />
        </div>
      </section>
    </>
  );
}
