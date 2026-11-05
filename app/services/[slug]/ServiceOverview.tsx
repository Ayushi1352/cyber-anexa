import Image from "next/image";
import RichText from "@/components/ui/RichText";
import { site, type Service } from "@/lib/site";

export default function ServiceOverview({ service }: { service: Service }) {
  const { detail } = service;
  return (
    <div className="grid grid-cols-1 items-center gap-10 bg-[#fcfdff] px-5 py-10 sm:px-8 md:py-12 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[32.9rem_1fr] xl:gap-[4.8rem] xl:pb-[1.6rem] xl:pl-[4.1rem] xl:pr-[3.25rem] xl:pt-[2.6rem]">
      <div className="relative aspect-[703/429] w-full overflow-hidden rounded-[0.5rem]">
        <Image
          src={detail.overviewImage}
          alt={`${service.title} overview`}
          fill
          sizes="(min-width: 1024px) 35vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="xl:pb-[2.4rem]">
        <span className="block h-[0.14rem] w-[3.3rem] bg-primary xl:-ml-[0.85rem]" aria-hidden="true" />
        <h2 className="mt-4 font-heading text-[1.9rem] font-extrabold leading-tight tracking-[-0.015em] text-navy xl:mt-[0.9rem] xl:text-[2.2rem]">
          <RichText text={site.pages.serviceDetail.overviewTitle} />
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
