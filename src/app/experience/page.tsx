const experiences = [
  {
    role: "Software Engineer (Frontend)",
    company: "Nio Inc.",
    location: "Beijing, China",
    dates: "July 2024 - August 2025",
    points: [
      "Built a platform supporting the full lifecycle of autonomous driving development, enabling data collection, annotation, model training, and deployment workflows for large-scale systems.",
      "Developed an H5 web application used by 4000+ users, enabling real-time vehicle computing power sharing, reward systems, and security warnings.",
    ],
  },
  {
    role: "Full Stack Software Developer",
    company: "Knowlecy",
    location: "Toronto, Canada",
    dates: "September 2023 - July 2024",
    points: [
      "Led end-to-end development of an AI research assistant based on the ChatGPT API, designing and building the backend and frontend from scratch while contributing over 80% of the code.",
      "Optimized system architecture for performance and maintainability, supporting production-level scalability and reliability.",
      "Collaborated with stakeholders to gather requirements and deliver features aligned with business objectives.",
    ],
  },
  {
    role: "Intern Full Stack Software Developer",
    company: "Leadvisor",
    location: "Hybrid",
    dates: "December 2023 - July 2024",
    points: [
      "Developed and maintained full-stack features for the company web platform, including authentication, forum systems, and asset management modules.",
      "Improved system performance by designing optimized data structures, reducing query time complexity to O(n).",
      "Launched an autonomous legal service platform, supporting early-stage product deployment with legal professionals.",
    ],
  },
  {
    role: "Intern Data Analyst",
    company: "Shopee",
    location: "Shanghai, China",
    dates: "June 2023 - September 2023",
    points: [
      "Analyzed large-scale global datasets on Orders, Promotions, and Checkout (OPC) to identify business opportunities and guide product strategy.",
      "Detected data inconsistencies and implemented monitoring processes to reduce business risk and improve data reliability.",
      "Produced 4 in-depth analytical reports, each with 600+ lines of SQL, covering user behavior, A/B testing, and product performance.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-28 sm:px-10 lg:px-16">
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-white/48">
            Experience
          </p>
          <h1 className="mt-5 font-heading text-5xl font-semibold tracking-normal sm:text-7xl">
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
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/42">
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
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70"
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
