import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { Heading } from "@/components/ui/Text";
import { container } from "@/components/ui/classes";
import { introHidden } from "@/components/ui/motion";
import type { HeroData } from "@/types/templates.types";

/** Organic blob outline traced from the design (a CSS clip-path, not baked into the image). */
const blob =
  "[clip-path:polygon(100%_0%,47.2%_0%,45.9%_1.4%,44.7%_2.9%,43.6%_4.3%,42.7%_5.7%,41.9%_7.1%,41.2%_8.6%,40.6%_10%,40%_11.4%,39.7%_12.8%,39.3%_14.3%,39%_15.7%,38.9%_17.1%,38.8%_18.6%,38.6%_20%,38.4%_21.4%,38%_22.8%,37.6%_24.3%,37.1%_25.7%,36.4%_27.1%,34.5%_29.5%,32.4%_31.8%,30%_34.3%,28.9%_35.7%,27.8%_37.1%,26.2%_39.8%,24.8%_42.8%,24.2%_44.2%,23.7%_45.7%,22.7%_49.2%,21.9%_52.8%,21.6%_54.2%,21.4%_55.7%,20.4%_59.9%,19.2%_64.2%,18.7%_65.6%,18.1%_67.1%,17.5%_68.5%,16.8%_69.9%,16.1%_71.4%,15.3%_72.8%,14.3%_74.2%,13.3%_75.6%,12.1%_77.1%,10.9%_78.5%,9.6%_79.9%,8.1%_81.3%,6.6%_82.8%,5.3%_84.2%,4.2%_85.6%,3.2%_87.1%,2.4%_88.5%,1.7%_89.9%,1.2%_91.3%,0.7%_92.8%,0.4%_94.2%,0.2%_95.6%,0%_97%,0%_100%,100%_100%)]";

export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;
  return (
    <section className="section-spacing relative overflow-hidden bg-white">
      <div className={`${container} relative z-10 flex flex-col py-8 md:min-h-[34rem] md:justify-center xl:min-h-[42.75rem]`}>
        <div className="md:w-[50%] md:pr-4 xl:w-[45%] xl:pl-[2rem]">
          <h1
            data-intro="up"
            suppressHydrationWarning
            className={`max-w-[40rem] font-heading text-[1.65rem] font-extrabold leading-[1.15] tracking-[-0.01em] text-navy min-[360px]:text-[1.85rem] min-[400px]:text-[2.1rem] sm:text-[3rem] sm:leading-[1.1] md:text-[2.4rem] lg:text-[3rem] xl:text-[3.69rem] xl:leading-[1.09] ${introHidden}`}
          >
            <Heading text={data.title} highlight={data.titleHighlight} breakFrom="always" />
          </h1>
          <p
            data-intro="up"
            data-intro-delay="150"
            suppressHydrationWarning
            className={`mt-5 max-w-[34rem] font-body text-[1.0625rem] leading-[1.5] text-body sm:text-[1.125rem] xl:mt-[1.2rem] xl:max-w-[33.9rem] xl:text-[1.16rem] ${introHidden}`}
          >
            {data.description}
          </p>
          <div data-intro="up" data-intro-delay="300" suppressHydrationWarning className={introHidden}>
            <Link
              href={data.buttonUrl}
              className="group mt-8 inline-flex h-[3.15rem] items-center gap-[0.85rem] rounded-[0.375rem] border-2 border-primary bg-primary px-[1.9rem] font-heading text-[1.0625rem] font-semibold text-white shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:text-primary hover:shadow-lg xl:mt-[2.15rem] xl:h-[3.8rem] xl:px-[2.3rem] xl:text-[1.06rem]"
            >
              {data.buttonText}
              <LuArrowRight className="size-[1.25rem] transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>

      {/* Stack the hero image on phones and place it beside the text from tablet widths up. */}
      <div className="mt-4 pl-[8%] sm:pl-[20%] md:hidden">
        <div className={`relative aspect-[1220/911] w-full ${blob}`}>
          <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1280px) 1px, 92vw" priority className="object-cover object-right" />
        </div>
      </div>
      <div className={`absolute right-0 top-0 hidden h-full w-[56%] md:block lg:w-[60%] xl:w-[63.55%] ${blob}`}>
        <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1280px) 64vw, 56vw" priority className="object-cover object-right" />
      </div>
    </section>
  );
};
