import { SectionLabel } from "@/components/ui/SectionLabel";
import { Heading, Lines } from "@/components/ui/Text";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactMap } from "@/components/sections/ContactMap";
import type { ContactData } from "@/types/templates.types";

/** Contact page body: heading + form on the left, dark details card on the right, map below. */
export function Contact({ data }: { data?: ContactData }) {
  if (!data) return null;
  return (
    <>
      <section className="py-[32px] bg-[linear-gradient(180deg,var(--color-page-top)_0%,var(--color-page-bottom-mid)_100%)]">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[697fr_570fr] lg:items-end lg:gap-[1rem] xl:pl-[5.1rem] xl:pr-[4.6rem]">
          <div data-reveal="up">
            <SectionLabel text={data.label} variant="line-left" />
            <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2rem] xl:mt-[1rem] xl:text-[3.08rem]">
              <Heading text={data.title} highlight={data.titleHighlight} breakFrom="md" />
            </h2>
            <p className="mt-4 font-body text-[1.0625rem] leading-[1.58] text-body xl:mt-[0.85rem] xl:text-[1.08rem]">
              <Lines text={data.description} breakFrom="lg" />
            </p>
            <div className="mt-8 xl:mt-[2.15rem]">
              <ContactForm data={data.form} />
            </div>
          </div>
          <div data-reveal="up" data-reveal-delay="150">
            <ContactDetails data={data.details} />
          </div>
        </div>
      </section>
      <ContactMap data={data.map} />
    </>
  );
}
