// Shared Tailwind class lists (used instead of custom CSS classes).

/** Page width container: full width up to the 1440 design (90rem), with side padding. */
export const container = "mx-auto w-full max-w-[90rem] px-5 md:px-8 xl:px-[4.125rem]";

/** Text inputs, selects and textareas of the contact and quote forms. */
export const field =
  "w-full rounded-[0.375rem] border border-[var(--color-field-border)] bg-white px-[0.85rem] font-body text-[0.9375rem] text-navy outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--color-placeholder)] focus:border-primary focus:shadow-[0_0_0_3px_var(--color-shadow-primary-12)]";
