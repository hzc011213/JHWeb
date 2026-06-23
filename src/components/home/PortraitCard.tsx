'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import ScrollFloat from '@/components/react-bits/ScrollFloat';
import SpotlightCard from '@/components/react-bits/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

type PortraitCardProps = {
  identity: string;
  caption: string;
  src: string;
};

export default function PortraitCard({
  identity,
  caption,
  src,
}: PortraitCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(card, { autoAlpha: 1, y: 0 });
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=8%',
          end: 'bottom top+=8%',
          scrub: 0.45,
        },
      });

      timeline
        .fromTo(
          card,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.22, ease: 'power2.out' },
        )
        .to(card, { autoAlpha: 1, y: 0, duration: 0.58 })
        .to(card, {
          autoAlpha: 0,
          y: -18,
          duration: 0.2,
          ease: 'power2.in',
        });
    }, card);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, []);

  return (
    <article ref={cardRef} className="portrait-card">
      <SpotlightCard className="portrait-gallery__card">
        <Image
          src={src}
          alt={`Portrait representing Jimmy as ${identity.toLowerCase()}`}
          width={1254}
          height={1254}
          sizes="(max-width: 639px) 86vw, (max-width: 1023px) 42vw, 22vw"
          className="portrait-gallery__image"
        />
      </SpotlightCard>
      <div className="portrait-gallery__label">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(1.7)"
          scrollStart="top bottom-=16%"
          scrollEnd="center bottom-=28%"
          stagger={0.01}
          textClassName="portrait-gallery__title"
        >
          {identity}
        </ScrollFloat>
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(1.5)"
          scrollStart="top bottom-=12%"
          scrollEnd="center bottom-=22%"
          splitBy="word"
          stagger={0.01}
          containerClassName="portrait-gallery__caption-wrap"
          textClassName="portrait-gallery__caption"
        >
          {caption}
        </ScrollFloat>
      </div>
    </article>
  );
}
