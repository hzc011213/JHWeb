"use client";

import { useRef, type ComponentType } from "react";
import { useScroll } from "framer-motion";

import BrandCarousel from "@/components/home/BrandCarousel";
import StackCard from "@/components/home/StackCard";
import { projects } from "@/components/home/projects";
import DecryptedText from "@/components/react-bits/DecryptedText";
import ScrollFloat from "@/components/react-bits/ScrollFloat";
import TextType from "@/components/react-bits/TextType";

const TextTypeComponent = TextType as ComponentType<Record<string, unknown>>;
const DecryptedTextComponent = DecryptedText as ComponentType<
  Record<string, unknown>
>;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalCards = projects.length;
  const finalStackOffset = Math.max(0, totalCards - 1) * 28;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-white dark:bg-black">
      <div className="relative min-h-screen overflow-hidden bg-[image:url('/assets/home-background-light.png')] bg-cover bg-center text-[#050505] transition-[background-image,color] duration-500 dark:bg-[url('/assets/home-background-dark.png')] dark:text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-white/8 transition-colors dark:bg-black/20"
        />
        <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-36 text-center sm:pb-28">
          <div className="flex flex-col items-center gap-5">
            <TextTypeComponent
              as="h1"
              text="Hey, I am Jimmy"
              typingSpeed={75}
              initialDelay={250}
              loop={false}
              cursorCharacter="_"
              className="font-heading text-5xl font-semibold tracking-normal sm:text-7xl"
              cursorClassName="text-current"
            />
            <DecryptedTextComponent
              text="Hacking into the mainframe..."
              animateOn="view"
              speed={45}
              maxIterations={12}
              sequential
              revealDirection="start"
              parentClassName="font-mono text-base text-black/70 sm:text-xl dark:text-white/75"
              encryptedClassName="text-black/35 dark:text-white/35"
            />
          </div>
        </section>
      </div>
      <BrandCarousel />
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
              {
                "Always learning, always building. Driven by curiosity and a belief that great ideas deserve to be brought to life. This portfolio is a collection of the things I've created, explored, and learned along the way."
              }
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
              <StackCard
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
    </main>
  );
}
