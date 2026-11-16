import Image from 'next/image';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { Icon } from '@/components/ui/Icon';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Heading } from '@/components/ui/Text';
import type { ServiceDetailData, ServiceDetailProps } from '@/types/templates.types';

/** Heading, text and button beside the service photo. */
const ServiceIntro = ({ data: detail }: { data: ServiceDetailData }) => {
  const content = detail;
  return (
    <div className="grid grid-cols-1 items-center gap-10 bg-[linear-gradient(120deg,var(--color-intro-top)_0%,var(--color-intro-bottom)_100%)] px-5 py-10 sm:px-8 md:py-12 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_36.5rem] xl:gap-[2.5rem] xl:pb-[1.3rem] xl:pl-[4.125rem] xl:pr-[3.3rem] xl:pt-[1.83rem]">
      <div className="xl:pb-[0.5rem]">
        <SectionLabel text={content.label} variant="line-left" />
        <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.015em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2.2rem] xl:mt-[1rem] xl:text-[3.25rem]">
          <Heading text={detail.title} highlight={detail.titleHighlight} breakFrom="md" />
        </h2>
        <p className="mt-4 max-w-[30.4rem] font-body text-[1.0625rem] leading-[1.52] text-body xl:mt-[1.15rem] xl:text-[1.03rem]">
          {detail.description}
        </p>
        <ArrowButton
          href={content.buttonUrl}
          label={content.buttonText}
          icon={content.buttonIcon}
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
};

/** "Service Overview": photo and paragraphs. */
const ServiceOverview = ({ data: detail }: { data: ServiceDetailData }) => (
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

/** "What's Included": icon cards. */
const ServiceIncluded = ({ data }: { data: ServiceDetailData }) => (
  <div className="bg-[var(--color-included-bg)] px-5 py-10 sm:px-8 md:py-12 xl:pb-[2.5rem] xl:pl-[4.125rem] xl:pr-[4.4rem] xl:pt-[2.06rem]">
    <div className="xl:pl-[1.25rem]">
      <span className="block h-[0.14rem] w-[1.4rem] bg-primary" aria-hidden="true" />
      <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-tight tracking-[-0.015em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[1.9rem] xl:mt-[0.55rem] xl:text-[2.1rem]">
        <Heading text={data.includedTitle} highlight={data.includedTitleHighlight} breakFrom="md" />
      </h2>
    </div>
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:mt-[1.65rem] xl:gap-x-[0.94rem] xl:gap-y-[1.45rem]">
      {data.included.map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-5 rounded-[0.47rem] border border-[var(--color-sidebar-border)] bg-white px-6 py-6 shadow-[0_0.5rem_1.4rem_-1.1rem_var(--color-shadow-blue-20)] xl:min-h-[10.45rem] xl:gap-[2.06rem] xl:pl-[1.73rem] xl:pr-[1.2rem] xl:pt-[1.45rem]"
        >
          <span className="flex size-[4.25rem] shrink-0 items-center justify-center rounded-full bg-[var(--color-blue-tint)] xl:size-[5.06rem]">
            <Icon name={item.icon} className="size-[2.1rem] text-primary xl:size-[2.6rem]" strokeWidth={1.8} />
          </span>
          <div className="xl:pt-[0.75rem]">
            <h3 className="font-heading text-[1.05rem] font-bold leading-snug tracking-[-0.01em] text-navy xl:text-[1rem]">
              {item.title}
            </h3>
            <p className="mt-2 font-body text-[0.95rem] leading-[1.5] text-body xl:mt-[0.5rem] xl:text-[0.94rem]">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/** Service detail page body: intro, overview and "What's Included" in one light box. */
export function ServiceDetail({ data }: ServiceDetailProps) {
  if (!data) return null;
  return (
    <section className="py-[32px] bg-white">
      <div data-reveal="up" className="mx-auto w-full max-w-[78.75rem] overflow-hidden px-0 sm:px-5 xl:px-0">
        <ServiceIntro data={data} />
        <ServiceOverview data={data} />
        <ServiceIncluded data={data} />
      </div>
    </section>
  );
}
