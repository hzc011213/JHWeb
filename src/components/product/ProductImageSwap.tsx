"use client";

import Image from "next/image";

import CardSwap, { Card } from "@/components/react-bits/CardSwap";

import type { ProductImageAsset } from "./ProductCard";

type ProductImageSwapProps = {
  images: ProductImageAsset[];
};

export default function ProductImageSwap({ images }: ProductImageSwapProps) {
  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[760px] overflow-visible sm:h-[520px] lg:h-[560px]">
      <CardSwap
        width="min(72vw, 620px)"
        height="min(45vw, 390px)"
        cardDistance={42}
        verticalDistance={46}
        delay={4200}
        pauseOnHover
        skewAmount={3}
        easing="elastic"
      >
        {images.map((image) => (
          <Card key={image.src} customClass="bg-transparent">
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1000}
              unoptimized={image.src.endsWith(".svg")}
              className="h-full w-full rounded-[28px] object-contain"
            />
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}
