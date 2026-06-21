"use client";

import BlurText from "@/components/react-bits/BlurText";

type ProductBlurTextProps = {
  text: string;
  className: string;
  animateBy?: "words" | "letters";
  delay?: number;
  direction?: "top" | "bottom";
  stepDuration?: number;
};

export default function ProductBlurText({
  text,
  className,
  animateBy = "words",
  delay = 10,
  direction = "bottom",
  stepDuration,
}: ProductBlurTextProps) {
  return (
    <BlurText
      text={text}
      animateBy={animateBy}
      direction={direction}
      delay={delay}
      stepDuration={stepDuration}
      className={className}
    />
  );
}
