import Image from 'next/image';
import { cn } from '@/lib/utils';
import ProductBlurText from '../FastBlurText';
import ProductImageCarousel from '../product/ProductImageCarousel';
import ProductTitle from '../product/ProductTitle';
import { ProductDetailDTO } from '@/data/products';
import FastBlurText from '../FastBlurText';

type ProductCardProps = {
  product: ProductDetailDTO;
};

export default function ProductCard({ product }: ProductCardProps) {
  const imageFirst = product.alignment === 'image-left';

  return (
    <article
      className={cn(
        'group grid items-center gap-8 lg:gap-12',
        imageFirst
          ? 'lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]'
          : 'lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]',
      )}
    >
      <ProductImage
        product={product}
        className={imageFirst ? 'lg:order-1' : 'lg:order-2'}
      />
      <ProductContent
        product={product}
        className={imageFirst ? 'lg:order-2' : 'lg:order-1'}
      />
    </article>
  );
}

function ProductContent({
  product,
  className,
}: {
  product: ProductDetailDTO;
  className?: string;
}) {
  return (
    <div className={cn('max-w-2xl py-2 lg:px-4', className)}>
      <div className="bg-foreground/2.5 dark:bg-foreground/[0.035] inline-flex items-center gap-3 rounded-full border border-black/10 px-4 py-2 text-black/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition-colors duration-500 dark:border-white/10 dark:text-[#b8beb6] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
        <span
          aria-hidden="true"
          className={cn(
            'h-2 w-2 rounded-full',
            product.isPresent ? 'bg-[#3BE478]' : 'bg-[#5b2ad5]',
          )}
        />
        <FastBlurText
          text={product.date}
          className="font-mono text-xs tracking-[0.2em] uppercase"
          animateBy="letters"
        />
      </div>

      <ProductTitle>{product.name}</ProductTitle>

      <ProductBlurText
        text={product.company}
        className="mt-5 text-xl font-medium text-black/78 dark:text-[#dce2da]"
      />

      <div className="mt-8 space-y-5 text-base leading-8 text-black/62 dark:text-[#a8ada6]">
        {product.description.map((paragraph) => (
          <ProductBlurText
            key={paragraph}
            text={paragraph}
            className="text-base leading-8 text-black/62 dark:text-[#a8ada6]"
            stepDuration={0.3}
          />
        ))}
      </div>
    </div>
  );
}

function ProductImage({
  product,
  className,
}: {
  product: ProductDetailDTO;
  className?: string;
}) {
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [{ src: product.image, alt: product.imageAlt }];

  return (
    <div className={cn('flex items-center justify-center', className)}>
      {images.length > 1 ? (
        <ProductImageCarousel images={images} />
      ) : (
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={1600}
          height={1000}
          unoptimized={images[0].src.endsWith('.svg')}
          className="w-full max-w-220 rounded-[28px] object-contain transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 sm:rounded-[34px]"
        />
      )}
    </div>
  );
}
