import Image from "next/image";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Heading } from "@/components/ui/Text";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { container } from "@/components/ui/classes";
import type { AboutData } from "@/types/templates.types";

/** "About Our Company" block — used on Home and About Us. */
export function AboutSection({ data: about }: { data?: AboutData }) {
  if (!about) return null;
  return (
    <section className="section-spacing !pt-12 sm:!pt-16 xl:!pt-20 relative overflow-hidden bg-[var(--color-about-bg)]">
      {/* soft diagonal light bands from the design */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_38%,var(--color-glass-60)_38%,var(--color-glass-60)_56%,transparent_56%)]"
        aria-hidden="true"
      />
      <div className={`${container} relative grid grid-cols-1 items-start gap-12 xl:grid-cols-[529fr_765fr] xl:gap-[3.05rem] xl:!pl-[3.75rem] xl:!pr-[2.35rem]`}>
        {/* Main image with blue accent block */}
        <div data-reveal="left" className="order-2 relative ml-4 mt-4 sm:ml-6 xl:order-1 xl:ml-[0.3rem] xl:mt-[0.5rem]">
          <span
            className="absolute -left-4 -top-4 h-[45%] w-[38%] rounded-[0.95rem] bg-[linear-gradient(160deg,var(--color-badge-start)_0%,var(--color-badge-end)_100%)] sm:-left-6 sm:-top-6 lg:-left-[1.95rem] lg:-top-[1.5rem] lg:h-[11.5rem] lg:w-[10.2rem]"
            aria-hidden="true"
          />
          <div className="relative aspect-[705/745] overflow-hidden rounded-[1.4rem]">
            <Image
              src={about.mainImage}
              alt={about.mainImageAlt}
              fill
              sizes="(min-width: 1024px) 37vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div data-reveal="up" className="order-1 xl:order-2 xl:pt-[0.25rem]">
          <SectionLabel text={about.label} variant="line-left" />
          <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2rem] xl:mt-[0.75rem] xl:text-[3rem] xl:leading-[1.125]">
            <Heading text={about.title} highlight={about.titleHighlight} breakFrom="md" />
          </h2>
          <p className="mt-4 max-w-[40.5rem] font-body text-[1.0625rem] leading-[1.45] text-body xl:mt-[0.75rem] xl:text-[1.16rem] xl:leading-[1.34]">
            {about.description}
          </p>

          <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8 xl:mt-[1.05rem]">
            <div className="md:w-[54.6%] md:pt-[0.6rem]">
              <ul>
                {about.points.map((point, i) => (
                  <li
                    key={point}
                    className={`flex items-center gap-[1.7rem] py-[1.15rem] xl:py-[1.5rem] ${
                      i < about.points.length - 1 ? "border-b border-[var(--color-about-divider)]" : ""
                    } ${i === 0 ? "pt-0 xl:pt-[0.2rem]" : ""}`}
                  >
                    <span className="w-[3rem] shrink-0 font-heading text-[2.25rem] font-bold leading-none text-[var(--color-about-number)] xl:w-[3.55rem] xl:text-[2.7rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-[1.15rem] font-bold leading-snug tracking-[-0.01em] text-navy xl:text-[1.31rem]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <ArrowButton
                href={about.buttonUrl}
                label={about.buttonText}
                className="mt-6 h-[3.3rem] px-[2rem] text-[1rem] xl:mt-[1.2rem] xl:h-[3.47rem] xl:w-[14.05rem] xl:text-[0.97rem]"
                iconClassName="size-[1.35rem]"
              />
            </div>
            <div className="relative aspect-[408/462] w-full overflow-hidden rounded-[0.8rem] md:w-[40%] md:max-w-[19.1rem]">
              <Image
                src={about.secondImage}
                alt={about.secondImageAlt}
                fill
                sizes="(min-width: 768px) 20vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
