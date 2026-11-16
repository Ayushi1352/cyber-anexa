import { ArrowButton } from '@/components/ui/ArrowButton';
import type { NotFoundProps } from '@/types/templates.types';

export function NotFound({ data }: NotFoundProps) {
  if (!data) return null;
  return (
    <section className="py-[32px] bg-[var(--color-section-tint)] px-5 text-center">
      <p className="font-heading text-[4rem] font-extrabold leading-none text-primary">{data.code}</p>
      <p className="mx-auto mt-4 max-w-md font-body text-[1.0625rem] text-body">{data.text}</p>
      <ArrowButton href={data.buttonUrl} label={data.buttonText} icon={data.buttonIcon} className="mt-8 h-[3.2rem] px-8 text-base" />
    </section>
  );
}
