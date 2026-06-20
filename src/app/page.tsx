import type { ComponentType } from "react";

import BrandCarousel from "@/components/home/BrandCarousel";
import HomeScreen from "@/components/home/HomeScreen";
import DecryptedText from "@/components/react-bits/DecryptedText";
import HomeSections from "@/components/home/HomeSections";
import TextType from "@/components/react-bits/TextType";

const TextTypeComponent = TextType as ComponentType<Record<string, unknown>>;
const DecryptedTextComponent = DecryptedText as ComponentType<
  Record<string, unknown>
>;

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <HomeScreen as="div">
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
      </HomeScreen>
      <BrandCarousel />
      <HomeSections />
    </main>
  );
}
