import Image from "next/image";
import ArrowButton from "@/components/ui/ArrowButton";
import RichText from "@/components/ui/RichText";
import SectionLabel from "@/components/ui/SectionLabel";
import { site, team } from "@/lib/site";

/** "Meet Our Team" — used on Home and About Us. */
export default function TeamSection() {
  const content = site.home.team;
  return (
    <section className="bg-[#f8fbff] px-0 xl:px-[3.3rem]">
      <div className="mx-auto max-w-[83.4rem] bg-[linear-gradient(180deg,#fbfdff_0%,#f6f9fe_100%)] pb-16 pt-14 md:pb-20 md:pt-20 xl:pb-[5.3rem] xl:pt-[4.15rem]">
        <div className="container-site !max-w-none xl:!px-[3.1rem]">
          <div className="text-center">
            <SectionLabel text={content.label} variant="dots-lines" />
            <h2 className="mt-4 font-heading text-[2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy sm:text-[2.5rem] xl:mt-[1rem] xl:text-[3.15rem] xl:leading-[1.13]">
              <RichText text={content.title} breakFrom="sm" />
            </h2>
            <p className="mx-auto mt-4 max-w-[50rem] font-body text-[1.0625rem] leading-[1.45] text-body xl:mt-[0.8rem] xl:text-[1.07rem] xl:leading-[1.41]">
              <RichText text={content.description} breakFrom="lg" highlightClassName="" />
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[77rem] grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:mt-[2.85rem] xl:gap-[1.25rem]">
            {team.map((member) => (
              <div
                key={member.name}
                className="relative mx-auto aspect-[391/518] w-full max-w-[22rem] overflow-hidden rounded-[0.56rem] bg-white shadow-[0_0.6rem_1.5rem_-1rem_rgba(23,72,160,0.25)]"
              >
                <Image src={member.image} alt={member.name} fill sizes="(min-width: 1024px) 22vw, (min-width: 480px) 50vw, 100vw" className="object-cover" />
                {/* white quarter-circle panel (drawn in CSS) */}
                <span
                  className="absolute left-[-15.3%] top-[63.7%] aspect-square w-[84.4%] rounded-full bg-white"
                  aria-hidden="true"
                />
                <div className="absolute bottom-[7.2%] left-[7.6%] right-[6%]">
                  <span className="block h-[0.24rem] w-[2rem] rounded-full bg-primary" aria-hidden="true" />
                  <h3 className="mt-[0.85rem] font-heading text-[1.15rem] font-bold leading-tight tracking-[-0.01em] text-navy xl:text-[1.25rem]">
                    {member.name}
                  </h3>
                  <p className="mt-[0.35rem] font-body text-[0.8rem] text-[#66758e] xl:text-[0.84rem]">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center xl:mt-[2.7rem]">
            <ArrowButton
              href={content.button.href}
              label={content.button.label}
              className="h-[3.4rem] px-[2.3rem] text-[1.0625rem] xl:h-[3.75rem] xl:w-[17.35rem] xl:text-[1.13rem]"
              iconClassName="size-[1.4rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
