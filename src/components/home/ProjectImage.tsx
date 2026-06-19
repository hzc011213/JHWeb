import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  className: string;
};

export default function ProjectImage({ src, alt, className }: ProjectImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[40px] bg-black/8 sm:rounded-[50px] md:rounded-[60px] dark:bg-white/8 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
