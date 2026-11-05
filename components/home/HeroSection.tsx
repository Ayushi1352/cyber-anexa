import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RichText from "@/components/ui/RichText";
import { site } from "@/lib/site";

/** Organic blob outline traced from the design (applied with CSS, not baked into the image). */
const HERO_BLOB =
  "polygon(100% 0%, 47.2% 0%, 45.9% 1.4%, 44.7% 2.9%, 43.6% 4.3%, 42.7% 5.7%, 41.9% 7.1%, 41.2% 8.6%, 40.6% 10%, 40% 11.4%, 39.7% 12.8%, 39.3% 14.3%, 39% 15.7%, 38.9% 17.1%, 38.8% 18.6%, 38.6% 20%, 38.4% 21.4%, 38% 22.8%, 37.6% 24.3%, 37.1% 25.7%, 36.4% 27.1%, 34.5% 29.5%, 32.4% 31.8%, 30% 34.3%, 28.9% 35.7%, 27.8% 37.1%, 26.2% 39.8%, 24.8% 42.8%, 24.2% 44.2%, 23.7% 45.7%, 22.7% 49.2%, 21.9% 52.8%, 21.6% 54.2%, 21.4% 55.7%, 20.4% 59.9%, 19.2% 64.2%, 18.7% 65.6%, 18.1% 67.1%, 17.5% 68.5%, 16.8% 69.9%, 16.1% 71.4%, 15.3% 72.8%, 14.3% 74.2%, 13.3% 75.6%, 12.1% 77.1%, 10.9% 78.5%, 9.6% 79.9%, 8.1% 81.3%, 6.6% 82.8%, 5.3% 84.2%, 4.2% 85.6%, 3.2% 87.1%, 2.4% 88.5%, 1.7% 89.9%, 1.2% 91.3%, 0.7% 92.8%, 0.4% 94.2%, 0.2% 95.6%, 0% 97%, 0% 100%, 100% 100%)";

export default function HeroSection() {
  const { hero } = site.home;
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-site relative z-10 flex flex-col pb-12 pt-12 md:pt-16 xl:min-h-[42.75rem] xl:justify-center xl:pb-0 xl:pt-[2.08rem]">
        <div className="xl:pl-[2rem]">
          <h1 className="max-w-[40rem] font-heading text-[2.4rem] font-extrabold leading-[1.1] tracking-[-0.01em] text-navy sm:text-[3rem] lg:text-[3.4rem] xl:text-[3.69rem] xl:leading-[1.09]">
            <RichText text={hero.title} breakFrom="sm" />
          </h1>
          <p className="mt-5 max-w-[34rem] font-body text-[1.0625rem] leading-[1.5] text-body sm:text-[1.125rem] xl:mt-[1.2rem] xl:max-w-[33.9rem] xl:text-[1.16rem]">
            {hero.description}
          </p>
          <Link
            href={hero.button.href}
            className="group mt-8 inline-flex h-[3.15rem] items-center gap-[0.85rem] rounded-[0.375rem] bg-primary px-[1.9rem] font-heading text-[1.0625rem] font-semibold text-white transition-colors hover:bg-primary-dark xl:mt-[2.15rem] xl:h-[3.8rem] xl:px-[2.3rem] xl:text-[1.06rem]"
          >
            {hero.button.label}
            <ArrowRight className="size-[1.25rem] transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
          </Link>
        </div>
      </div>

      {/* Image: stacked below text on small screens, blob-shaped on desktop */}
      <div className="pb-6 pl-[8%] sm:pl-[20%] xl:hidden">
        <div className="relative aspect-[1220/911] w-full" style={{ clipPath: HERO_BLOB }}>
          <Image src={hero.image} alt={hero.imageAlt} fill sizes="(min-width: 1280px) 1px, 92vw" priority className="object-cover" />
        </div>
      </div>
      <div
        className="absolute right-0 top-0 hidden h-full w-[63.55%] xl:block"
        style={{ clipPath: HERO_BLOB }}
      >
        <Image src={hero.image} alt={hero.imageAlt} fill sizes="64vw" priority className="object-cover" />
      </div>
    </section>
  );
}
