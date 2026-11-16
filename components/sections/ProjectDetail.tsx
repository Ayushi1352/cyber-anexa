import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { Lines } from '@/components/ui/Text';
import type { ProjectDetailData, ProjectDetailProps } from '@/types/templates.types';

const headingClass =
  'font-body text-[1.75rem] font-bold leading-tight tracking-[-0.01em] text-navy xl:text-[2.45rem]';
const textClass = 'font-body text-[1.0625rem] leading-[1.63] text-[var(--color-text-strong)] xl:text-[1.2rem]';

/** Title, photos, result and challenge text. */
const ProjectContent = ({ data: detail }: { data: ProjectDetailData }) => {
  const content = detail;
  return (
    <div>
      <div className="flex items-center gap-[0.85rem]">
        <span className="block h-[0.094rem] w-[1.6rem] bg-primary" aria-hidden="true" />
        <span className="font-body text-[0.875rem] font-medium uppercase leading-none tracking-[0.04em] text-[var(--color-text-project)]">
          {content.label}
        </span>
      </div>
      <h2 className="mt-4 font-body text-[2rem] font-bold leading-[1.22] tracking-[-0.015em] text-navy sm:text-[2.3rem] xl:mt-[1rem] xl:text-[2.85rem] xl:leading-[1.2]">
        <Lines text={detail.title} breakFrom="lg" />
      </h2>
      <p className={`mt-3 xl:mt-[0.65rem] ${textClass}`}>{detail.description}</p>

      <div className="relative mt-7 aspect-[1108/561] overflow-hidden rounded-[0.47rem] xl:mt-[1.7rem]">
        <Image src={detail.mainImage} alt={detail.mainImageAlt} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
      </div>

      <h2 className={`mt-8 xl:mt-[1.85rem] ${headingClass}`}>{content.resultTitle}</h2>
      <p className={`mt-3 xl:mt-[0.75rem] ${textClass}`}>{detail.result}</p>

      <div className="relative mt-6 aspect-[1108/367] overflow-hidden rounded-[0.47rem] xl:mt-[1.5rem]">
        <Image src={detail.resultImage} alt="" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
      </div>

      <h2 className={`mt-8 xl:mt-[1.65rem] ${headingClass}`}>{content.challengeTitle}</h2>
      <p className={`mt-3 xl:mt-[0.75rem] ${textClass}`}>{detail.challenge}</p>
    </div>
  );
};

/** "Project Information" card and a photo. */
const ProjectSidebar = ({ data: content }: { data: ProjectDetailData }) => {
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
                className={`flex-1 py-[1.05rem] xl:py-[1.25rem] ${i < rows.length - 1 ? 'border-b border-[var(--color-card-border)]' : ''}`}
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
};

/** The "Challenges" and "Our Solutions" boxes. */
const ProjectChallenges = ({ data: content }: { data: ProjectDetailData }) => {
  const boxes = [
    {
      title: content.challengesLabel,
      items: content.challenges,
      icon: content.challengesIcon,
      box: 'bg-[var(--color-blue-wash)]',
      iconColor: 'text-[var(--color-challenge)]',
      dot: 'bg-[var(--color-challenge)]',
    },
    {
      title: content.solutionsLabel,
      items: content.solutions,
      icon: content.solutionsIcon,
      box: 'bg-[var(--color-success-bg)]',
      iconColor: 'text-[var(--color-solution)]',
      dot: 'bg-[var(--color-solution-bg)]',
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
};

/** Project detail page body: content + "Project Information" sidebar, then the challenge / solution boxes. */
export function ProjectDetail({ data }: ProjectDetailProps) {
  if (!data) return null;
  return (
    <section className="py-[32px] bg-[linear-gradient(180deg,var(--color-page-top-alt)_0%,var(--color-page-bottom)_100%)]">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-8 xl:pl-[5.8rem] xl:pr-[4rem]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1108fr_538fr] lg:gap-[3rem]">
          <div data-reveal="up">
            <ProjectContent data={data} />
          </div>
          <div data-reveal="up" data-reveal-delay="150" className="lg:pt-[0.2rem]">
            <ProjectSidebar data={data} />
          </div>
        </div>
        <div data-reveal="up">
          <ProjectChallenges data={data} />
        </div>
      </div>
    </section>
  );
}
