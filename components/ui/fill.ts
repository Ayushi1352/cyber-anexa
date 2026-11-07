/** Fills the {placeholders} of a text from templates.json, e.g. fill("Show testimonial from {name}", { name: "Rohan" }). */
export const fill = (template: string, values: Record<string, string | number>): string =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
