import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Heading, Lines } from "@/components/ui/Text";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { container } from "@/components/ui/classes";
import type { ServicesData } from "@/types/templates.types";

export function ServicesSection({ data: services }: { data?: ServicesData }) {
  if (!services) return null;
  return (
    <section className="section-spacing relative overflow-hidden bg-[linear-gradient(180deg,var(--color-services-top)_0%,var(--color-services-bottom)_100%)]">
      <div className={`${container} relative`}>
        <div data-reveal="up" className="text-center">
          <SectionLabel text={services.label} variant="lines" />
          <h2 className="mx-auto mt-4 font-heading text-[1.45rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-navy min-[360px]:text-[1.65rem] min-[400px]:text-[1.85rem] sm:text-[2.4rem] xl:mt-[0.9rem] xl:text-[2.81rem] xl:leading-[1.13]">
            <Heading text={services.title} highlight={services.titleHighlight} breakFrom="always" />
          </h2>
        </div>

        <div data-reveal-stagger className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:mt-[2.15rem] xl:gap-x-[1.2rem] xl:gap-y-[1.1rem]">
          {services.items.map((item, i) => (
            <Link
              key={item.id}
              href={item.url}
              className="group flex flex-col gap-6 rounded-[0.75rem] border border-[var(--color-service-border)] bg-white/75 p-5 shadow-[0_0.6rem_1.6rem_-1rem_var(--color-shadow-blue-18)] transition-shadow hover:shadow-[0_1rem_2.2rem_-1rem_var(--color-shadow-blue-30)] sm:flex-row sm:p-[1.6rem] xl:gap-[2.5rem] xl:pb-[1.7rem] xl:pl-[1.75rem] xl:pr-[1.6rem] xl:pt-[1.65rem]"
            >
              <div className="relative aspect-[300/320] w-full shrink-0 overflow-hidden rounded-[0.56rem] sm:w-[12rem] xl:w-[14.06rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 15vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="xl:pt-[0.55rem]">
                <span className="block font-heading text-[1.75rem] font-bold leading-none text-[var(--color-service-number)] xl:text-[1.94rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 whitespace-nowrap font-heading text-[clamp(1rem,5vw,1.3rem)] font-bold leading-tight tracking-[-0.01em] text-navy transition-colors group-hover:text-primary xl:mt-[1.3rem] xl:text-[1.44rem]">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[1rem] leading-[1.45] text-body xl:mt-[0.95rem] xl:max-w-[20.15rem] xl:text-[1.09rem] xl:leading-[1.43]">
                  <Lines text={item.description} breakFrom="xl" />
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center xl:mt-[1.85rem]">
          <ArrowButton
            href={services.buttonUrl}
            label={services.buttonText}
            className="h-[3.4rem] px-[2.2rem] text-[1.0625rem] xl:h-[3.9rem] xl:w-[15.95rem] xl:text-[1.09rem]"
            iconClassName="size-[1.3rem]"
          />
        </div>
      </div>
    </section>
  );
}
