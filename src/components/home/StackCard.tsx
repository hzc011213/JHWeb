'use client';

import { motion, useReducedMotion, useTransform } from 'framer-motion';
import type { MotionStyle, MotionValue } from 'framer-motion';

import type { AboutMeDTO } from '../../data/aboutMe';
import StackCardImage from './StackCardImage';

type StackCardProps = {
  content: AboutMeDTO;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
};

export default function StackCard({
  content,
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
        className="bg-background relative flex h-[85vh] origin-top flex-col overflow-hidden rounded-[30px] border border-black/12 p-4 text-black shadow-2xl shadow-black/10 will-change-transform sm:rounded-[38px] sm:p-6 md:rounded-[46px] md:p-8 dark:border-white/18 dark:bg-[#0C0C0C] dark:text-white dark:shadow-black/20"
        style={cardStyle}
      >
        <div className="mb-4 grid shrink-0 items-end gap-4 sm:mb-5 md:grid-cols-[auto_1fr_auto] md:gap-8">
          <span className="text-[clamp(3.5rem,9vw,120px)] leading-none font-black tracking-normal text-black/88 tabular-nums dark:text-white/92">
            {content.number}
          </span>
          <div className="min-w-0">
            <p className="mb-2 font-mono text-xs font-bold tracking-[0.32em] text-black/48 uppercase sm:text-sm dark:text-white/48">
              {content.category}
            </p>
            <h3 className="text-3xl leading-none font-black tracking-normal text-pretty wrap-break-word uppercase sm:text-5xl md:text-6xl">
              {content.name}
            </h3>
          </div>
          <div className="md:justify-self-end">
            <a
              href="#contents"
              className="hover:bg-foreground/8 dark:hover:bg-foreground/12 inline-flex rounded-full border-2 border-black/55 px-8 py-3 text-sm font-black tracking-widest text-black uppercase transition-colors focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-white sm:px-10 sm:py-3.5 sm:text-base dark:border-white/70 dark:text-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-[#0C0C0C]"
            >
              Explore
            </a>
          </div>
        </div>

        <StackCardImages content={content} />
      </motion.article>
    </div>
  );
}

function StackCardImages({ content }: { content: AboutMeDTO }) {
  if (content.arrangement === 'with-description') {
    return (
      <div className="grid min-h-0 flex-1 content-start gap-6 md:grid-cols-[58fr_42fr] md:items-center md:gap-10">
        <StackCardImage
          src={content.images[0]}
          alt={`${content.name} preview`}
          className="aspect-video min-h-0"
        />
        <div className="flex min-h-0 items-center justify-center">
          <p className="max-w-100 text-center text-base leading-relaxed font-medium text-pretty text-black/74 sm:text-lg md:text-left md:text-[clamp(1.05rem,1.55vw,1.65rem)] md:leading-snug dark:text-white/76">
            {content.description}
          </p>
        </div>
      </div>
    );
  }

  if (content.arrangement === 'feature-left') {
    return (
      <div className="grid min-h-0 flex-1 gap-4 md:grid-cols-[58fr_42fr] md:gap-6">
        <StackCardImage
          src={content.images[2]}
          alt={`${content.name} preview`}
          className="min-h-55 md:min-h-0"
        />
        <div className="grid min-h-0 grid-rows-2 gap-4 md:gap-6">
          <StackCardImage
            src={content.images[0]}
            alt={`${content.name} detail`}
            className="min-h-0"
          />
          <StackCardImage
            src={content.images[1]}
            alt={`${content.name} interface`}
            className="min-h-0"
          />
        </div>
      </div>
    );
  }

  if (content.arrangement === 'mosaic') {
    const fourthImage = content.images[3];

    return (
      <div className="grid min-h-0 flex-1 gap-4 md:grid-cols-[38fr_24fr_38fr] md:grid-rows-2 md:gap-6">
        <StackCardImage
          src={content.images[0]}
          alt={`${content.name} detail`}
          className="min-h-35 md:row-span-2 md:min-h-0"
        />
        <StackCardImage
          src={content.images[1]}
          alt={`${content.name} interface`}
          className="min-h-35 md:min-h-0"
        />
        <StackCardImage
          src={content.images[2]}
          alt={`${content.name} preview`}
          className="min-h-55 md:row-span-2 md:min-h-0"
        />
        {fourthImage ? (
          <StackCardImage
            src={fourthImage}
            alt={`${content.name} supporting detail`}
            className="min-h-35 md:min-h-0"
          />
        ) : (
          <div className="bg-foreground/[0.035] dark:bg-foreground/[0.035] hidden rounded-[30px] border border-black/10 sm:rounded-[38px] md:block md:rounded-[46px] dark:border-white/12" />
        )}
      </div>
    );
  }

  return (
    <div className="grid min-h-0 flex-1 gap-4 md:grid-cols-[40fr_60fr] md:gap-6">
      <div className="grid min-h-0 grid-rows-[minmax(0,0.82fr)_minmax(0,1.18fr)] gap-4 md:gap-6">
        <StackCardImage
          src={content.images[0]}
          alt={`${content.name} detail`}
          className="min-h-0"
        />
        <StackCardImage
          src={content.images[1]}
          alt={`${content.name} interface`}
          className="min-h-0"
        />
      </div>
      <StackCardImage
        src={content.images[2]}
        alt={`${content.name} preview`}
        className="min-h-55 md:min-h-0"
        loading={content.number === '01' ? 'eager' : 'lazy'}
      />
    </div>
  );
}
