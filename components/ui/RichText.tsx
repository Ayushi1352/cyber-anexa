import { Fragment } from "react";

type Props = {
  text: string;
  /** Tailwind classes for the highlighted ([...]) words */
  highlightClassName?: string;
  /** Breakpoint from which "\n" becomes a real line break */
  breakFrom?: "sm" | "md" | "lg" | "xl" | "always";
};

const breakClass = {
  always: "block",
  sm: "hidden sm:block",
  md: "hidden md:block",
  lg: "hidden lg:block",
  xl: "hidden xl:block",
};

/**
 * Renders JSON text where:
 *  - "\n" marks a line break used on larger screens (text wraps naturally on small screens)
 *  - "[words]" are highlighted in the brand blue
 */
export default function RichText({
  text,
  highlightClassName = "text-primary",
  breakFrom = "md",
}: Props) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && (
            <>
              {" "}
              <span className={breakClass[breakFrom]} aria-hidden="true" />
            </>
          )}
          {line.split(/(\[[^\]]+\])/g).map((part, pi) =>
            part.startsWith("[") && part.endsWith("]") ? (
              <span key={pi} className={highlightClassName}>
                {part.slice(1, -1)}
              </span>
            ) : (
              <Fragment key={pi}>{part}</Fragment>
            ),
          )}
        </Fragment>
      ))}
    </>
  );
}
