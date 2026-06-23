"use client";

import BlurText from "@/components/react-bits/BlurText";

type ProductTitleProps = {
  children: string;
};

export default function ProductTitle({ children }: ProductTitleProps) {
  return (
    <>
      <h2 className="sr-only">{children}</h2>
      <div aria-hidden="true">
        <BlurText
          text={children}
          animateBy="words"
          direction="bottom"
          delay={90}
          stepDuration={0.42}
          className="mt-9 text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#050505] sm:text-6xl dark:text-[#f4f6f1]"
        />
      </div>
    </>
  );
}
