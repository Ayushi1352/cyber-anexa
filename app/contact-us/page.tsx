import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import RichText from "@/components/ui/RichText";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import ContactMap from "./ContactMap";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: site.pages.contactUs.title };

export default function ContactUsPage() {
  const content = site.pages.contactUs;
  return (
    <>
      <PageBanner title={content.title} />
      <section className="bg-[linear-gradient(180deg,#fafcff_0%,#f5f9fe_100%)] pb-16 pt-12 md:pt-14 xl:pb-[6.1rem] xl:pt-[3.6rem]">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[697fr_570fr] lg:items-end lg:gap-[1rem] xl:pl-[5.1rem] xl:pr-[4.6rem]">
          <div>
            <SectionLabel text={content.label} variant="line-left" />
            <h2 className="mt-4 font-heading text-[2rem] font-extrabold leading-[1.18] tracking-[-0.02em] text-navy sm:text-[2.5rem] xl:mt-[1rem] xl:text-[3.08rem]">
              <RichText text={content.heading} breakFrom="sm" />
            </h2>
            <p className="mt-4 font-body text-[1.0625rem] leading-[1.58] text-body xl:mt-[0.85rem] xl:text-[1.08rem]">
              <RichText text={content.description} breakFrom="lg" highlightClassName="" />
            </p>
            <div className="mt-8 xl:mt-[2.15rem]">
              <ContactForm />
            </div>
          </div>
          <ContactDetails />
        </div>
      </section>
      <ContactMap />
    </>
  );
}
