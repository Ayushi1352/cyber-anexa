"use client";

import { LuArrowRight, LuCircleCheck, LuChevronDown } from "react-icons/lu";
import { Heading, Lines } from "@/components/ui/Text";
import { field } from "@/components/ui/classes";
import { useFormSubmit } from "@/components/ui/useFormSubmit";
import type { QuoteData } from "@/types/templates.types";

function Label({ htmlFor, children, required = true }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-[0.6rem] block font-body text-[0.96rem] font-semibold text-navy">
      {children}
      {required && <span className="ml-[0.2rem] align-top text-[0.8rem] text-[var(--color-required)]">*</span>}
    </label>
  );
}

export function QuoteForm({ data: form }: { data: QuoteData["form"] }) {
  const { sent, onSubmit, onChange } = useFormSubmit();

  return (
    <div className="rounded-[0.9rem] bg-white px-5 pb-8 pt-8 shadow-[0_1rem_2.5rem_-1.5rem_var(--color-shadow-blue-30)] sm:px-[2.7rem] xl:pb-[3.3rem] xl:pt-[2.35rem]">
      <h2 className="font-heading text-[1.25rem] font-extrabold leading-tight tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[1.9rem] xl:text-[2.3rem]">
        <Heading text={form.title} highlight={form.titleHighlight} breakFrom="md" />
      </h2>
      <p className="mt-3 font-body text-[1rem] leading-[1.68] text-body xl:mt-[0.5rem]">
        <Lines text={form.description} breakFrom="lg" />
      </p>

      <form onSubmit={onSubmit} onChange={onChange} className="mt-7 xl:mt-[1.8rem]">
        <div className="grid grid-cols-1 gap-x-[1.2rem] gap-y-5 sm:grid-cols-2 xl:gap-y-[1.12rem]">
          <div>
            <Label htmlFor="quote-name">{form.name.label}</Label>
            <input id="quote-name" name="name" required placeholder={form.name.placeholder} className={`${field} h-[3.04rem]`} />
          </div>
          <div>
            <Label htmlFor="quote-email">{form.email.label}</Label>
            <input id="quote-email" name="email" type="email" required placeholder={form.email.placeholder} className={`${field} h-[3.04rem]`} />
          </div>
          <div>
            <Label htmlFor="quote-company" required={false}>
              {form.company.label}
            </Label>
            <input id="quote-company" name="company" placeholder={form.company.placeholder} className={`${field} h-[3.04rem]`} />
          </div>
          <div>
            <Label htmlFor="quote-phone">{form.phone.label}</Label>
            <input id="quote-phone" name="phone" type="tel" required placeholder={form.phone.placeholder} className={`${field} h-[3.04rem]`} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="quote-service">{form.service.label}</Label>
            <div className="relative">
              <select id="quote-service" name="service" required defaultValue="" className={`${field} h-[3.04rem] appearance-none pr-10 invalid:text-[var(--color-placeholder)]`}>
                <option value="" disabled>
                  {form.service.placeholder}
                </option>
                {form.serviceOptions.map((s) => (
                  <option key={s} value={s} className="text-navy">
                    {s}
                  </option>
                ))}
              </select>
              <LuChevronDown className="pointer-events-none absolute right-[1rem] top-1/2 size-[1.1rem] -translate-y-1/2 text-navy" strokeWidth={2.2} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="quote-budget" required={false}>
              {form.budget.label}
            </Label>
            <input id="quote-budget" name="budget" placeholder={form.budget.placeholder} className={`${field} h-[3.04rem]`} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="quote-message">{form.message.label}</Label>
            <textarea
              id="quote-message"
              name="message"
              required
              placeholder={form.message.placeholder}
              className={`${field} h-[7.1rem] resize-y py-[0.85rem]`}
            />
          </div>
        </div>

        {sent && (
          <p className="mt-5 flex items-center gap-2 rounded-md bg-[var(--color-success-bg)] px-4 py-3 font-body text-[0.95rem] text-[var(--color-success)]" role="status">
            <LuCircleCheck className="size-5 shrink-0" />
            {form.success}
          </p>
        )}

        <button
          type="submit"
          className="group mt-6 inline-flex h-[3.45rem] w-full items-center justify-center gap-[0.9rem] rounded-[0.5rem] border-2 border-primary bg-primary font-body text-[1.19rem] font-medium text-white shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:text-primary hover:shadow-lg xl:mt-[1.55rem]"
        >
          {form.buttonText}
          <LuArrowRight className="size-[1.35rem] transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
        </button>
      </form>
    </div>
  );
}
