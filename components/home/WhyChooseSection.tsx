import Image from "next/image";
import Icon from "@/components/ui/Icon";
import RichText from "@/components/ui/RichText";
import SectionLabel from "@/components/ui/SectionLabel";
import { site } from "@/lib/site";

type Item = (typeof site.home.whyChoose.items)[number];

function FeatureCard({ item, index }: { item: Item; index: number }) {
  const order = ["order-1", "order-2", "order-3", "order-4"][index];
  return (
    <div className={`${order} lg:order-none rounded-[0.75rem] border border-[#e8eef8] bg-white/90 px-6 pb-8 pt-6 shadow-[0_0.8rem_2rem_-1.2rem_rgba(23,72,160,0.2)] xl:px-[1.73rem] xl:pb-[2.15rem] xl:pt-[1.85rem]`}>
      <div className="flex items-start justify-between">
        <span className="flex size-[4rem] items-center justify-center rounded-[0.5rem] bg-[#e3ecfd] xl:h-[4.5rem] xl:w-[4.7rem]">
          <Icon name={item.icon} className="size-[1.9rem] text-primary xl:size-[2.4rem]" strokeWidth={2} />
        </span>
        <span className="pt-[0.2rem] font-heading text-[2.4rem] font-bold leading-none text-[#7ca8fa] xl:text-[2.6rem]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 font-heading text-[1.4rem] font-bold leading-tight tracking-[-0.035em] text-navy xl:mt-[1.15rem] xl:text-[1.6rem]">
        {item.title}
      </h3>
      <p className="mt-3 font-body text-[1.0625rem] leading-[1.45] text-body xl:mt-[0.85rem] xl:text-[1.27rem] xl:leading-[1.43]">
        <RichText text={item.description} breakFrom="xl" highlightClassName="" />
      </p>
    </div>
  );
}

/** "Why Choose Us" — used on Home and About Us. */
export default function WhyChooseSection() {
  const { whyChoose } = site.home;
  const [a, b, c, d] = whyChoose.items;

  const oval = (
    <div className="relative mx-auto aspect-[518/768] w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-none">
      <div className="absolute inset-0 rounded-[50%] border-2 border-[#5b9bf5]" aria-hidden="true" />
      <div className="absolute inset-[0.55rem] overflow-hidden rounded-[50%]">
        <Image src={whyChoose.image} alt={whyChoose.imageAlt} fill sizes="(min-width: 1024px) 28vw, 80vw" className="object-cover" />
      </div>
      <span className="absolute left-[12.5%] top-[13.3%] size-[0.95rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f7ff5]" aria-hidden="true" />
      <span className="absolute left-[0.4%] top-[60.4%] size-[0.95rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f7ff5]" aria-hidden="true" />
      <span className="absolute left-[99.6%] top-[56%] size-[0.95rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f7ff5]" aria-hidden="true" />
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-14 md:pb-20 xl:pb-[5.15rem] xl:pt-[2.2rem]">
      <div
        className="pointer-events-none absolute -left-[10rem] top-[30%] h-[40rem] w-[30rem] rounded-full bg-[#eef4fd] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-[8rem] top-[5%] h-[30rem] w-[24rem] rounded-full bg-[#eef4fd] blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <div className="text-center">
          <SectionLabel text={whyChoose.label} variant="dot-lines" />
          <h2 className="mt-4 font-heading text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-navy sm:text-[2.5rem] xl:mt-[1.2rem] xl:text-[3.2rem] xl:leading-[1.03]">
            <RichText text={whyChoose.title} breakFrom="md" />
          </h2>
        </div>

        <div className="mt-10 lg:hidden">{oval}</div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[421fr_389fr_421fr] lg:items-start lg:gap-x-[2.4rem] xl:mt-[2.3rem]">
          <div className="contents lg:flex lg:flex-col lg:gap-[1.75rem]">
            <FeatureCard item={a} index={0} />
            <FeatureCard item={c} index={2} />
          </div>
          <div className="hidden lg:block lg:mt-[0.5rem]">{oval}</div>
          <div className="contents lg:flex lg:flex-col lg:gap-[1.75rem]">
            <FeatureCard item={b} index={1} />
            <FeatureCard item={d} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
