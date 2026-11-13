"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Heading, Lines } from "@/components/ui/Text";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { container } from "@/components/ui/classes";
import { fill } from "@/components/ui/Text";
import type { GlobalUIData, TeamData, TeamMember } from "@/types/templates.types";

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative mx-auto aspect-[391/518] w-full max-w-[22rem] overflow-hidden rounded-[0.56rem] bg-white shadow-[0_0.6rem_1.5rem_-1rem_var(--color-shadow-blue-25)] transition-all duration-300 hover:shadow-[0_1rem_2.2rem_-0.8rem_var(--color-shadow-blue-30)]">
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
      {/* white quarter-circle panel (drawn in CSS) */}
      <span
        className="pointer-events-none absolute left-[-15.3%] top-[63.7%] aspect-square w-[84.4%] rounded-full bg-white shadow-sm"
        aria-hidden="true"
      />
      <div className="absolute bottom-[7.2%] left-[7.6%] right-[6%] pointer-events-none">
        <span className="block h-[0.24rem] w-[2rem] rounded-full bg-primary" aria-hidden="true" />
        <h3 className="mt-[0.85rem] font-heading text-[1.15rem] font-bold leading-tight tracking-[-0.01em] text-navy xl:text-[1.25rem]">
          {member.name}
        </h3>
        <p className="mt-[0.35rem] font-body text-[0.8rem] text-[var(--color-text-team-role)] xl:text-[0.84rem]">
          {member.role}
        </p>
      </div>
    </div>
  );
}

/** "Meet Our Team" section with auto-slider — used on Home and About Us. */
export function TeamSection({
  data: content,
  ui,
  showButton = true,
}: {
  data?: TeamData;
  ui?: GlobalUIData;
  showButton?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const members = content?.members ?? [];

  // Update visible items count on window resize
  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCount(4);
      } else if (width >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, members.length - visibleCount);

  // Kept within bounds while rendering (no effect needed) when fewer cards fit after a resize
  const index = Math.min(currentIndex, maxIndex);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (Math.min(prev, maxIndex) >= maxIndex ? 0 : Math.min(prev, maxIndex) + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (Math.min(prev, maxIndex) <= 0 ? maxIndex : Math.min(prev, maxIndex) - 1));
  }, [maxIndex]);

  // Autoplay timer (every 3.5s)
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const timer = setInterval(() => {
      goNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex, goNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!content) return null;

  const totalSteps = maxIndex + 1;

  return (
    <section className="py-[32px] bg-[var(--color-section-tint)] px-0 xl:px-[3.3rem]">
      <div className="mx-auto max-w-[83.4rem] bg-[linear-gradient(180deg,var(--color-page-top-soft)_0%,var(--color-page-bottom)_100%)]">
        <div className={`${container} !max-w-none xl:!px-[3.1rem]`}>
          <div data-reveal="up" className="text-center">
            <SectionLabel text={content.label} variant="dots-lines" />
            <h2 className="mx-auto mt-3 max-w-[46rem] font-heading text-[1.25rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-navy min-[360px]:text-[1.35rem] min-[400px]:text-[1.5rem] sm:text-[2rem] xl:mt-[1rem] xl:text-[3.15rem] xl:leading-[1.13]">
              <Heading text={content.title} highlight={content.titleHighlight} breakFrom="md" />
            </h2>
            <p className="mx-auto mt-4 max-w-[50rem] font-body text-[1.0625rem] leading-[1.45] text-body xl:mt-[0.8rem] xl:text-[1.07rem] xl:leading-[1.41]">
              <Lines text={content.description} breakFrom="lg" />
            </p>
          </div>

          {/* Slider Container */}
          <div
            className="relative mx-auto mt-10 max-w-[77rem] xl:mt-[2.85rem]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Overflow viewport */}
            <div className="overflow-hidden px-1 py-3">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${index * (100 / visibleCount)}%)`,
                }}
              >
                {members.map((member) => (
                  <div
                    key={member.name}
                    className="w-full shrink-0 px-2.5 sm:w-1/2 lg:w-1/4 xl:px-[0.625rem]"
                  >
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation Controls */}
            {totalSteps > 1 && (
              <div className="mt-7 flex items-center justify-center gap-4 xl:mt-[1.8rem]">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex size-[2.6rem] items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md active:scale-95"
                  aria-label={ui?.previousMemberLabel}
                >
                  <Icon name="LuChevronLeft" className="size-[1.2rem]" strokeWidth={2.4} />
                </button>

                {/* Indicator Dots */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalSteps }).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-[0.5rem] rounded-full transition-all duration-300 ${
                        idx === index
                          ? "w-[1.8rem] bg-primary shadow-sm"
                          : "w-[0.5rem] bg-[var(--color-slider-border)] hover:bg-primary/50"
                      }`}
                      aria-label={ui ? fill(ui.goToSlideLabel, { n: idx + 1 }) : undefined}
                      aria-current={idx === index ? "true" : undefined}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  className="flex size-[2.6rem] items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md active:scale-95"
                  aria-label={ui?.nextMemberLabel}
                >
                  <Icon name="LuChevronRight" className="size-[1.2rem]" strokeWidth={2.4} />
                </button>
              </div>
            )}
          </div>

          {/* Conditional Button (hidden on home page when showButton=false) */}
          {showButton && (
            <div className="mt-10 text-center xl:mt-[2.7rem]">
              <ArrowButton
                href={content.buttonUrl}
                label={content.buttonText}
                className="h-[3.4rem] px-[2.3rem] text-[1.0625rem] xl:h-[3.75rem] xl:w-[17.35rem] xl:text-[1.13rem]"
                iconClassName="size-[1.4rem]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
