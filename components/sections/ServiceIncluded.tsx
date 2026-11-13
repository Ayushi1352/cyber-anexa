import { Icon } from "@/components/ui/Icon";
import { Heading } from "@/components/ui/Text";
import type { ServiceDetailData } from "@/types/templates.types";

export function ServiceIncluded({ data }: { data: ServiceDetailData }) {
  return (
    <div className="bg-[var(--color-included-bg)] px-5 py-10 sm:px-8 md:py-12 xl:pb-[2.5rem] xl:pl-[4.125rem] xl:pr-[4.4rem] xl:pt-[2.06rem]">
      <div className="xl:pl-[1.25rem]">
        <span className="block h-[0.14rem] w-[1.4rem] bg-primary" aria-hidden="true" />
        <h2 className="mt-3 font-heading text-[1.25rem] font-extrabold leading-tight tracking-[-0.015em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[1.9rem] xl:mt-[0.55rem] xl:text-[2.1rem]">
          <Heading text={data.includedTitle} highlight={data.includedTitleHighlight} breakFrom="md" />
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:mt-[1.65rem] xl:gap-x-[0.94rem] xl:gap-y-[1.45rem]">
        {data.included.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-5 rounded-[0.47rem] border border-[var(--color-sidebar-border)] bg-white px-6 py-6 shadow-[0_0.5rem_1.4rem_-1.1rem_var(--color-shadow-blue-20)] xl:min-h-[10.45rem] xl:gap-[2.06rem] xl:pl-[1.73rem] xl:pr-[1.2rem] xl:pt-[1.45rem]"
          >
            <span className="flex size-[4.25rem] shrink-0 items-center justify-center rounded-full bg-[var(--color-blue-tint)] xl:size-[5.06rem]">
              <Icon name={item.icon} className="size-[2.1rem] text-primary xl:size-[2.6rem]" strokeWidth={1.8} />
            </span>
            <div className="xl:pt-[0.75rem]">
              <h3 className="font-heading text-[1.05rem] font-bold leading-snug tracking-[-0.01em] text-navy xl:text-[1rem]">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-[0.95rem] leading-[1.5] text-body xl:mt-[0.5rem] xl:text-[0.94rem]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
