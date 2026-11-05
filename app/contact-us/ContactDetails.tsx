import Image from "next/image";
import Icon from "@/components/ui/Icon";
import SocialIcon from "@/components/ui/SocialIcon";
import { site } from "@/lib/site";

export default function ContactDetails() {
  const details = site.pages.contactUs.details;
  return (
    <div className="relative overflow-hidden rounded-[0.94rem] bg-[#0b1d40] px-6 pb-9 pt-10 sm:px-[2.65rem] xl:pb-[2.7rem] xl:pt-[3.8rem]">
      {/* photo on the right, blended into the navy card with CSS */}
      <div className="absolute inset-y-0 right-0 w-[60%] sm:w-[46.5%]" aria-hidden="true">
        <Image src={details.image} alt="" fill sizes="(min-width: 1024px) 18vw, 50vw" className="object-cover object-left" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b1d40_0%,rgba(11,29,64,0.55)_22%,rgba(11,29,64,0)_50%)]" />
      </div>

      <div className="relative max-w-[17rem] sm:max-w-[17.5rem]">
        <div className="flex items-center gap-[0.9rem]">
          <span className="block h-[0.094rem] w-[1.7rem] bg-white" aria-hidden="true" />
          <span className="font-body text-[0.82rem] font-semibold uppercase leading-none tracking-[0.01em] text-white">{details.label}</span>
        </div>
        <p className="mt-5 font-body text-[0.98rem] leading-[1.53] text-white/90 xl:mt-[1.4rem]">{details.text}</p>

        <ul className="mt-8 space-y-7 xl:mt-[2.15rem] xl:space-y-[1.75rem]">
          {details.items.map((item) => (
            <li key={item.title} className="flex items-start gap-[1.2rem]">
              <span className="flex size-[3.3rem] shrink-0 items-center justify-center rounded-full bg-primary">
                <Icon name={item.icon} className="size-[1.3rem] text-white" fill={item.icon === "phone" ? "currentColor" : "none"} strokeWidth={item.icon === "phone" ? 0 : 2.2} />
              </span>
              <div>
                <p className="font-body text-[0.98rem] font-semibold leading-snug text-white">{item.title}</p>
                <div className="mt-[0.3rem] font-body text-[0.98rem] leading-[1.53] text-white/85">
                  {item.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-white/15 pt-6 xl:mt-[2.3rem] xl:w-[16rem] xl:pt-[1.95rem]">
          <p className="font-body text-[1rem] font-semibold text-white">{details.followTitle}</p>
          <div className="mt-4 flex gap-[0.65rem] xl:mt-[1.05rem]">
            {details.socials.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="flex size-[2.9rem] items-center justify-center rounded-full bg-[#16305a] text-white transition-colors hover:bg-primary"
              >
                <SocialIcon platform={s.platform} className="size-[1.05rem]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
