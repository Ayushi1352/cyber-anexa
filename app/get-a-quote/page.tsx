import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import QuoteIntro from "./QuoteIntro";
import QuoteForm from "./QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: site.pages.getAQuote.title };

export default function GetAQuotePage() {
  return (
    <>
      <PageBanner title={site.pages.getAQuote.title} />
      <section className="bg-[linear-gradient(180deg,#fafcff_0%,#f4f8fe_100%)] pb-16 pt-12 md:pt-14 xl:pb-[4.7rem] xl:pt-[4.15rem]">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-start gap-10 px-5 md:px-8 lg:grid-cols-[702fr_612fr] lg:gap-[2.2rem] xl:pl-[3.25rem] xl:pr-[2.5rem]">
          <QuoteIntro />
          <div className="xl:-mt-[0.5rem]">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
