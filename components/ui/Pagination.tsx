import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/Text";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  /** Labels from templates.json (common.globalUI) */
  label?: string;
  previousLabel?: string;
  nextLabel?: string;
  /** "Go to page {n}" */
  pageLabel?: string;
  /** fill: buttons turn blue on hover (blog, projects); outline: only the border and text turn blue (services) */
  hover?: "fill" | "outline";
  className?: string;
};

const styles = {
  fill: {
    arrow: "transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white",
    page: "transition-all duration-300",
    active: "border border-primary bg-primary text-white hover:border-primary hover:bg-white hover:text-primary",
    idle: "hover:border-primary hover:bg-primary hover:text-white",
  },
  outline: {
    arrow: "transition-colors hover:border-primary hover:text-primary",
    page: "transition-colors",
    active: "bg-primary text-white",
    idle: "hover:border-primary hover:text-primary",
  },
};

/** Numbered page buttons with previous / next arrows, shared by the blog, projects and services grids. */
export const Pagination = ({
  page,
  totalPages,
  onChange,
  label,
  previousLabel,
  nextLabel,
  pageLabel,
  hover = "fill",
  className = "mt-8 xl:mt-[1.9rem]",
}: Props) => {
  if (totalPages < 2) return null;
  const style = styles[hover];
  const arrow = `flex size-[2.2rem] items-center justify-center rounded-full border border-[var(--color-pagination-border)] bg-white text-navy shadow-[0_0.3rem_0.8rem_-0.4rem_var(--color-shadow-blue-30)] disabled:pointer-events-none disabled:opacity-40 ${style.arrow}`;

  return (
    <nav className={`flex items-center justify-center gap-[0.3rem] ${className}`} aria-label={label}>
      <button type="button" onClick={() => onChange(page - 1)} disabled={page === 1} className={arrow} aria-label={previousLabel}>
        <Icon name="LuChevronLeft" className="size-[1rem]" strokeWidth={2.4} />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => onChange(number)}
          aria-current={number === page ? "page" : undefined}
          aria-label={pageLabel ? fill(pageLabel, { n: number }) : undefined}
          className={`flex size-[2.2rem] items-center justify-center rounded-full font-body text-[0.875rem] font-semibold ${style.page} ${
            number === page
              ? `${style.active} shadow-[0_0.4rem_0.9rem_-0.3rem_var(--color-shadow-primary-60)]`
              : `border border-[var(--color-pagination-border)] bg-white text-navy ${style.idle}`
          }`}
        >
          {number}
        </button>
      ))}
      <button type="button" onClick={() => onChange(page + 1)} disabled={page === totalPages} className={arrow} aria-label={nextLabel}>
        <Icon name="LuChevronRight" className="size-[1rem]" strokeWidth={2.4} />
      </button>
    </nav>
  );
};
