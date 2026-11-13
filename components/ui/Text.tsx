import { Fragment, type ReactNode } from "react";

export type BreakFrom = "sm" | "md" | "lg" | "xl" | "always";

const breakClass: Record<BreakFrom, string> = {
  always: "block",
  sm: "hidden sm:block",
  md: "hidden md:block",
  lg: "hidden lg:block",
  xl: "hidden xl:block",
};

/** A line break that only applies from the given screen size up (text flows naturally below it). */
const Break = ({ from }: { from: BreakFrom }) => (
  <>
    {" "}
    <span className={breakClass[from]} aria-hidden="true" />
  </>
);

/** Renders each "\n"-separated line of `text`, with a line break (from `breakFrom` up) between them. */
const splitLines = (text: string, breakFrom: BreakFrom, render: (line: string) => ReactNode = (line) => line) => {
  if (breakFrom === "always") {
    return text.split("\n").map((line, i) => (
      <span key={i} className="block">
        {render(line)}
      </span>
    ));
  }
  return text.split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <Break from={breakFrom} />}
      {render(line)}
    </Fragment>
  ));
};

/**
 * Heading from templates.json: `title` with its `highlight` part in blue.
 * "\n" in the title starts a new line (from `breakFrom` up).
 */
export const Heading = ({
  text,
  highlight,
  breakFrom = "always",
  highlightClassName = "text-primary",
}: {
  text: string;
  highlight?: string;
  breakFrom?: BreakFrom;
  highlightClassName?: string;
}) => (
  <>
    {splitLines(text, breakFrom, (line) => {
      const index = highlight ? line.indexOf(highlight) : -1;
      if (!highlight || index < 0) return line;
      return (
        <>
          {line.slice(0, index)}
          <span className={highlightClassName}>{highlight}</span>
          {line.slice(index + highlight.length)}
        </>
      );
    })}
  </>
);

/**
 * Text that keeps the exact line breaks of the design ("\n" in templates.json) on desktop
 * and flows naturally (no forced breaks) on smaller screens.
 */
export const Lines = ({ text, breakFrom = "xl" }: { text: string; breakFrom?: BreakFrom }) => <>{splitLines(text, breakFrom)}</>;

/** The text on one line (for alt texts and labels). */
export const plainText = (text: string) => text.replace(/\s*\n\s*/g, " ").trim();

/** Fills the {placeholders} of a text from templates.json, e.g. fill("Show testimonial from {name}", { name: "Rohan" }). */
export const fill = (template: string, values: Record<string, string | number>): string =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
