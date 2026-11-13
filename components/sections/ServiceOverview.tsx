import Image from "next/image";
import { Heading } from "@/components/ui/Text";
import type { ServiceDetailData } from "@/types/templates.types";

export function ServiceOverview({ data: detail }: { data: ServiceDetailData }) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 bg-[var(--color-overview-bg)] px-5 py-10 sm:px-8 md:py-12 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[32.9rem_1fr] xl:gap-[4.8rem] xl:pb-[1.6rem] xl:pl-[4.1rem] xl:pr-[3.25rem] xl:pt-[2.6rem]">
      <div className="relative aspect-[703/429] w-full overflow-hidden rounded-[0.5rem]">
        <Image
          src={detail.overviewImage}
          alt={`${detail.imageAlt} overview`}
          fill
          sizes="(min-width: 1024px) 35vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="xl:pb-[2.4rem]">
        <span className="block h-[0.14rem] w-[3.3rem] bg-primary xl:-ml-[0.85rem]" aria-hidden="true" />
        <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-tight tracking-[-0.015em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[1.9rem] xl:mt-[0.9rem] xl:text-[2.2rem]">
          <Heading text={detail.overviewTitle} highlight={detail.overviewTitleHighlight} breakFrom="md" />
        </h2>
        <div className="mt-4 space-y-[1.2rem] xl:mt-[1.25rem]">
          {detail.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="font-body text-[1rem] leading-[1.6] text-body xl:text-[0.92rem] xl:leading-[1.62]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
