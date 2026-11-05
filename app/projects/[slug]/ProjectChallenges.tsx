import { Lightbulb, Target } from "lucide-react";
import { site, type Project } from "@/lib/site";

export default function ProjectChallenges({ project }: { project: Project }) {
  const content = site.pages.projectDetail;
  const boxes = [
    {
      title: content.challengesLabel,
      items: project.detail.challenges,
      icon: Target,
      box: "bg-[#eef4fd]",
      iconColor: "text-[#2b7bf5]",
      dot: "bg-[#2b7bf5]",
    },
    {
      title: content.solutionsLabel,
      items: project.detail.solutions,
      icon: Lightbulb,
      box: "bg-[#ecf8f4]",
      iconColor: "text-[#19b394]",
      dot: "bg-[#17a884]",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-[837fr_806fr] xl:mt-[1.65rem] xl:gap-[1.9rem]">
      {boxes.map(({ title, items, icon: IconCmp, box, iconColor, dot }) => (
        <div key={title} className={`rounded-[0.56rem] px-6 py-7 xl:min-h-[15.5rem] xl:px-[2.1rem] xl:pt-[1.75rem] ${box}`}>
          <h3 className="flex items-center gap-[0.9rem] font-body text-[1.125rem] font-bold text-navy xl:text-[1.16rem]">
            <IconCmp className={`size-[1.85rem] ${iconColor}`} strokeWidth={2} aria-hidden="true" />
            {title}
          </h3>
          <ul className="mt-4 space-y-[0.6rem] xl:mt-[1.15rem] xl:space-y-[0.55rem]">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-[1.25rem] font-body text-[1.0625rem] text-[#4f566a] xl:text-[1.17rem]">
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
