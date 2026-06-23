import { experiences } from '@/data/experiences';

export default function ExperiencePage() {
  return (
    <main className="bg-foreground min-h-screen text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-28 sm:px-10 lg:px-16">
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-sm tracking-[0.24em] text-white/48 uppercase">
            Experience
          </p>
          <h1 className="font-heading mt-5 text-5xl font-semibold tracking-normal sm:text-7xl">
            Building AI, data, and mobility products.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
            Frontend-focused engineering with full-stack range, from autonomous
            driving workflows to AI research tools and data analytics systems.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              className="grid gap-5 border-t border-white/14 py-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.45fr)] md:gap-10"
              key={`${experience.company}-${experience.role}`}
            >
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-white/42 uppercase">
                  {experience.dates}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-normal">
                  {experience.role}
                </h2>
                <p className="mt-2 text-base text-white/64">
                  {experience.company} · {experience.location}
                </p>
              </div>

              <ul className="space-y-3 text-base leading-7 text-white/72">
                {experience.points.map((point) => (
                  <li className="flex gap-3" key={point}>
                    <span
                      aria-hidden="true"
                      className="bg-background/70 mt-3 h-1.5 w-1.5 shrink-0 rounded-full"
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
