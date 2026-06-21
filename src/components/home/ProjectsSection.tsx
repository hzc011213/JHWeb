"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

import ScrollFloat from "@/components/react-bits/ScrollFloat";
import ShowCard from "./ShowCard";
import { projects } from "./projects";

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalCards = projects.length;
  const finalStackOffset = Math.max(0, totalCards - 1) * 28;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative z-10 mt-8 scroll-mt-24 rounded-t-[40px] bg-white px-5 py-20 text-black dark:bg-black dark:text-white sm:mt-16 sm:rounded-t-[50px] sm:px-8 md:mt-20 md:scroll-mt-32 md:rounded-t-[60px] md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-24 max-w-4xl text-center text-black dark:text-white md:mb-30">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            textClassName="!text-[clamp(1.5rem,5vw,5.5rem)]"
          >
            About Me
          </ScrollFloat>
          <ScrollFloat
            animationDuration={0.9}
            ease="back.inOut(2)"
            scrollStart="center bottom+=42%"
            scrollEnd="bottom bottom-=32%"
            splitBy="word"
            stagger={0.035}
            containerClassName="mt-5"
            textClassName="!text-[clamp(1.25rem,2.4vw,2.25rem)] !font-semibold !leading-tight"
          >
            Entrepreneur, designer, engineer, dreamer.
          </ScrollFloat>
          <ScrollFloat
            animationDuration={0.85}
            ease="back.inOut(2)"
            scrollStart="center bottom+=36%"
            scrollEnd="bottom bottom-=28%"
            splitBy="word"
            stagger={0.018}
            containerClassName="mx-auto mt-4 max-w-3xl text-black/66 dark:text-white/68"
            textClassName="!text-[clamp(0.98rem,1.35vw,1.18rem)] !font-medium !leading-relaxed"
          >
            {"Always learning, always building. Driven by curiosity and a belief that great ideas deserve to be brought to life. This portfolio is a collection of the things I've created, explored, and learned along the way."}
          </ScrollFloat>
        </div>
        <div
          ref={containerRef}
          className="relative"
          style={{
            paddingBottom: finalStackOffset,
          }}
        >
          {projects.map((project, index) => (
            <ShowCard
              key={project.name}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
