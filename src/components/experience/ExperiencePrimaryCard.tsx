import Image from 'next/image';

import type { ExperienceDetailDTO } from '@/data/experiences';

type ExperiencePrimaryCardProps = {
  experience: ExperienceDetailDTO;
};

export default function ExperiencePrimaryCard({
  experience,
}: ExperiencePrimaryCardProps) {
  const [videoSrc, ...imageSources] = experience.images ?? [];
  const galleryImages = imageSources.slice(0, 3);

  return (
    <article className="text-[#101316] transition-colors duration-500 dark:text-[#f4f6f1]">
      <div className="grid gap-7 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.48fr)] lg:items-stretch lg:gap-9 xl:gap-12">
        <div className="flex flex-col justify-between px-0 py-2 lg:min-h-130 lg:py-10">
          <div>
            <p className="text-[1.72rem] leading-none font-semibold tracking-[-0.06em] text-[#1a1d1f] transition-colors duration-500 sm:text-[2.15rem] dark:text-[#f4f6f1]">
              NIO
            </p>
            <p className="mt-4 text-base leading-6 font-medium text-[#8d9297] transition-colors duration-500 sm:text-xl dark:text-[#a7aea8]">
              {experience.role}
            </p>
            <div className="mt-9 max-w-md space-y-5 text-[1.25rem] leading-[1.34] font-normal tracking-[-0.035em] text-[#080b0d] transition-colors duration-500 dark:text-[#f7f8f4]">
              {experience.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>

          <a
            className="mt-10 inline-flex w-fit items-center justify-center border border-[#26313a] px-5 py-3 text-sm font-medium text-[#1d252b] transition-[background-color,border-color,color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#1d252b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d252b] active:translate-y-px sm:text-base dark:border-[#d9ded7] dark:text-[#f4f6f1] dark:hover:bg-[#f4f6f1] dark:hover:text-[#101316] dark:focus-visible:outline-[#f4f6f1]"
            href={experience.website}
            rel="noreferrer"
            target="_blank"
          >
            Learn More
          </a>
        </div>

        <div className="relative aspect-[16/8.1] min-w-0 overflow-hidden bg-[#e8e8e6] transition-colors duration-500 lg:aspect-auto lg:h-130 xl:h-140 dark:bg-[#171a19]">
          {videoSrc ? (
            <video
              aria-label={`${experience.company} featured motion reel`}
              autoPlay
              className="block h-full w-full min-w-0 object-cover"
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : null}
        </div>
      </div>

      {galleryImages.length > 0 ? (
        <div className="mt-8 grid gap-7 md:grid-cols-3 lg:mt-10 lg:gap-9">
          {galleryImages.map((imageSrc, index) => (
            <figure
              className="relative aspect-[1.88/1] overflow-hidden bg-[#eef0ef] transition-colors duration-500 dark:bg-[#171a19]"
              key={`${imageSrc}-${index}`}
            >
              <Image
                alt={`NIO image ${index}`}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 31vw, (min-width: 768px) 33vw, 100vw"
                src={imageSrc}
              />
            </figure>
          ))}
        </div>
      ) : null}
    </article>
  );
}
