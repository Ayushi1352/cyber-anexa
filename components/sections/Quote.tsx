'use client';

import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Heading, Lines } from '@/components/ui/Text';
import { field } from '@/components/ui/classes';
import { useFormSubmit } from '@/components/ui/useFormSubmit';
import type { QuoteData, QuoteProps } from '@/types/templates.types';

/** Heading, photo and the three features under it. */
function QuoteIntro({ data: content }: { data: QuoteData }) {
  return (
    <div>
      <div className="xl:pl-[1.5rem]">
        <SectionLabel text={content.label} variant="line-left" />
        <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2rem] xl:mt-[1.05rem] xl:text-[3.22rem] xl:leading-[1.12]">
          <Heading text={content.title} highlight={content.titleHighlight} breakFrom="md" />
        </h2>
        <p className="mt-4 font-body text-[1.0625rem] leading-[1.58] text-body xl:mt-[0.85rem] xl:text-[1.08rem]">
          <Lines text={content.description} breakFrom="lg" />
        </p>
      </div>

      <div className="relative mt-8 aspect-[937/595] overflow-hidden rounded-[1rem] xl:mt-[2.2rem]">
        <Image src={content.image} alt={content.imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-[174fr_262fr_300fr] sm:gap-0 xl:mt-[2.35rem]">
        {content.features.map((feature, i) => (
          <div
            key={feature.title}
            className={
              i === 0
                ? 'sm:pl-[0.7rem] sm:pr-4'
                : `sm:border-l sm:border-[var(--color-quote-divider)] sm:pr-3 ${i === 1 ? 'sm:pl-[2.3rem]' : 'sm:pl-[2.6rem]'}`
            }
          >
            <h3 className="font-heading text-[1.1rem] font-bold leading-tight tracking-[-0.01em] text-navy xl:text-[1.13rem]">{feature.title}</h3>
            <p className="mt-2 font-body text-[0.95rem] leading-[1.5] text-body xl:mt-[0.55rem]">
              <Lines text={feature.text} breakFrom="lg" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Label({ htmlFor, children, required = true }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-[0.6rem] block font-body text-[0.96rem] font-semibold text-navy">
      {children}
      {required && <span className="ml-[0.2rem] align-top text-[0.8rem] text-[var(--color-required)]">*</span>}
    </label>
  );
}

/** Quote request form card; the thank-you note shows after sending. */
function QuoteForm({ data: form }: { data: QuoteData['form'] }) {
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
              <Icon name={form.selectIcon} className="pointer-events-none absolute right-[1rem] top-1/2 size-[1.1rem] -translate-y-1/2 text-navy" strokeWidth={2.2} />
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
            <Icon name={form.successIcon} className="size-5 shrink-0" />
            {form.success}
          </p>
        )}

        <button
          type="submit"
          className="group mt-6 inline-flex h-[3.45rem] w-full items-center justify-center gap-[0.9rem] rounded-[0.5rem] border-2 border-primary bg-primary font-body text-[1.19rem] font-medium text-white shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:text-primary hover:shadow-lg xl:mt-[1.55rem]"
        >
          {form.buttonText}
          <Icon name={form.buttonIcon} className="size-[1.35rem] transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
        </button>
      </form>
    </div>
  );
}

/** Get a Quote page body: intro + image on the left, quote form card on the right. */
export function Quote({ data }: QuoteProps) {
  if (!data) return null;
  return (
    <section className="py-[32px] bg-[linear-gradient(180deg,var(--color-page-top)_0%,var(--color-page-bottom-deep)_100%)]">
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-start gap-10 px-5 md:px-8 lg:grid-cols-[702fr_612fr] lg:gap-[2.2rem] xl:pl-[3.25rem] xl:pr-[2.5rem]">
        <div data-reveal="up">
          <QuoteIntro data={data} />
        </div>
        <div data-reveal="up" data-reveal-delay="150" className="xl:-mt-[0.5rem]">
          <QuoteForm data={data.form} />
        </div>
      </div>
    </section>
  );
}
