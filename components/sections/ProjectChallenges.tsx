import { Icon } from "@/components/ui/Icon";
import type { ProjectDetailData } from "@/types/templates.types";

export function ProjectChallenges({ data: content }: { data: ProjectDetailData }) {
  const boxes = [
    {
      title: content.challengesLabel,
      items: content.challenges,
      icon: "LuTarget",
      box: "bg-[var(--color-blue-wash)]",
      iconColor: "text-[var(--color-challenge)]",
      dot: "bg-[var(--color-challenge)]",
    },
    {
      title: content.solutionsLabel,
      items: content.solutions,
      icon: "LuLightbulb",
      box: "bg-[var(--color-success-bg)]",
      iconColor: "text-[var(--color-solution)]",
      dot: "bg-[var(--color-solution-bg)]",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-[837fr_806fr] xl:mt-[1.65rem] xl:gap-[1.9rem]">
      {boxes.map(({ title, items, icon, box, iconColor, dot }) => (
        <div key={title} className={`rounded-[0.56rem] px-6 py-7 xl:min-h-[15.5rem] xl:px-[2.1rem] xl:pt-[1.75rem] ${box}`}>
          <h3 className="flex items-center gap-[0.9rem] font-body text-[1.125rem] font-bold text-navy xl:text-[1.16rem]">
            <Icon name={icon} className={`size-[1.85rem] ${iconColor}`} strokeWidth={2} aria-hidden="true" />
            {title}
          </h3>
          <ul className="mt-4 space-y-[0.6rem] xl:mt-[1.15rem] xl:space-y-[0.55rem]">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-[1.25rem] font-body text-[1.0625rem] text-[var(--color-text-strong)] xl:text-[1.17rem]">
                <span className={`size-[0.5rem] shrink-0 rounded-full ${dot}`} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
