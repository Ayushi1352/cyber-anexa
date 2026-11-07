import Image from "next/image";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Heading } from "@/components/ui/Text";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServiceDetailData } from "@/types/templates.types";

export function ServiceIntro({ data: detail }: { data: ServiceDetailData }) {
  const content = detail;
  return (
    <div className="grid grid-cols-1 items-center gap-10 bg-[linear-gradient(120deg,var(--color-intro-top)_0%,var(--color-intro-bottom)_100%)] px-5 py-10 sm:px-8 md:py-12 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_36.5rem] xl:gap-[2.5rem] xl:pb-[1.3rem] xl:pl-[4.125rem] xl:pr-[3.3rem] xl:pt-[1.83rem]">
      <div className="xl:pb-[0.5rem]">
        <SectionLabel text={content.label} variant="lines" className="!justify-start" />
        <h2 className="mt-4 font-heading text-[1.65rem] font-extrabold leading-[1.15] tracking-[-0.015em] text-navy min-[360px]:text-[1.85rem] min-[400px]:text-[2.1rem] sm:text-[2.7rem] xl:mt-[1rem] xl:text-[3.25rem]">
          <Heading text={detail.title} highlight={detail.titleHighlight} breakFrom="always" />
        </h2>
        <p className="mt-4 max-w-[30.4rem] font-body text-[1.0625rem] leading-[1.52] text-body xl:mt-[1.15rem] xl:text-[1.03rem]">
          {detail.description}
        </p>
        <ArrowButton
          href={content.buttonUrl}
          label={content.buttonText}
          shape="rounded"
          className="mt-7 h-[3.2rem] px-[1.6rem] font-heading text-[1.0625rem] font-semibold xl:mt-[2.2rem] xl:w-[12.2rem]"
          iconClassName="size-[1.15rem]"
        />
      </div>
      <div className="relative aspect-[779/563] w-full overflow-hidden rounded-[0.56rem]">
        <Image
          src={detail.heroImage}
          alt={detail.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
