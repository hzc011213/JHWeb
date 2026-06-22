"use client";

import {
  useRef,
  type CSSProperties,
  type PointerEventHandler,
  type PropsWithChildren,
} from "react";

import "./SpotlightCard.css";

interface SpotlightCardProps extends PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

type SpotlightCardStyle = CSSProperties & {
  "--spotlight-color": string;
};

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onPointerMove={handlePointerMove}
      className={["card-spotlight", className].filter(Boolean).join(" ")}
      style={{ "--spotlight-color": spotlightColor } as SpotlightCardStyle}
    >
      {children}
    </div>
  );
}
