import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import { introHidden } from "@/components/ui/motion";
import type { BreadcrumbData, GlobalUIData } from "@/types/templates.types";

/**
 * Blue photo banner at the top of every inner page: page title + "Home > Page" breadcrumb.
 * `paths` in templates.json is the trail; the last one is the current page (empty url).
 */
export const Breadcrumb = ({ data, ui }: { data?: BreadcrumbData; ui?: GlobalUIData }) => {
  if (!data) return null;
  const { title, paths } = data;
  const image = ui?.breadcrumbImage;

  return (
    <section className="relative mb-[32px] flex h-[15rem] items-center justify-center overflow-hidden sm:h-[19rem] lg:h-[22rem] xl:h-[26.6rem]">
      {image && <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center" />}
      <div className="absolute inset-0 bg-[var(--color-banner-tint)]" aria-hidden="true" />
      <div className="relative px-5 pb-[0.6rem] text-center">
        <h1
          data-intro="up"
          suppressHydrationWarning
          className={`font-banner text-[1.8rem] font-extrabold leading-[1.15] text-white min-[360px]:text-[2.1rem] sm:text-[2.75rem] xl:text-[3.1rem] ${introHidden}`}
        >
          {title}
        </h1>
        <nav
          aria-label={ui?.breadcrumbLabel}
          data-intro="up"
          data-intro-delay="150"
          suppressHydrationWarning
          className={`mt-[0.85rem] xl:mt-[1.05rem] ${introHidden}`}
        >
          <ol className="flex flex-wrap items-center justify-center gap-x-[0.45rem] font-banner text-[0.9375rem] font-semibold text-white/85 xl:text-[1.03rem]">
            {paths.map((crumb, index) => {
              const isLast = index === paths.length - 1;
              return (
                <Fragment key={crumb.id}>
                  {index > 0 && (
                    <li aria-hidden="true">
                      <LuChevronRight className="size-[0.85rem]" strokeWidth={2.4} />
                    </li>
                  )}
                  {crumb.url && !isLast ? (
                    <li>
                      <Link href={crumb.url} className="transition-all duration-200 hover:text-white hover:underline hover:underline-offset-4">
                        {crumb.label}
                      </Link>
                    </li>
                  ) : (
                    <li aria-current="page">{crumb.label}</li>
                  )}
                </Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
};
