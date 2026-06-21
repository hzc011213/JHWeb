"use client";

import gsap from "gsap";
import Image from "next/image";
import { createRef, memo, useEffect, useMemo, useRef } from "react";

type ImageSwapAsset = {
  src: string;
  alt: string;
};

export type ImageSwapOrientation = "left" | "right";
export type ImageSwapLayout = "landscape" | "phone";

type ImageSwapProps = {
  images: ImageSwapAsset[];
  orientation?: ImageSwapOrientation;
  layout?: ImageSwapLayout;
  pauseOnHover?: boolean;
};

type ImageRef = React.RefObject<HTMLDivElement | null>;

type Slot = {
  x: number;
  y: number;
  z: number;
  zIndex: number;
};

const DELAY = 4200;
const SKEW_AMOUNT = 3;

const imageSwapLayouts = {
  landscape: {
    frameClassName:
      "relative mx-auto h-[480px] w-full max-w-220 overflow-visible sm:h-[570px] lg:h-[620px]",
    stageClassName:
      "absolute top-1/2 left-1/2 h-[min(50vw,440px)] w-[min(78vw,700px)] origin-center -translate-x-1/2 -translate-y-1/2 overflow-visible [perspective:900px] max-md:scale-75 max-[480px]:scale-[0.55]",
    width: "min(78vw, 700px)",
    height: "min(50vw, 440px)",
    imageWidth: 1600,
    imageHeight: 1000,
    horizontalDistance: 42,
    verticalDistance: 46,
    depthDistance: 63,
    sizes: "(max-width: 768px) 78vw, 700px",
  },
  phone: {
    frameClassName:
      "relative mx-auto h-[430px] w-full max-w-124 overflow-visible sm:h-[560px] lg:h-[640px]",
    stageClassName:
      "absolute top-1/2 left-1/2 h-[min(109vw,652px)] w-[min(50vw,300px)] origin-center -translate-x-1/2 -translate-y-1/2 overflow-visible [perspective:900px]",
    width: "min(50vw, 300px)",
    height: "min(109vw, 652px)",
    imageWidth: 1206,
    imageHeight: 2622,
    horizontalDistance: 26,
    verticalDistance: 30,
    depthDistance: 38,
    sizes: "(max-width: 640px) 50vw, 300px",
  },
} as const;

const motionConfig = {
  ease: "elastic.out(0.6,0.9)",
  dropDuration: 2,
  moveDuration: 2,
  returnDuration: 2,
  promoteOverlap: 0.9,
  returnDelay: 0.05,
} as const;

function makeSlot(
  index: number,
  total: number,
  orientation: ImageSwapOrientation,
  layoutConfig: (typeof imageSwapLayouts)[ImageSwapLayout],
): Slot {
  const horizontalDirection = orientation === "left" ? 1 : -1;

  return {
    x: index * layoutConfig.horizontalDistance * horizontalDirection,
    y: -index * layoutConfig.verticalDistance,
    z: -index * layoutConfig.depthDistance,
    zIndex: total - index,
  };
}

function placeImage(
  element: HTMLElement,
  slot: Slot,
  orientation: ImageSwapOrientation,
) {
  gsap.set(element, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: orientation === "left" ? SKEW_AMOUNT : -SKEW_AMOUNT,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });
}

function ImageSwap({
  images,
  orientation = "left",
  layout = "landscape",
  pauseOnHover = false,
}: ImageSwapProps) {
  const layoutConfig = imageSwapLayouts[layout];
  const imageRefs = useMemo<ImageRef[]>(
    () => images.map(() => createRef<HTMLDivElement>()),
    [images],
  );
  const orderRef = useRef<number[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = imageRefs.length;
    orderRef.current = Array.from({ length: total }, (_, index) => index);

    imageRefs.forEach((imageRef, index) => {
      if (!imageRef.current) {
        return;
      }

      placeImage(
        imageRef.current,
        makeSlot(index, total, orientation, layoutConfig),
        orientation,
      );
    });

    const clearSwapInterval = () => {
      if (!intervalRef.current) {
        return;
      }

      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };

    const swap = () => {
      if (orderRef.current.length < 2) {
        return;
      }

      const [front, ...rest] = orderRef.current;
      const frontElement = imageRefs[front]?.current;

      if (!frontElement) {
        return;
      }

      timelineRef.current?.kill();

      const timeline = gsap.timeline();
      timelineRef.current = timeline;

      timeline.to(frontElement, {
        y: "+=500",
        duration: motionConfig.dropDuration,
        ease: motionConfig.ease,
      });

      timeline.addLabel(
        "promote",
        `-=${motionConfig.dropDuration * motionConfig.promoteOverlap}`,
      );

      rest.forEach((imageIndex, slotIndex) => {
        const element = imageRefs[imageIndex]?.current;

        if (!element) {
          return;
        }

        const slot = makeSlot(slotIndex, total, orientation, layoutConfig);

        timeline.set(element, { zIndex: slot.zIndex }, "promote");
        timeline.to(
          element,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: motionConfig.moveDuration,
            ease: motionConfig.ease,
          },
          `promote+=${slotIndex * 0.15}`,
        );
      });

      const backSlot = makeSlot(total - 1, total, orientation, layoutConfig);

      timeline.addLabel(
        "return",
        `promote+=${motionConfig.moveDuration * motionConfig.returnDelay}`,
      );
      timeline.call(
        () => {
          gsap.set(frontElement, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return",
      );
      timeline.to(
        frontElement,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: motionConfig.returnDuration,
          ease: motionConfig.ease,
        },
        "return",
      );
      timeline.call(() => {
        orderRef.current = [...rest, front];
      });
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion && total > 1) {
      swap();
      intervalRef.current = window.setInterval(swap, DELAY);
    }

    const node = containerRef.current;
    const pause = () => {
      timelineRef.current?.pause();
      clearSwapInterval();
    };
    const resume = () => {
      if (prefersReducedMotion || total < 2 || intervalRef.current) {
        return;
      }

      timelineRef.current?.play();
      intervalRef.current = window.setInterval(swap, DELAY);
    };

    if (pauseOnHover) {
      node?.addEventListener("mouseenter", pause);
      node?.addEventListener("mouseleave", resume);
    }

    return () => {
      if (pauseOnHover) {
        node?.removeEventListener("mouseenter", pause);
        node?.removeEventListener("mouseleave", resume);
      }
      clearSwapInterval();
      timelineRef.current?.kill();
      timelineRef.current = null;
    };
  }, [imageRefs, layoutConfig, orientation, pauseOnHover]);

  return (
    <div className={layoutConfig.frameClassName}>
      <div
        ref={containerRef}
        className={layoutConfig.stageClassName}
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            ref={imageRefs[index]}
            className="absolute top-1/2 left-1/2 [backface-visibility:hidden] [transform-style:preserve-3d] will-change-transform"
            style={{ width: layoutConfig.width, height: layoutConfig.height }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={layoutConfig.imageWidth}
              height={layoutConfig.imageHeight}
              sizes={layoutConfig.sizes}
              unoptimized={image.src.endsWith(".svg")}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ImageSwap);
