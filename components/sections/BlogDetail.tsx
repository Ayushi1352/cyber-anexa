import Image from 'next/image';
import Link from 'next/link';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { Icon } from '@/components/ui/Icon';
import type { BlogDetailData, BlogDetailProps } from '@/types/templates.types';

const textClass = 'font-body text-[1.0625rem] leading-[1.66] text-[var(--color-text-article)] xl:text-[1.2rem]';

/** The article: photo, category / date, text, quote, two photos and the sub-sections. */
const Article = ({ data: content }: { data: BlogDetailData }) => {
  const { post } = content;
  const image = post.image;

  return (
    <article>
      <div className="relative aspect-[1077/745] overflow-hidden rounded-[0.75rem]">
        <Image src={image} alt={post.title} fill priority sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-[0.85rem] gap-y-1 font-body text-[0.95rem] xl:mt-[1.4rem] xl:px-[0.4rem] xl:text-[1.03rem]">
        <span className="inline-flex items-center gap-[0.55rem] text-primary">
          <Icon name={content.categoryIcon} className="size-[1.15rem] fill-primary" strokeWidth={1.5} aria-hidden="true" />
          {post.category}
        </span>
        <span className="text-[var(--color-text-faint)]" aria-hidden="true">|</span>
        <span className="inline-flex items-center gap-[0.55rem] text-muted">
          <Icon name={content.dateIcon} className="size-[1.15rem] text-primary" strokeWidth={2} aria-hidden="true" />
          {post.date}
        </span>
      </div>

      <div className="xl:px-[0.4rem]">
        <h2 className="mt-4 font-body text-[2rem] font-bold leading-[1.25] tracking-[-0.015em] text-navy sm:text-[2.3rem] xl:mt-[1.15rem] xl:text-[2.45rem] xl:leading-[1.33]">
          {post.title}
        </h2>
        <p className={`mt-4 xl:mt-[0.75rem] ${textClass}`}>{content.intro}</p>

        <blockquote className="relative mt-6 min-h-[5rem] rounded-[0.56rem] bg-[var(--color-article-tag-bg)] py-5 pl-[5.6rem] pr-5 xl:mt-[1.7rem] xl:min-h-[8.95rem] xl:py-[1.85rem] xl:pl-[6.9rem] xl:pr-[2rem]">
          <span className="absolute left-0 top-0 flex size-[4.25rem] items-center justify-center rounded-[0.4rem] bg-primary xl:h-[5rem] xl:w-[4.9rem]">
            <svg viewBox="0 0 40 32" className="h-[1.6rem] w-[2rem] text-white xl:h-[2rem] xl:w-[2.5rem]" fill="currentColor" aria-hidden="true">
              <path d="M0 32V19.6C0 8.9 5.6 2.3 16 0l1.6 4C11.9 5.9 9.1 9.6 8.8 15.2H16V32H0Zm22.4 0V19.6C22.4 8.9 28 2.3 38.4 0L40 4c-5.7 1.9-8.5 5.6-8.8 11.2h7.2V32H22.4Z" />
            </svg>
          </span>
          <p className="font-body text-[1.125rem] italic leading-[1.5] text-navy xl:text-[1.31rem]">{content.quote}</p>
        </blockquote>

        <p className={`mt-5 xl:mt-[1.35rem] ${textClass}`}>{content.body}</p>

        <div className="mt-6 grid grid-cols-1 gap-[1.2rem] sm:grid-cols-[398fr_380fr] xl:mt-[1.6rem]">
          {content.images.map((img) => (
            <div key={img.id} className="relative aspect-[531/336] overflow-hidden rounded-[0.56rem]">
              <Image src={img.image} alt={img.imageAlt} fill sizes="(min-width: 640px) 28vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>

        {content.sections.map((section, i) => (
          <div key={section.heading} className={i === 0 ? 'mt-8 xl:mt-[2rem]' : 'mt-7 xl:mt-[2.35rem]'}>
            <h3 className="font-body text-[1.4rem] font-semibold leading-tight text-navy xl:text-[1.57rem]">{section.heading}</h3>
            <p className={`mt-3 xl:mt-[0.75rem] ${textClass}`}>{section.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

/** "Recent Post" list and the contact card. */
const Sidebar = ({ data: detail }: { data: BlogDetailData }) => {
  const recent = detail.recentPosts;

  return (
    <aside className="flex flex-col gap-8 xl:gap-[1.9rem]">
      <div className="rounded-[0.75rem] border border-[var(--color-sidebar-border)] bg-white px-5 pb-6 pt-7 shadow-[0_0.8rem_2rem_-1.3rem_var(--color-shadow-blue-25)] xl:pb-[2rem] xl:pl-[1.25rem] xl:pr-[0.85rem] xl:pt-[1.85rem]">
        <h2 className="flex items-center gap-[0.75rem] font-body text-[1.3rem] font-bold leading-none text-navy xl:text-[1.42rem]">
          <span className="block h-[1.85rem] w-[0.28rem] rounded-full bg-primary" aria-hidden="true" />
          {detail.recentTitle}
        </h2>
        <ul className="mt-6 xl:mt-[1.85rem]">
          {recent.map((post, i) => (
            <li key={post.id} className={i < recent.length - 1 ? 'border-b border-[var(--color-sidebar-divider)] pb-[1rem] xl:pb-[1.05rem]' : ''}>
              <Link href={post.url} className={`group flex items-start gap-[1.25rem] ${i > 0 ? 'pt-[1rem] xl:pt-[1.15rem]' : ''}`}>
                <span className="relative aspect-[164/150] w-[6.5rem] shrink-0 overflow-hidden rounded-[0.4rem] xl:w-[7.5rem]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="min-w-0 xl:pt-[0.2rem]">
                  <span className="block font-body text-[1rem] font-semibold leading-[1.5] text-navy transition-colors group-hover:text-primary xl:text-[1.15rem] xl:leading-[1.62]">
                    {post.title}
                  </span>
                  <span className="mt-[0.45rem] block font-body text-[0.95rem] text-muted xl:mt-[0.5rem] xl:text-[1.03rem]">{post.date}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative aspect-[551/788] w-full overflow-hidden rounded-[0.75rem] max-lg:max-w-[26rem] lg:mx-auto lg:w-[96%]">
        <Image src={detail.cta.image} alt="" fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-shadow-navy-25)_0%,var(--color-shadow-navy-0)_55%)]" aria-hidden="true" />
        <div className="relative px-[1.7rem] pt-[2rem] xl:pt-[2.05rem]">
          <h2 className="max-w-[15rem] font-body text-[1.65rem] font-bold leading-[1.42] text-white xl:text-[1.8rem] xl:leading-[1.45]">
            {detail.cta.title}
          </h2>
          <p className="mt-4 max-w-[16rem] font-body text-[1rem] leading-[1.5] text-white/90 xl:mt-[1.05rem] xl:text-[1.06rem]">
            {detail.cta.text}
          </p>
          <ArrowButton
            href={detail.cta.buttonUrl}
            label={detail.cta.buttonText}
            icon={detail.cta.buttonIcon}
            className="mt-6 h-[3.3rem] px-[1.75rem] text-[1.0625rem] xl:mt-[1.85rem] xl:h-[3.55rem] xl:w-[12.5rem] xl:text-[1.1rem]"
            iconClassName="size-[1.15rem]"
          />
        </div>
      </div>
    </aside>
  );
};

/** Blog detail page body: the article and the "Recent Post" + contact sidebar. */
export function BlogDetail({ data }: BlogDetailProps) {
  if (!data) return null;
  return (
    <section className="py-[32px] bg-[linear-gradient(180deg,var(--color-page-top)_0%,var(--color-page-bottom)_100%)]">
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[807fr_430fr] lg:gap-[2.25rem] xl:pl-[6.2rem] xl:pr-[4.25rem]">
        <div data-reveal="up">
          <Article data={data} />
        </div>
        <div data-reveal="up" data-reveal-delay="150">
          <Sidebar data={data} />
        </div>
      </div>
    </section>
  );
}
