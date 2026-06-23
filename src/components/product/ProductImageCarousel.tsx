'use client';

import Image from 'next/image';

import Carousel, { type CarouselItem } from '@/components/react-bits/Carousel';

import type { ProductImageAsset } from './ProductCard';
import './ProductImageCarousel.css';

type ProductImageCarouselProps = {
  images: ProductImageAsset[];
};

export default function ProductImageCarousel({
  images,
}: ProductImageCarouselProps) {
  const items: CarouselItem[] = images.map((image, index) => ({
    id: index + 1,
    title: image.alt,
    description: '',
    icon: (
      <Image
        src={image.src}
        alt={image.alt}
        width={1600}
        height={1000}
        unoptimized={image.src.endsWith('.svg')}
        className="product-image-carousel__image"
      />
    ),
  }));

  return (
    <div className="product-image-carousel">
      <Carousel
        items={items}
        baseWidth={250}
        autoplay
        autoplayDelay={3000}
        pauseOnHover={false}
        loop={true}
        round={false}
      />
    </div>
  );
}
