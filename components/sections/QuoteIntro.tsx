import Image from "next/image";
import { Heading, Lines } from "@/components/ui/Text";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { QuoteData } from "@/types/templates.types";

export function QuoteIntro({ data: content }: { data: QuoteData }) {
  return (
    <div>
      <div className="xl:pl-[1.5rem]">
        <SectionLabel text={content.label} variant="line-left" />
        <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2rem] xl:mt-[1.05rem] xl:text-[3.22rem] xl:leading-[1.12]">
          <Heading text={content.title} highlight={content.titleHighlight} breakFrom="md" />
        </h2>
        <p className="mt-4 font-body text-[1.0625rem] leading-[1.58] text-body xl:mt-[0.85rem] xl:text-[1.08rem]">
          <Lines text={content.description} breakFrom="lg" />
        </p>
      </div>

      <div className="relative mt-8 aspect-[937/595] overflow-hidden rounded-[1rem] xl:mt-[2.2rem]">
        <Image src={content.image} alt={content.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-[174fr_262fr_300fr] sm:gap-0 xl:mt-[2.35rem]">
        {content.features.map((feature, i) => (
          <div
            key={feature.title}
            className={
              i === 0
                ? "sm:pl-[0.7rem] sm:pr-4"
                : `sm:border-l sm:border-[var(--color-quote-divider)] sm:pr-3 ${i === 1 ? "sm:pl-[2.3rem]" : "sm:pl-[2.6rem]"}`
            }
          >
            <h3 className="font-heading text-[1.1rem] font-bold leading-tight tracking-[-0.01em] text-navy xl:text-[1.13rem]">{feature.title}</h3>
            <p className="mt-2 font-body text-[0.95rem] leading-[1.5] text-body xl:mt-[0.55rem]">
              <Lines text={feature.text} breakFrom="lg" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
