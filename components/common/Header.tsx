"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import type { CompanyData, GlobalUIData, HeaderData } from "@/types/templates.types";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export const Header = ({ data, company, ui }: { data?: HeaderData; company: CompanyData; ui?: GlobalUIData }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // close the mobile menu whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!data) return null;
  const { navLinks, dropdownLinks, buttonText, buttonUrl } = data;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-header-border)] bg-white">
      <nav className="mx-auto flex h-[4.25rem] w-full max-w-[90rem] items-center px-5 md:px-8 xl:h-[4.125rem] xl:px-[4.125rem]">
        <Link href="/" className="shrink-0" aria-label={company.name}>
          <Image
            src={company.logo.src}
            alt={company.name}
            width={company.logo.width}
            height={company.logo.height}
            priority
            className="h-auto w-[10.5rem] sm:w-[12.5rem] xl:w-[16.6rem]"
          />
        </Link>

        {/* Desktop links */}
        <ul className="ml-auto hidden items-center gap-[3.25rem] xl:flex">
          {navLinks.map((item) => {
            const active = isActive(pathname, item.url);
            const linkClass = `relative font-heading text-[0.9375rem] font-medium leading-none transition-colors hover:text-primary ${
              active ? "text-primary" : "text-ink"
            }`;
            const underline = active && (
              <span className="absolute -bottom-[0.95rem] -left-[0.45rem] -right-[0.45rem] h-[0.14rem] rounded-full bg-primary" />
            );

            if (item.dropdown) {
              return (
                <li key={item.id} className="group relative">
                  <Link href={item.url} className={`${linkClass} inline-flex items-center gap-[0.55rem] py-[1.2rem]`}>
                    <span className="relative">
                      {item.label}
                      {underline}
                    </span>
                    <Icon name="LuChevronDown" className="size-[0.8rem] transition-transform group-hover:rotate-180" strokeWidth={2.4} />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-[17rem] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="rounded-[0.6rem] border border-line bg-white p-[0.5rem] shadow-[0_1.25rem_2.5rem_-0.75rem_var(--color-shadow-navy-18)]">
                      {dropdownLinks.map((link) => (
                        <li key={link.id}>
                          <Link
                            href={link.url}
                            className="block rounded-[0.4rem] px-[0.85rem] py-[0.6rem] font-heading text-[0.875rem] font-medium text-ink transition-colors hover:bg-soft hover:text-primary"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.id}>
                <Link href={item.url} className={linkClass}>
                  {item.label}
                  {underline}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href={buttonUrl}
          className="group ml-[5.65rem] hidden h-[2.72rem] items-center gap-[0.55rem] rounded-full border-2 border-primary bg-primary px-[1.55rem] font-heading text-[0.9375rem] font-semibold text-white shadow-[0_0.5rem_1.2rem_-0.35rem_var(--color-shadow-primary-60)] transition-all duration-300 hover:border-primary hover:bg-white hover:text-primary hover:shadow-md xl:inline-flex"
        >
          {buttonText}
          <Icon name="LuArrowRight" className="size-[0.85rem] transition-transform group-hover:translate-x-0.5" strokeWidth={2.4} />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex size-11 items-center justify-center rounded-lg text-navy transition-colors hover:bg-soft xl:hidden"
          aria-label={open ? ui?.closeMenuLabel : ui?.openMenuLabel}
          aria-expanded={open}
        >
          {open ? <Icon name="LuX" className="size-6" /> : <Icon name="LuMenu" className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute inset-x-0 top-full h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-[var(--color-header-border)] bg-white transition-all duration-300 xl:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-4 md:px-8">
          {navLinks.map((item) => {
            const active = isActive(pathname, item.url);
            return (
              <li key={item.id} className="border-b border-[var(--color-header-border)]">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.url}
                    className={`block flex-1 py-4 font-heading text-base font-semibold ${active ? "text-primary" : "text-ink"}`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="inline-flex size-10 items-center justify-center rounded-md text-ink hover:bg-soft"
                      aria-label={ui?.servicesMenuLabel}
                      aria-expanded={servicesOpen}
                    >
                      <Icon name="LuChevronDown" className={`size-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.dropdown && servicesOpen && (
                  <ul className="pb-3 pl-3">
                    {dropdownLinks.map((link) => (
                      <li key={link.id}>
                        <Link href={link.url} className="block py-2.5 font-body text-[0.9375rem] text-body">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="px-5 pb-8 md:px-8">
          <Link
            href={buttonUrl}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary font-heading text-base font-semibold text-white shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:text-primary active:bg-white active:text-primary"
          >
            {buttonText}
            <Icon name="LuArrowRight" className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};
