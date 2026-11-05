import Image from "next/image";
import RichText from "@/components/ui/RichText";
import SectionLabel from "@/components/ui/SectionLabel";
import { site } from "@/lib/site";

export default function QuoteIntro() {
  const content = site.pages.getAQuote;
  return (
    <div>
      <div className="xl:pl-[1.5rem]">
        <SectionLabel text={content.label} variant="line-left" />
        <h2 className="mt-4 font-heading text-[2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy sm:text-[2.6rem] xl:mt-[1.05rem] xl:text-[3.22rem] xl:leading-[1.12]">
          <RichText text={content.heading} breakFrom="sm" />
        </h2>
        <p className="mt-4 font-body text-[1.0625rem] leading-[1.58] text-body xl:mt-[0.85rem] xl:text-[1.08rem]">
          <RichText text={content.description} breakFrom="lg" highlightClassName="" />
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
                : `sm:border-l sm:border-[#dfe6f0] sm:pr-3 ${i === 1 ? "sm:pl-[2.3rem]" : "sm:pl-[2.6rem]"}`
            }
          >
            <h3 className="font-heading text-[1.1rem] font-bold leading-tight tracking-[-0.01em] text-navy xl:text-[1.13rem]">{feature.title}</h3>
            <p className="mt-2 font-body text-[0.95rem] leading-[1.5] text-body xl:mt-[0.55rem]">
              <RichText text={feature.text} breakFrom="lg" highlightClassName="" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
