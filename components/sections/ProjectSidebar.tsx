import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { ProjectDetailData } from "@/types/templates.types";

export function ProjectSidebar({ data: content }: { data: ProjectDetailData }) {
  const rows = content.info;

  return (
    <aside className="flex flex-col gap-8 xl:gap-[2rem]">
      <div className="rounded-[0.56rem] border border-[var(--color-sidebar-border)] bg-white/85 px-5 pb-6 pt-7 shadow-[0_0.8rem_2rem_-1.3rem_var(--color-shadow-blue-25)] xl:pb-[1.9rem] xl:pl-[1.25rem] xl:pr-[0.85rem] xl:pt-[1.85rem]">
        <h2 className="flex items-center gap-[0.9rem] font-body text-[1.25rem] font-bold leading-none text-navy xl:text-[1.3rem]">
          <span className="block h-[1.55rem] w-[0.25rem] rounded-full bg-primary" aria-hidden="true" />
          {content.infoTitle}
        </h2>
        <ul className="mt-6 xl:mt-[1.85rem] xl:pl-[0.8rem]">
          {rows.map(({ icon, label, value }, i) => (
            <li key={label} className="flex items-center gap-[1.2rem]">
              <span className="flex size-[3.3rem] shrink-0 items-center justify-center rounded-[0.4rem] bg-[var(--color-info-icon-bg)] xl:size-[3.65rem]">
                <Icon name={icon} className="size-[1.3rem] text-primary" strokeWidth={2} />
              </span>
              <div
                className={`flex-1 py-[1.05rem] xl:py-[1.25rem] ${i < rows.length - 1 ? "border-b border-[var(--color-card-border)]" : ""}`}
              >
                <p className="font-body text-[1rem] font-bold leading-tight text-navy xl:text-[1.06rem]">{label} :</p>
                <p className="mt-[0.55rem] font-body text-[1rem] leading-tight text-body xl:text-[1.08rem]">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative aspect-[535/454] w-full overflow-hidden rounded-[0.5rem]">
        <Image src={content.sideImage} alt="" fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-cover" />
      </div>
    </aside>
  );
}
