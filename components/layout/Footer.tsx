import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import RichText from "@/components/ui/RichText";
import { site } from "@/lib/site";

const { footer, contact } = site;

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[1.6rem] xl:mb-[2.1rem]">
      <h3 className="font-footer text-[1.4rem] font-bold leading-tight text-navy xl:text-[1.66rem]">{children}</h3>
      <span className="mt-[0.9rem] block h-[0.14rem] w-[2.45rem] bg-primary" />
    </div>
  );
}

function LinkList({ links, spacing }: { links: { label: string; href: string }[]; spacing: string }) {
  return (
    <ul className={`flex flex-col ${spacing}`}>
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="group inline-flex items-center gap-[1.1rem] font-footer text-[1.0625rem] font-normal leading-snug text-footer transition-colors hover:text-primary xl:text-[1.15rem]"
          >
            <ChevronRight className="size-[1rem] shrink-0 text-primary transition-transform group-hover:translate-x-0.5" strokeWidth={2.4} />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const contactRows = [
    { icon: MapPin, content: contact.address, href: undefined },
    { icon: Phone, content: [contact.phone], href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, content: [contact.email], href: `mailto:${contact.email}` },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f5f9fe_0%,#eef5fd_100%)]" aria-hidden="true" />
      <div
        className="absolute -left-[12rem] -top-[14rem] h-[24rem] w-[60rem] -rotate-[8deg] rounded-[50%] bg-white/80 blur-[2px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-[60%] w-[30%] bg-[linear-gradient(120deg,transparent_45%,rgba(214,230,252,0.55)_45%,rgba(214,230,252,0.55)_55%,transparent_55%,transparent_70%,rgba(214,230,252,0.4)_70%)]"
        aria-hidden="true"
      />
      <Image
        src={footer.mapImage}
        alt=""
        width={900}
        height={800}
        className="pointer-events-none absolute right-0 top-0 hidden w-[21rem] opacity-80 mix-blend-multiply [mask-image:linear-gradient(to_right,transparent,#000_35%)] md:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[90rem] px-5 pb-10 pt-14 md:px-8 md:pt-16 xl:pb-[1.4rem] xl:pl-[3.75rem] xl:pr-[2.35rem] xl:pt-[5.3rem]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[557fr_334fr_409fr_490fr] lg:gap-0">
          {/* Brand + contact */}
          <div className="lg:pr-8">
            <Link href="/" aria-label={`${site.site.name} home`}>
              <Image
                src={site.site.logo}
                alt={site.site.name}
                width={site.site.logoWidth}
                height={site.site.logoHeight}
                loading="eager"
                className="h-auto w-[15rem] xl:w-[22.35rem]"
              />
            </Link>
            <p className="mt-[0.85rem] max-w-[26rem] font-footer text-[1.0625rem] leading-[1.4] text-footer xl:text-[1.2rem] xl:leading-[1.33]">
              <RichText text={footer.description} breakFrom="lg" highlightClassName="" />
            </p>
            <ul className="mt-[1.05rem] flex flex-col gap-[0.4rem] xl:gap-[0.12rem]">
              {contactRows.map(({ icon: IconCmp, content, href }, i) => {
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
                  <li key={i} className="flex items-start gap-[1.4rem]">
                    <span className="flex size-[3.2rem] shrink-0 items-center justify-center rounded-full bg-[#e1ecfa]">
                      <IconCmp className="size-[1.25rem] text-primary" fill={i === 1 ? "currentColor" : "none"} strokeWidth={i === 1 ? 0 : 2.4} />
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
          <div className="lg:border-l lg:border-[#dfe8f4] lg:pl-[2.85rem]">
            <ColumnTitle>{footer.quickLinks.title}</ColumnTitle>
            <LinkList links={footer.quickLinks.links} spacing="gap-[1rem] xl:gap-[0.62rem]" />
          </div>

          {/* Services */}
          <div className="lg:border-l lg:border-[#dfe8f4] lg:pl-[2.85rem]">
            <ColumnTitle>{footer.services.title}</ColumnTitle>
            <LinkList links={footer.services.links} spacing="gap-[0.55rem] xl:gap-[0.12rem]" />
          </div>

          {/* Get in touch */}
          <div className="lg:border-l lg:border-[#dfe8f4] lg:pl-[2.9rem]">
            <ColumnTitle>{footer.getInTouch.title}</ColumnTitle>
            <p className="max-w-[23rem] font-footer text-[1.0625rem] leading-[1.4] text-footer xl:text-[1.1rem] xl:leading-[1.38]">
              <RichText text={footer.getInTouch.text} breakFrom="lg" highlightClassName="" />
            </p>
            <Link
              href={footer.getInTouch.button.href}
              className="group mt-[1.6rem] inline-flex h-[3.05rem] items-center gap-[1rem] rounded-[0.5rem] bg-primary px-[1.8rem] font-footer text-[1.125rem] font-medium text-white transition-colors hover:bg-primary-dark"
            >
              {footer.getInTouch.button.label}
              <ArrowRight className="size-[1.2rem] transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-copyright">
        <p className="mx-auto max-w-[90rem] px-5 py-[1.7rem] text-center font-footer text-[1rem] text-white/90 xl:py-[1.95rem] xl:text-[1.125rem]">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
