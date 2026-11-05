import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  label: string;
  /** "pill" = fully rounded with glow shadow, "rounded" = small radius */
  shape?: "pill" | "rounded";
  className?: string;
  iconClassName?: string;
};

/** Primary blue call-to-action link with a trailing arrow. */
export default function ArrowButton({
  href,
  label,
  shape = "pill",
  className = "",
  iconClassName = "size-[1.25rem]",
}: Props) {
  const shapeClass =
    shape === "pill"
      ? "rounded-full shadow-[0_0.6rem_1.4rem_-0.4rem_rgba(5,96,254,0.55)]"
      : "rounded-[0.375rem]";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-[0.65rem] bg-primary font-body font-medium text-white transition-colors duration-300 hover:bg-primary-dark ${shapeClass} ${className}`}
    >
      <span>{label}</span>
      <ArrowRight
        className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${iconClassName}`}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Link>
  );
}
