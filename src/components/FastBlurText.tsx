'use client';

import BlurText from '@/components/react-bits/BlurText';

type FastBlurTextProps = {
  text: string;
  className: string;
  animateBy?: 'words' | 'letters';
  delay?: number;
  direction?: 'top' | 'bottom';
  stepDuration?: number;
};

export default function FastBlurText({
  text,
  className,
  animateBy = 'words',
  delay = 1,
  direction = 'bottom',
  stepDuration = 0.2,
}: FastBlurTextProps) {
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
