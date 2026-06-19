"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

import FadeIn from "./FadeIn";
import ShowCard from "./ShowCard";
import type { ShowCardArrangement } from "./ShowCard";
import { projects } from "./projects";

const showCardArrangements: ShowCardArrangement[] = [
  "split",
  "feature-left",
  "mosaic",
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative z-10 mt-12 scroll-mt-24 rounded-t-[40px] bg-white px-5 py-20 text-black dark:bg-black dark:text-white sm:mt-16 sm:rounded-t-[50px] sm:px-8 md:mt-20 md:scroll-mt-32 md:rounded-t-[60px] md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn y={40}>
          <h2 className="hero-heading mb-16 text-balance text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight md:mb-24">
            Project
          </h2>
        </FadeIn>
        <div ref={containerRef} className="relative pb-[30vh]">
          {projects.map((project, index) => (
            <ShowCard
              key={project.name}
              project={project}
              index={index}
              totalCards={projects.length}
              progress={scrollYProgress}
              arrangement={showCardArrangements[index % showCardArrangements.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
