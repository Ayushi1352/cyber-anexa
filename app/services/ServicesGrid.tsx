import ArrowButton from "@/components/ui/ArrowButton";
import RichText from "@/components/ui/RichText";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "./ServiceCard";
import { services, site } from "@/lib/site";

export default function ServicesGrid() {
  const content = site.pages.services;
  return (
    <section className="bg-[linear-gradient(180deg,#fafcff_0%,#f6f9ff_100%)] pb-16 pt-14 md:pb-20 md:pt-16 xl:pb-[4.2rem] xl:pt-[3.9rem]">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-8 xl:px-[3.9rem]">
        <div className="text-center">
          <SectionLabel text={content.label} variant="lines" />
          <h2 className="mt-4 font-heading text-[2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy sm:text-[2.5rem] xl:mt-[1.05rem] xl:text-[3rem] xl:leading-[1.125]">
            <RichText text={content.heading} breakFrom="lg" />
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:mt-[2.6rem] xl:gap-x-[1.03rem] xl:gap-y-[1.45rem]">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10 text-center xl:mt-[1.9rem]">
          <ArrowButton
            href={content.button.href}
            label={content.button.label}
            className="h-[3.4rem] px-[2.2rem] text-[1.0625rem] xl:h-[3.95rem] xl:w-[16.7rem] xl:text-[1.13rem]"
            iconClassName="size-[1.3rem]"
          />
        </div>
      </div>
    </section>
  );
}
