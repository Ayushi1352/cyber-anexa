import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuChevronRight, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { Lines } from "@/components/ui/Text";
import type { CompanyData, FooterData, LinkItem } from "@/types/templates.types";

const ColumnTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-[1.1rem] sm:mb-[1.6rem] xl:mb-[2.1rem]">
    <h3 className="font-footer text-[1.15rem] font-bold leading-tight text-navy sm:text-[1.4rem] xl:text-[1.66rem]">{children}</h3>
    <span className="mt-[0.6rem] block h-[0.14rem] w-[2.2rem] bg-primary sm:mt-[0.9rem] sm:w-[2.45rem]" />
  </div>
);

const LinkList = ({ links, spacing }: { links: LinkItem[]; spacing: string }) => (
  <ul className={`flex flex-col ${spacing}`}>
    {links.map((link) => (
      <li key={link.id}>
        <Link
          href={link.url}
          className="group inline-flex items-start gap-[0.55rem] font-footer text-[0.875rem] font-normal leading-snug text-footer transition-colors hover:text-primary sm:items-center sm:gap-[1.1rem] sm:text-[1.0625rem] xl:text-[1.15rem]"
        >
          <LuChevronRight className="mt-[0.18rem] size-[0.82rem] shrink-0 text-primary transition-transform group-hover:translate-x-0.5 sm:mt-0 sm:size-[1rem]" strokeWidth={2.4} />
          <span>{link.label}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export const Footer = ({ data, company }: { data?: FooterData; company: CompanyData }) => {
  if (!data) return null;
  const contactRows = [
    { icon: LuMapPin, content: company.address.split("\n"), href: undefined, filled: false },
    { icon: LuPhone, content: [company.phone], href: company.phoneHref, filled: true },
    { icon: LuMail, content: [company.email], href: company.emailHref, filled: false },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-page-bottom-mid)_0%,var(--color-footer-bottom)_100%)]" aria-hidden="true" />
      <div
        className="absolute -left-[12rem] -top-[14rem] h-[24rem] w-[60rem] -rotate-[8deg] rounded-[50%] bg-white/80 blur-[2px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-[60%] w-[30%] bg-[linear-gradient(120deg,transparent_45%,var(--color-shadow-soft-55)_45%,var(--color-shadow-soft-55)_55%,transparent_55%,transparent_70%,var(--color-shadow-soft-40)_70%)]"
        aria-hidden="true"
      />
      <Image
        src={data.mapImage}
        alt=""
        width={900}
        height={800}
        className="pointer-events-none absolute right-0 top-0 hidden w-[21rem] opacity-80 mix-blend-multiply [mask-image:linear-gradient(to_right,transparent,var(--color-black)_35%)] md:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[90rem] px-5 pb-10 pt-14 md:px-8 md:pt-16 xl:pb-[1.4rem] xl:pl-[3.75rem] xl:pr-[2.35rem] xl:pt-[5.3rem]">
        <div data-reveal-stagger className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[557fr_334fr_409fr_490fr] lg:gap-0">
          {/* Brand + contact */}
          <div className="col-span-2 sm:col-span-1 lg:pr-8">
            <Link href="/" aria-label={company.name}>
              <Image
                src={company.logo.src}
                alt={company.name}
                width={company.logo.width}
                height={company.logo.height}
                loading="eager"
                className="h-auto w-[11rem] sm:w-[12.5rem] xl:w-[15rem]"
              />
            </Link>
            <p className="mt-[0.85rem] max-w-[26rem] font-footer text-[1.0625rem] leading-[1.4] text-footer xl:text-[1.2rem] xl:leading-[1.33]">
              <Lines text={data.description} breakFrom="lg" />
            </p>
            <ul className="mt-5 flex flex-col gap-4 sm:gap-5 xl:mt-6 xl:gap-[1.25rem]">
              {contactRows.map(({ icon: IconCmp, content, href, filled }) => {
                const text = (
                  <span className="font-footer text-[1.0625rem] leading-[1.3] text-footer xl:text-[1.125rem]">
                    {content.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                );
                return (
                  <li key={content[0]} className="flex items-start gap-[1.4rem]">
                    <span className="flex size-[3.2rem] shrink-0 items-center justify-center rounded-full bg-[var(--color-footer-icon-bg)]">
                      <IconCmp className="size-[1.25rem] text-primary" fill={filled ? "currentColor" : "none"} strokeWidth={filled ? 0 : 2.4} />
                    </span>
                    <span className={content.length > 1 ? "pt-[0.05rem]" : "self-center"}>
                      {href ? (
                        <a href={href} className="transition-colors hover:text-primary">
                          {text}
                        </a>
                      ) : (
                        text
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick links */}
          <div className="col-span-1 lg:border-l lg:border-[var(--color-footer-divider)] lg:pl-[2.85rem]">
            <ColumnTitle>{data.quickLinks.title}</ColumnTitle>
            <LinkList links={data.quickLinks.links} spacing="gap-[0.75rem] sm:gap-[1rem] xl:gap-[0.62rem]" />
          </div>

          {/* Services */}
          <div className="col-span-1 lg:border-l lg:border-[var(--color-footer-divider)] lg:pl-[2.85rem]">
            <ColumnTitle>{data.services.title}</ColumnTitle>
            <LinkList links={data.services.links} spacing="gap-[0.75rem] sm:gap-[1rem] xl:gap-[0.62rem]" />
          </div>

          {/* Get in touch */}
          <div className="col-span-2 sm:col-span-1 lg:border-l lg:border-[var(--color-footer-divider)] lg:pl-[2.9rem]">
            <ColumnTitle>{data.getInTouch.title}</ColumnTitle>
            <p className="max-w-[23rem] font-footer text-[1.0625rem] leading-[1.4] text-footer xl:text-[1.1rem] xl:leading-[1.38]">
              <Lines text={data.getInTouch.text} breakFrom="lg" />
            </p>
            <Link
              href={data.getInTouch.buttonUrl}
              className="group mt-[1.6rem] inline-flex h-[3.05rem] items-center gap-[1rem] rounded-[0.5rem] border-2 border-primary bg-primary px-[1.8rem] font-footer text-[1.125rem] font-medium text-white shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:text-primary hover:shadow-lg"
            >
              {data.getInTouch.buttonText}
              <LuArrowRight className="size-[1.2rem] transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-copyright">
        <p className="mx-auto max-w-[90rem] px-5 py-[1.7rem] text-center font-footer text-[1rem] text-white/90 xl:py-[1.95rem] xl:text-[1.125rem]">
          {data.copyright}
        </p>
      </div>
    </footer>
  );
};
