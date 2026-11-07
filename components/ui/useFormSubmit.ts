"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

/**
 * Dummy form submission used by the contact and quote forms: resets the form, shows the
 * thank-you message for `visibleFor` ms and hides it as soon as the visitor edits the form again.
 */
export function useFormSubmit(visibleFor = 5000) {
  const [sent, setSent] = useState(false);
  const timer = useRef<number | null>(null);

  const clear = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = null;
  };

  // stop the pending timer if the visitor leaves the page
  useEffect(() => clear, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    clear();
    setSent(true);
    timer.current = window.setTimeout(() => setSent(false), visibleFor);
  };

  const onChange = () => {
    if (!sent) return;
    clear();
    setSent(false);
  };

  return { sent, onSubmit, onChange };
}
