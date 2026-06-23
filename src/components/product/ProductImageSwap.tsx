'use client';

import Image from 'next/image';

import CardSwap, { Card } from '@/components/react-bits/CardSwap';

import type { ProductImageAsset } from './ProductCard';

type ProductImageSwapProps = {
  images: ProductImageAsset[];
};

export default function ProductImageSwap({ images }: ProductImageSwapProps) {
  return (
    <div className="relative mx-auto h-100 w-full overflow-visible">
      <CardSwap
        cardDistance={-10}
        verticalDistance={30}
        delay={3000}
        pauseOnHover={false}
        skewAmount={-6}
      >
        {images.map((image) => (
          <Card
            key={image.src}
            customClass="overflow-hidden bg-transparent! shadow-none! border-0!"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1000}
              unoptimized={image.src.endsWith('.svg')}
              className="h-full w-full rounded-[28px] object-contain"
            />
          </Card>
        ))}
      </CardSwap>
    </div>
  );
}
