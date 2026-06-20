"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

import ScrollFloat from "@/components/react-bits/ScrollFloat";
import ShowCard from "./ShowCard";
import { projects } from "./projects";

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
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          containerClassName="mb-16 text-center text-black dark:text-white md:mb-24"
        >
          About Me
        </ScrollFloat>
        <div ref={containerRef} className="relative pb-[30vh]">
          {projects.map((project, index) => (
            <ShowCard
              key={project.name}
              project={project}
              index={index}
              totalCards={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
