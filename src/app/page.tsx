import type { ComponentType } from "react";

import DecryptedText from "@/components/DecryptedText";
import Navbar from "@/components/Navbar";
import TextType from "@/components/TextType";
import ThemeToggleButton from "@/components/ThemeToggleButton";

const TextTypeComponent = TextType as ComponentType<Record<string, unknown>>;
const DecryptedTextComponent = DecryptedText as ComponentType<Record<string, unknown>>;

export default function Home() {
  return (
    <main className="home-screen relative min-h-screen overflow-hidden">
      <div aria-hidden="true" className="home-screen__scrim absolute inset-0" />
      <Navbar />
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
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
      <div className="fixed right-8 top-4 z-60 lg:right-16">
        <ThemeToggleButton />
      </div>
    </main>
  );
}
