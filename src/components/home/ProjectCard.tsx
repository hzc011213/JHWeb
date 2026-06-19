"use client";

import { motion, useReducedMotion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

import type { Project } from "./projects";
import LiveProjectButton from "./LiveProjectButton";
import ProjectImage from "./ProjectImage";

type ProjectCardProps = {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
};

export default function ProjectCard({
  project,
  index,
  totalCards,
  progress,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const stackScaleStep = 0.03;
  const targetScale = 1 - (totalCards - 1) * stackScaleStep;
  const rangeStart = index / totalCards;
  const rangeEnd = Math.min(1, (index + 1) / totalCards);
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale]);

  return (
    <div className="h-[85vh]">
      <motion.article
        className="sticky flex h-[85vh] origin-top flex-col overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 text-white shadow-2xl shadow-black/20 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{
          scale: prefersReducedMotion ? 1 : scale,
          top: `calc(var(--project-card-top) + ${index * 28}px)`,
        }}
      >
        <div className="mb-4 grid shrink-0 items-end gap-4 sm:mb-5 md:grid-cols-[auto_1fr_auto] md:gap-8">
          <span className="font-black leading-none tracking-tight text-white/92 tabular-nums text-[clamp(3.5rem,9vw,120px)]">
            {project.number}
          </span>
          <div className="min-w-0">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.32em] text-white/48 sm:text-sm">
              {project.category}
            </p>
            <h3 className="text-pretty break-words text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
              {project.name}
            </h3>
          </div>
          <div className="md:justify-self-end">
            <LiveProjectButton />
          </div>
        </div>

        <div className="grid min-h-0 flex-1 gap-4 md:grid-cols-[40fr_60fr] md:gap-6">
          <div className="grid min-h-0 grid-rows-[minmax(0,0.82fr)_minmax(0,1.18fr)] gap-4 md:gap-6">
            <ProjectImage
              src={project.images[0]}
              alt={`${project.name} detail`}
              className="min-h-0"
            />
            <ProjectImage
              src={project.images[1]}
              alt={`${project.name} interface`}
              className="min-h-0"
            />
          </div>
          <ProjectImage
            src={project.images[2]}
            alt={`${project.name} preview`}
            className="min-h-[220px] md:min-h-0"
          />
        </div>
      </motion.article>
    </div>
  );
}
