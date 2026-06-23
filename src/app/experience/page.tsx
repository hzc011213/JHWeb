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
    <main className="bg-background min-h-screen text-[#101316] transition-colors duration-500 dark:text-[#f4f6f1]">
      <section className="mx-auto w-full max-w-[1440px] px-5 pt-28 pb-20 sm:px-8 lg:px-12 lg:pt-34 xl:px-16">
        {nioExperience ? (
          <ExperiencePrimaryCard experience={nioExperience} />
        ) : null}

        <div className="mt-24 space-y-6 lg:mt-32">
          {remainingExperiences.map((experience) => (
            <article
              className="grid gap-5 border-t border-[#101316]/14 py-7 transition-colors duration-500 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.45fr)] md:gap-10 dark:border-white/14"
              key={`${experience.company}-${experience.role}`}
            >
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-[#7b858c] uppercase transition-colors duration-500 dark:text-[#a7aea8]">
                  {experience.dates}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-normal">
                  {experience.role}
                </h2>
                <p className="mt-2 text-base text-[#657078] transition-colors duration-500 dark:text-[#b8beb6]">
                  {experience.company} · {experience.location}
                </p>
              </div>

              <ul className="space-y-3 text-base leading-7 text-[#48535b] transition-colors duration-500 dark:text-[#d0d5cd]">
                {experience.points.map((point) => (
                  <li className="flex gap-3" key={point}>
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#101316]/70 transition-colors duration-500 dark:bg-white/70"
                    />
                    <span>{point}</span>
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
