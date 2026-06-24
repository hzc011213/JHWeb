import FastBlurText from '@/components/FastBlurText';
import ExperiencePrimaryCard from '@/components/experience/ExperiencePrimaryCard';
import { experiences } from '@/data/experiences';

export default function ExperiencePage() {
  const nioExperience = experiences.find((experience) =>
    experience.company.toLowerCase().includes('nio'),
  );
  const remainingExperiences = experiences.filter(
    (experience) => experience !== nioExperience,
  );

  return (
    <main className="bg-background min-h-screen text-black dark:text-[#f4f6f1]">
      <section className="mx-auto w-full max-w-[1440px] px-5 pt-28 pb-20 sm:px-8 lg:px-12 lg:pt-34 xl:px-16">
        {nioExperience ? (
          <ExperiencePrimaryCard experience={nioExperience} />
        ) : null}

        <div className="mt-24 space-y-6 lg:mt-32">
          {remainingExperiences.map((experience) => (
            <article
              className="grid gap-5 border-t border-black/14 py-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.45fr)] md:gap-10 dark:border-white/14"
              key={`${experience.company}-${experience.role}`}
            >
              <div>
                <FastBlurText
                  className="font-mono text-xs tracking-[0.2em] text-black/46 uppercase dark:text-[#a7aea8]"
                  text={experience.dates}
                />
                <FastBlurText
                  className="mt-3 text-2xl font-semibold tracking-normal text-black/90 dark:text-[#f4f6f1]"
                  text={experience.role}
                />
                <FastBlurText
                  className="mt-2 text-base text-black/58 dark:text-[#b8beb6]"
                  text={`${experience.company} · ${experience.location}`}
                />
              </div>

              <ul className="space-y-3 text-base leading-7 text-black/62 dark:text-[#d0d5cd]">
                {experience.points.map((point) => (
                  <li className="flex gap-3" key={point}>
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-black/70 dark:bg-white/70"
                    />
                    <FastBlurText
                      className="text-base leading-7 text-black/62 dark:text-[#d0d5cd]"
                      text={point}
                      stepDuration={0.3}
                    />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
