'use client';

import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Heading, Lines } from '@/components/ui/Text';
import { field } from '@/components/ui/classes';
import { useFormSubmit } from '@/components/ui/useFormSubmit';
import type { ContactData, ContactProps } from '@/types/templates.types';

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-[0.55rem] block font-body text-[0.97rem] font-semibold text-navy">
      {children} <span className="text-[var(--color-required)]">*</span>
    </label>
  );
}

/** Message form; the thank-you note shows after sending. */
function ContactForm({ data: form }: { data: ContactData['form'] }) {
  const { sent, onSubmit, onChange } = useFormSubmit();

  return (
    <form
      onSubmit={onSubmit}
      onChange={onChange}
      className="rounded-[0.94rem] border border-[var(--color-card-border)] bg-white px-5 pb-7 pt-7 shadow-[0_0.8rem_2rem_-1.4rem_var(--color-shadow-blue-25)] sm:px-[1.95rem] xl:pb-[1.8rem] xl:pt-[2.05rem]"
    >
      <div className="grid grid-cols-1 gap-x-[1.4rem] gap-y-5 sm:grid-cols-2 xl:gap-y-[1.6rem]">
        <div>
          <Label htmlFor="contact-name">{form.name.label}</Label>
          <input id="contact-name" name="name" required placeholder={form.name.placeholder} className={`${field} h-[3.1rem]`} />
        </div>
        <div>
          <Label htmlFor="contact-email">{form.email.label}</Label>
          <input id="contact-email" name="email" type="email" required placeholder={form.email.placeholder} className={`${field} h-[3.1rem]`} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="contact-subject">{form.subject.label}</Label>
          <input id="contact-subject" name="subject" required placeholder={form.subject.placeholder} className={`${field} h-[3.1rem]`} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="contact-message">{form.message.label}</Label>
          <textarea
            id="contact-message"
            name="message"
            required
            placeholder={form.message.placeholder}
            className={`${field} h-[10.3rem] resize-y py-[0.85rem]`}
          />
        </div>
      </div>

      {sent && (
        <p className="mt-5 flex items-center gap-2 rounded-md bg-[var(--color-success-bg)] px-4 py-3 font-body text-[0.95rem] text-[var(--color-success)]" role="status">
          <Icon name={form.successIcon} className="size-5 shrink-0" />
          {form.success}
        </p>
      )}

      <div className="mt-7 text-center xl:mt-[2.1rem]">
        <button
          type="submit"
          className="group inline-flex h-[3.65rem] items-center justify-center gap-[0.85rem] rounded-full border-2 border-primary bg-primary px-[2.1rem] font-heading text-[1.09rem] font-semibold text-white shadow-[0_0.6rem_1.4rem_-0.4rem_var(--color-shadow-primary-55)] transition-all duration-300 hover:border-primary hover:bg-white hover:text-primary hover:shadow-lg xl:w-[15.25rem]"
        >
          {form.buttonText}
          <Icon name={form.buttonIcon} className="size-[1.3rem] transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
        </button>
      </div>
    </form>
  );
}

/** Dark card with the office, phone and email rows and the social links. */
function ContactDetails({ data: details }: { data: ContactData['details'] }) {
  return (
    <div className="relative overflow-hidden rounded-[0.94rem] bg-[var(--color-contact-panel)] px-6 pb-9 pt-10 sm:px-[2.65rem] xl:pb-[2.7rem] xl:pt-[3.8rem]">
      {/* photo on the right, blended into the navy card with CSS */}
      <div className="absolute inset-y-0 right-0 w-[60%] sm:w-[46.5%]" aria-hidden="true">
        <Image src={details.image} alt="" fill sizes="(min-width: 1024px) 18vw, 50vw" className="object-cover object-left" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-contact-panel)_0%,var(--color-contact-panel-55)_22%,var(--color-contact-panel-0)_50%)]" />
      </div>

      <div className="relative max-w-[17rem] sm:max-w-[17.5rem]">
        <div className="flex items-center gap-[0.9rem]">
          <span className="block h-[0.094rem] w-[1.7rem] bg-white" aria-hidden="true" />
          <span className="font-body text-[0.82rem] font-semibold uppercase leading-none tracking-[0.01em] text-white">{details.label}</span>
        </div>
        <p className="mt-5 font-body text-[0.98rem] leading-[1.53] text-white/90 xl:mt-[1.4rem]">{details.text}</p>

        <ul className="mt-8 space-y-7 xl:mt-[2.15rem] xl:space-y-[1.75rem]">
          {details.items.map((item) => (
            <li key={item.id} className="flex items-start gap-[1.2rem]">
              <span className="flex size-[3.3rem] shrink-0 items-center justify-center rounded-full bg-primary">
                <Icon name={item.icon} className="size-[1.3rem] text-white" fill={item.id === 'phone' ? 'currentColor' : 'none'} strokeWidth={item.id === 'phone' ? 0 : 2.2} />
              </span>
              <div>
                <p className="font-body text-[0.98rem] font-semibold leading-snug text-white">{item.title}</p>
                <div className="mt-[0.3rem] font-body text-[0.98rem] leading-[1.53] text-white/85">
                  {item.text.split('\n').map((line) => {
                    if (item.id === 'phone') {
                      return (
                        <a
                          key={line}
                          href={`tel:${line.replace(/\s+/g, '')}`}
                          className="block transition-colors hover:text-white"
                        >
                          {line}
                        </a>
                      );
                    }
                    if (item.id === 'email') {
                      return (
                        <a
                          key={line}
                          href={`mailto:${line.trim()}`}
                          className="block transition-colors hover:text-white"
                        >
                          {line}
                        </a>
                      );
                    }
                    return (
                      <span key={line} className="block">
                        {line}
                      </span>
                    );
                  })}
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
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-[2.9rem] items-center justify-center rounded-full bg-[var(--color-contact-panel-strip)] text-white transition-colors hover:bg-primary"
              >
                <Icon name={s.icon} className="size-[1.05rem]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Contact page body: heading + form on the left, dark details card on the right, map below. */
export function Contact({ data }: ContactProps) {
  if (!data) return null;
  const { map } = data;
  return (
    <>
      <section className="py-[32px] bg-[linear-gradient(180deg,var(--color-page-top)_0%,var(--color-page-bottom-mid)_100%)]">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[697fr_570fr] lg:items-end lg:gap-[1rem] xl:pl-[5.1rem] xl:pr-[4.6rem]">
          <div data-reveal="up">
            <SectionLabel text={data.label} variant="line-left" />
            <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2rem] xl:mt-[1rem] xl:text-[3.08rem]">
              <Heading text={data.title} highlight={data.titleHighlight} breakFrom="md" />
            </h2>
            <p className="mt-4 font-body text-[1.0625rem] leading-[1.58] text-body xl:mt-[0.85rem] xl:text-[1.08rem]">
              <Lines text={data.description} breakFrom="lg" />
            </p>
            <div className="mt-8 xl:mt-[2.15rem]">
              <ContactForm data={data.form} />
            </div>
          </div>
          <div data-reveal="up" data-reveal-delay="150">
            <ContactDetails data={data.details} />
          </div>
        </div>
      </section>
      <section className="mb-[32px] h-[22rem] w-full sm:h-[26rem] xl:h-[29.6rem]">
        <iframe
          src={map.embedUrl}
          title={map.title}
          className="block size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
