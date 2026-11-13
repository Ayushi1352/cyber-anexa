type Variant = "line-left" | "lines" | "dot-lines" | "dot-line-left" | "dots-lines";

type Props = {
  text: string;
  variant?: Variant;
  className?: string;
};

const Line = ({ className = "" }: { className?: string }) => (
  <span className={`block h-[0.094rem] bg-primary ${className}`} aria-hidden="true" />
);
const Dot = ({ className = "" }: { className?: string }) => (
  <span className={`block size-[0.5rem] shrink-0 rounded-full bg-primary ${className}`} aria-hidden="true" />
);

/** Small uppercase label shown above every section heading. */
export function SectionLabel({ text, variant = "lines", className = "" }: Props) {
  const label = (
    <span className="font-body text-[0.875rem] font-medium uppercase leading-none tracking-[0.01em] text-primary xl:text-[0.9375rem]">
      {text}
    </span>
  );

  if (variant === "line-left") {
    return (
      <div className={`flex items-center gap-[0.75rem] ${className}`}>
        <Line className="w-[1.75rem] xl:w-[2.125rem]" />
        {label}
      </div>
    );
  }

  if (variant === "dot-line-left") {
    return (
      <div className={`flex items-center gap-[0.6rem] ${className}`}>
        <span className="flex items-center">
          <Dot className="size-[0.45rem]" />
          <Line className="w-[1.25rem]" />
        </span>
        <span className="font-body text-[0.9375rem] font-semibold uppercase leading-none tracking-[0.01em] text-navy xl:text-[1.03rem]">
          {text}
        </span>
      </div>
    );
  }

  if (variant === "dot-lines" || variant === "dots-lines") {
    return (
      <div className={`flex items-center justify-center gap-[0.9rem] sm:gap-[1.1rem] ${className}`}>
        <span className="flex items-center">
          <Line className="w-[2rem] sm:w-[2.5rem] xl:w-[3.25rem]" />
          <Dot className="size-[0.45rem]" />
        </span>
        {label}
        <span className="flex items-center">
          <Dot className="size-[0.45rem]" />
          <Line className="w-[2rem] sm:w-[2.5rem] xl:w-[3.25rem]" />
        </span>
      </div>
    );
  }

  // "lines": ——  TEXT  ——
  return (
    <div className={`flex items-center justify-center gap-[0.9rem] ${className}`}>
      <Line className="w-[2rem] sm:w-[2.5rem] xl:w-[3.25rem]" />
      {label}
      <Line className="w-[2rem] sm:w-[2.5rem] xl:w-[3.25rem]" />
    </div>
  );
}
