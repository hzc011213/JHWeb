import Image from 'next/image';

type StackCardImageProps = {
  src: string;
  alt: string;
  className: string;
  loading?: 'eager' | 'lazy';
};

export default function StackCardImage({
  src,
  alt,
  className,
  loading = 'lazy',
}: StackCardImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[40px] bg-foreground/8 sm:rounded-[50px] md:rounded-[60px] dark:bg-foreground/8 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading={loading}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
