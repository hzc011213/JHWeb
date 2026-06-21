"use client";

import { motion, useReducedMotion, useTransform } from "framer-motion";
import type { MotionStyle, MotionValue } from "framer-motion";

import type { AboutMeDTO } from "./aboutMe";
import StackCardImage from "./StackCardImage";

type StackCardProps = {
  project: AboutMeDTO;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
};

export default function StackCard({
  project,
  index,
  totalCards,
  progress,
}: StackCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const stackScaleStep = 0.03;
  const targetScale = 1 - (totalCards - 1 - index) * stackScaleStep;
  const rangeStart = index / totalCards;
  const rangeEnd = Math.min(1, (index + 1) / totalCards);
  const scale = useTransform(
    progress,
    [rangeStart, rangeEnd],
    [1, targetScale],
  );
  const cardStyle: MotionStyle = {
    scale: prefersReducedMotion ? 1 : scale,
    top: `${index * 28}px`,
  };

  return (
    <div
      className="sticky top-24 h-[85vh] md:top-32"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        className="relative flex h-[85vh] origin-top flex-col overflow-hidden rounded-[30px] border border-black/12 bg-white p-4 text-black shadow-2xl shadow-black/10 will-change-transform dark:border-white/18 dark:bg-[#0C0C0C] dark:text-white dark:shadow-black/20 sm:rounded-[38px] sm:p-6 md:rounded-[46px] md:p-8"
        style={cardStyle}
      >
        <div className="mb-4 grid shrink-0 items-end gap-4 sm:mb-5 md:grid-cols-[auto_1fr_auto] md:gap-8">
          <span className="font-black leading-none tracking-normal text-black/88 tabular-nums text-[clamp(3.5rem,9vw,120px)] dark:text-white/92">
            {project.number}
          </span>
          <div className="min-w-0">
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.32em] text-black/48 dark:text-white/48 sm:text-sm">
              {project.category}
            </p>
            <h3 className="text-pretty wrap-break-word text-3xl font-black uppercase leading-none tracking-normal sm:text-5xl md:text-6xl">
              {project.name}
            </h3>
          </div>
          <div className="md:justify-self-end">
            <a
              href="#projects"
              className="inline-flex rounded-full border-2 border-black/55 px-8 py-3 text-sm font-black uppercase tracking-widest text-black transition-colors hover:bg-black/8 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:border-white/70 dark:text-white dark:hover:bg-white/12 dark:focus-visible:ring-white dark:focus-visible:ring-offset-[#0C0C0C] sm:px-10 sm:py-3.5 sm:text-base"
            >
              Explore
            </a>
          </div>
        </div>

        <StackCardImages project={project} />
      </motion.article>
    </div>
  );
}

function StackCardImages({ project }: { project: AboutMeDTO }) {
  if (project.arrangement === "feature-left") {
    return (
      <div className="grid min-h-0 flex-1 gap-4 md:grid-cols-[58fr_42fr] md:gap-6">
        <StackCardImage
          src={project.images[2]}
          alt={`${project.name} preview`}
          className="min-h-55 md:min-h-0"
        />
        <div className="grid min-h-0 grid-rows-2 gap-4 md:gap-6">
          <StackCardImage
            src={project.images[0]}
            alt={`${project.name} detail`}
            className="min-h-0"
          />
          <StackCardImage
            src={project.images[1]}
            alt={`${project.name} interface`}
            className="min-h-0"
          />
        </div>
      </div>
    );
  }

  if (project.arrangement === "mosaic") {
    return (
      <div className="grid min-h-0 flex-1 gap-4 md:grid-cols-[38fr_24fr_38fr] md:grid-rows-2 md:gap-6">
        <StackCardImage
          src={project.images[0]}
          alt={`${project.name} detail`}
          className="min-h-35 md:row-span-2 md:min-h-0"
        />
        <StackCardImage
          src={project.images[1]}
          alt={`${project.name} interface`}
          className="min-h-35 md:min-h-0"
        />
        <StackCardImage
          src={project.images[2]}
          alt={`${project.name} preview`}
          className="min-h-55 md:row-span-2 md:min-h-0"
        />
        <div className="hidden rounded-[30px] border border-black/10 bg-black/[0.035] dark:border-white/12 dark:bg-white/[0.035] sm:rounded-[38px] md:block md:rounded-[46px]" />
      </div>
    );
  }

  return (
    <div className="grid min-h-0 flex-1 gap-4 md:grid-cols-[40fr_60fr] md:gap-6">
      <div className="grid min-h-0 grid-rows-[minmax(0,0.82fr)_minmax(0,1.18fr)] gap-4 md:gap-6">
        <StackCardImage
          src={project.images[0]}
          alt={`${project.name} detail`}
          className="min-h-0"
        />
        <StackCardImage
          src={project.images[1]}
          alt={`${project.name} interface`}
          className="min-h-0"
        />
      </div>
      <StackCardImage
        src={project.images[2]}
        alt={`${project.name} preview`}
        className="min-h-55 md:min-h-0"
      />
    </div>
  );
}
