import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Lines, plainText } from "@/components/ui/Text";
import type { ServicesGridItem } from "@/types/templates.types";

/** Card used in the 3-column grid on the Services page. */
export function ServiceCard({ service, readMore }: { service: ServicesGridItem; readMore?: string }) {
  const href = service.url;
  return (
    <article className="group flex flex-col gap-5 rounded-[0.6rem] border border-[var(--color-card-border-soft)] bg-white/80 p-5 shadow-[0_0.6rem_1.6rem_-1.1rem_var(--color-shadow-blue-20)] transition-shadow hover:shadow-[0_1rem_2.2rem_-1rem_var(--color-shadow-blue-30)] min-[480px]:max-md:flex-row xl:flex-row xl:gap-[1.3rem] xl:pb-[1.5rem] xl:pl-[1.17rem] xl:pr-[0.95rem] xl:pt-[1.64rem]">
      <Link
        href={href}
        className="relative block aspect-[16/11] w-full shrink-0 self-start overflow-hidden rounded-[0.47rem] min-[480px]:max-md:aspect-[224/281] min-[480px]:max-md:w-[9.5rem] xl:aspect-[224/281] xl:w-[10.6rem]"
        aria-label={plainText(service.title)}
      >
        <Image
          src={service.image}
          alt={plainText(service.title)}
          fill
          sizes="(min-width: 480px) 12vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="font-heading text-[1.3rem] font-bold leading-[1.32] tracking-[-0.03em] text-navy xl:mt-[-0.1rem] xl:text-[1.3rem]">
          <Link href={href} className="transition-colors hover:text-primary">
            <Lines text={service.title} breakFrom="xl" />
          </Link>
        </h3>
        <p className="mt-2 font-body text-[1rem] leading-[1.45] text-body xl:mt-[0.6rem] xl:text-[1.05rem] xl:leading-[1.5] xl:tracking-[-0.01em]">
          {service.excerpt}
        </p>
        <div className="mt-auto pt-5 xl:pt-[1.4rem]">
          <span className="block h-[0.14rem] w-[2.45rem] bg-primary" aria-hidden="true" />
          <Link
            href={href}
            className="group/btn mt-[0.9rem] inline-flex items-center gap-[0.6rem] font-body text-[1.0625rem] font-medium text-primary transition-all duration-300 hover:text-primary-dark xl:text-[1.09rem]"
          >
            <span>{readMore}</span>
            <Icon name="LuArrowRight" className="size-[1.1rem] transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
