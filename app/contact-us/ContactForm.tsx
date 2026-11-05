"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

const form = site.pages.contactUs.form;

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-[0.55rem] block font-body text-[0.97rem] font-semibold text-navy">
      {children} <span className="text-[#ef4444]">*</span>
    </label>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hook this up to your API / email service. For now we just confirm on screen.
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[0.94rem] border border-[#e4ebf5] bg-white px-5 pb-7 pt-7 shadow-[0_0.8rem_2rem_-1.4rem_rgba(23,72,160,0.25)] sm:px-[1.95rem] xl:pb-[1.8rem] xl:pt-[2.05rem]"
    >
      <div className="grid grid-cols-1 gap-x-[1.4rem] gap-y-5 sm:grid-cols-2 xl:gap-y-[1.6rem]">
        <div>
          <Label htmlFor="contact-name">{form.name.label}</Label>
          <input id="contact-name" name="name" required placeholder={form.name.placeholder} className="form-field h-[3.1rem]" />
        </div>
        <div>
          <Label htmlFor="contact-email">{form.email.label}</Label>
          <input id="contact-email" name="email" type="email" required placeholder={form.email.placeholder} className="form-field h-[3.1rem]" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="contact-subject">{form.subject.label}</Label>
          <input id="contact-subject" name="subject" required placeholder={form.subject.placeholder} className="form-field h-[3.1rem]" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="contact-message">{form.message.label}</Label>
          <textarea
            id="contact-message"
            name="message"
            required
            placeholder={form.message.placeholder}
            className="form-field h-[10.3rem] resize-y py-[0.85rem]"
          />
        </div>
      </div>

      {sent && (
        <p className="mt-5 flex items-center gap-2 rounded-md bg-[#ecf8f4] px-4 py-3 font-body text-[0.95rem] text-[#0f7a5f]" role="status">
          <CheckCircle2 className="size-5 shrink-0" />
          {form.success}
        </p>
      )}

      <div className="mt-7 text-center xl:mt-[2.1rem]">
        <button
          type="submit"
          className="group inline-flex h-[3.65rem] items-center justify-center gap-[0.85rem] rounded-full bg-primary px-[2.1rem] font-heading text-[1.09rem] font-semibold text-white shadow-[0_0.6rem_1.4rem_-0.4rem_rgba(5,96,254,0.55)] transition-colors hover:bg-primary-dark xl:w-[15.25rem]"
        >
          {form.button}
          <ArrowRight className="size-[1.3rem] transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
        </button>
      </div>
    </form>
  );
}
