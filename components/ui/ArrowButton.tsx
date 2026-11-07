import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

/** Primary blue call-to-action link with a trailing arrow. "pill" = fully rounded with glow, "rounded" = small radius. */
export const ArrowButton = ({
  href,
  label,
  shape = "pill",
  className = "",
  iconClassName = "size-[1.25rem]",
}: {
  href: string;
  label: string;
  shape?: "pill" | "rounded";
  className?: string;
  iconClassName?: string;
}) => {
  const shapeClass =
    shape === "pill" ? "rounded-full shadow-[0_0.6rem_1.4rem_-0.4rem_var(--color-shadow-primary-55)]" : "rounded-[0.375rem]";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-[0.65rem] border-2 border-primary bg-primary font-body font-medium text-white transition-all duration-300 hover:border-primary hover:bg-white hover:text-primary hover:shadow-lg ${shapeClass} ${className}`}
    >
      <span>{label}</span>
      <LuArrowRight className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${iconClassName}`} strokeWidth={2} aria-hidden="true" />
    </Link>
  );
};
