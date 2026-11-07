import { QuoteIntro } from "@/components/sections/QuoteIntro";
import { QuoteForm } from "@/components/sections/QuoteForm";
import type { QuoteData } from "@/types/templates.types";

/** Get a Quote page body: intro + image on the left, quote form card on the right. */
export function Quote({ data }: { data?: QuoteData }) {
  if (!data) return null;
  return (
    <section className="section-spacing bg-[linear-gradient(180deg,var(--color-page-top)_0%,var(--color-page-bottom-deep)_100%)]">
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-start gap-10 px-5 md:px-8 lg:grid-cols-[702fr_612fr] lg:gap-[2.2rem] xl:pl-[3.25rem] xl:pr-[2.5rem]">
        <div data-reveal="up">
          <QuoteIntro data={data} />
        </div>
        <div data-reveal="up" data-reveal-delay="150" className="xl:-mt-[0.5rem]">
          <QuoteForm data={data.form} />
        </div>
      </div>
    </section>
  );
}
