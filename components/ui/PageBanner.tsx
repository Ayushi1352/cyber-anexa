import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

type Props = {
  title: string;
  /** Extra breadcrumb items after "Home". Defaults to just the title. */
  crumbs?: { label: string; href?: string }[];
};

/** Blue photo banner with page title + breadcrumb, used on every inner page. */
export default function PageBanner({ title, crumbs }: Props) {
  const items = crumbs ?? [{ label: title }];
  return (
    <section className="relative flex h-[15rem] items-center justify-center overflow-hidden sm:h-[19rem] lg:h-[22rem] xl:h-[26.6rem]">
      <Image
        src={site.banner.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#0b4bd1]/10" aria-hidden="true" />
      <div className="relative px-5 pb-[0.6rem] text-center">
        <h1 className="font-banner text-[2.35rem] font-extrabold leading-[1.1] text-white sm:text-[2.75rem] xl:text-[3.1rem]">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="mt-[0.85rem] xl:mt-[1.05rem]">
          <ol className="flex flex-wrap items-center justify-center gap-x-[0.45rem] font-banner text-[0.9375rem] font-semibold text-white/85 xl:text-[1.03rem]">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                {site.banner.homeLabel}
              </Link>
            </li>
            {items.map((item) => (
              <li key={item.label} className="flex items-center gap-x-[0.45rem]">
                <ChevronRight className="size-[0.85rem]" strokeWidth={2.4} aria-hidden="true" />
                {item.href ? (
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
