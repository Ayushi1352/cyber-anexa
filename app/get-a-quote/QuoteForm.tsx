"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import RichText from "@/components/ui/RichText";
import { services, site } from "@/lib/site";

const form = site.pages.getAQuote.form;

function Label({ htmlFor, children, required = true }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-[0.6rem] block font-body text-[0.96rem] font-semibold text-navy">
      {children}
      {required && <span className="ml-[0.2rem] align-top text-[0.8rem] text-[#ef4444]">*</span>}
    </label>
  );
}

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hook this up to your API / email service. For now we just confirm on screen.
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div className="rounded-[0.9rem] bg-white px-5 pb-8 pt-8 shadow-[0_1rem_2.5rem_-1.5rem_rgba(23,72,160,0.3)] sm:px-[2.7rem] xl:pb-[3.3rem] xl:pt-[2.35rem]">
      <h2 className="font-heading text-[1.9rem] font-extrabold leading-tight tracking-[-0.02em] text-navy xl:text-[2.3rem]">
        <RichText text={form.heading} />
      </h2>
      <p className="mt-3 font-body text-[1rem] leading-[1.68] text-body xl:mt-[0.5rem]">
        <RichText text={form.description} breakFrom="lg" highlightClassName="" />
      </p>

      <form onSubmit={onSubmit} className="mt-7 xl:mt-[1.8rem]">
        <div className="grid grid-cols-1 gap-x-[1.2rem] gap-y-5 sm:grid-cols-2 xl:gap-y-[1.12rem]">
          <div>
            <Label htmlFor="quote-name">{form.name.label}</Label>
            <input id="quote-name" name="name" required placeholder={form.name.placeholder} className="form-field h-[3.04rem]" />
          </div>
          <div>
            <Label htmlFor="quote-email">{form.email.label}</Label>
            <input id="quote-email" name="email" type="email" required placeholder={form.email.placeholder} className="form-field h-[3.04rem]" />
          </div>
          <div>
            <Label htmlFor="quote-company" required={false}>
              {form.company.label}
            </Label>
            <input id="quote-company" name="company" placeholder={form.company.placeholder} className="form-field h-[3.04rem]" />
          </div>
          <div>
            <Label htmlFor="quote-phone">{form.phone.label}</Label>
            <input id="quote-phone" name="phone" type="tel" required placeholder={form.phone.placeholder} className="form-field h-[3.04rem]" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="quote-service">{form.service.label}</Label>
            <div className="relative">
              <select id="quote-service" name="service" required defaultValue="" className="form-field h-[3.04rem] appearance-none pr-10 invalid:text-[#9aa2b1]">
                <option value="" disabled>
                  {form.service.placeholder}
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title} className="text-navy">
                    {s.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-[1rem] top-1/2 size-[1.1rem] -translate-y-1/2 text-navy" strokeWidth={2.2} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="quote-budget" required={false}>
              {form.budget.label}
            </Label>
            <input id="quote-budget" name="budget" placeholder={form.budget.placeholder} className="form-field h-[3.04rem]" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="quote-message">{form.message.label}</Label>
            <textarea
              id="quote-message"
              name="message"
              required
              placeholder={form.message.placeholder}
              className="form-field h-[7.1rem] resize-y py-[0.85rem]"
            />
          </div>
        </div>

        {sent && (
          <p className="mt-5 flex items-center gap-2 rounded-md bg-[#ecf8f4] px-4 py-3 font-body text-[0.95rem] text-[#0f7a5f]" role="status">
            <CheckCircle2 className="size-5 shrink-0" />
            {form.success}
          </p>
        )}

        <button
          type="submit"
          className="group mt-6 inline-flex h-[3.45rem] w-full items-center justify-center gap-[0.9rem] rounded-[0.5rem] bg-primary font-body text-[1.19rem] font-medium text-white transition-colors hover:bg-primary-dark xl:mt-[1.55rem]"
        >
          {form.button}
          <ArrowRight className="size-[1.35rem] transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
        </button>
      </form>
    </div>
  );
}
