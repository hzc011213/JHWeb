import Image from "next/image";
import type { ReactNode } from "react";

import LogoLoop, { type LogoItem } from "@/components/react-bits/LogoLoop";

function brandLogoNode(
  name: string,
  src: string,
  width: number,
  height: number,
  tone: "dark-source" | "light-source" | "color",
): ReactNode {
  return (
    <Image
      alt={name}
      className={`brand-carousel__logo brand-carousel__logo--${tone}`}
      height={height}
      src={src}
      unoptimized
      width={width}
    />
  );
}

const brandLogos: LogoItem[] = [
  {
    node: brandLogoNode(
      "Hyperduality",
      "/assets/brand/hyperduality-logo.svg",
      232,
      40,
      "dark-source",
    ),
    title: "Hyperduality",
  },
  {
    node: brandLogoNode(
      "Knowlecy",
      "/assets/brand/knowlecy-logo-white.svg",
      304,
      40,
      "light-source",
    ),
    title: "Knowlecy",
  },
  {
    node: brandLogoNode(
      "Leadvisor",
      "/assets/brand/leadvisor-logo.svg",
      133,
      40,
      "color",
    ),
    title: "Leadvisor",
  },
  {
    node: brandLogoNode(
      "NIO",
      "/assets/brand/nio-logo-white.svg",
      112,
      40,
      "light-source",
    ),
    title: "NIO",
  },
  {
    src: "/assets/brand/shopee-logo.svg",
    alt: "Shopee",
    width: 128,
    height: 40,
  },
];

export default function BrandCarousel() {
  return (
    <div className="brand-carousel mx-auto my-12 max-w-[min(calc(100vw-2rem),56rem)] overflow-hidden md:my-16">
      <LogoLoop
        ariaLabel="Brand logos"
        fadeOut
        gap={60}
        logoHeight={32}
        logos={brandLogos}
        pauseOnHover
        scaleOnHover
        speed={84}
        width="100%"
      />
    </div>
  );
}
