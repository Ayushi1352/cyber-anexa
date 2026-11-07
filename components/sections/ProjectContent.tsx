import Image from "next/image";
import { Lines } from "@/components/ui/Text";
import type { ProjectDetailData } from "@/types/templates.types";

const headingClass =
  "font-body text-[1.75rem] font-bold leading-tight tracking-[-0.01em] text-navy xl:text-[2.45rem]";
const textClass = "font-body text-[1.0625rem] leading-[1.63] text-[var(--color-text-strong)] xl:text-[1.2rem]";

export function ProjectContent({ data: detail }: { data: ProjectDetailData }) {
  const content = detail;
  return (
    <div>
      <div className="flex items-center gap-[0.85rem]">
        <span className="block h-[0.094rem] w-[1.6rem] bg-primary" aria-hidden="true" />
        <span className="font-body text-[0.875rem] font-medium uppercase leading-none tracking-[0.04em] text-[var(--color-text-project)]">
          {content.label}
        </span>
      </div>
      <h2 className="mt-4 font-body text-[2rem] font-bold leading-[1.22] tracking-[-0.015em] text-navy sm:text-[2.3rem] xl:mt-[1rem] xl:text-[2.85rem] xl:leading-[1.2]">
        <Lines text={detail.title} breakFrom="lg" />
      </h2>
      <p className={`mt-3 xl:mt-[0.65rem] ${textClass}`}>{detail.description}</p>

      <div className="relative mt-7 aspect-[1108/561] overflow-hidden rounded-[0.47rem] xl:mt-[1.7rem]">
        <Image src={detail.mainImage} alt={detail.mainImageAlt} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
      </div>

      <h2 className={`mt-8 xl:mt-[1.85rem] ${headingClass}`}>{content.resultTitle}</h2>
      <p className={`mt-3 xl:mt-[0.75rem] ${textClass}`}>{detail.result}</p>

      <div className="relative mt-6 aspect-[1108/367] overflow-hidden rounded-[0.47rem] xl:mt-[1.5rem]">
        <Image src={detail.resultImage} alt="" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
      </div>

      <h2 className={`mt-8 xl:mt-[1.65rem] ${headingClass}`}>{content.challengeTitle}</h2>
      <p className={`mt-3 xl:mt-[0.75rem] ${textClass}`}>{detail.challenge}</p>
    </div>
  );
}
