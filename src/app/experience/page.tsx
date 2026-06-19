export default function ExperiencePage() {
  return (
    <main className="home-screen relative min-h-screen overflow-hidden">
      <div aria-hidden="true" className="home-screen__scrim absolute inset-0" />
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24 text-center">
        <div className="max-w-3xl space-y-5">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-black/60 dark:text-white/60">
            Experience
          </p>
          <h1 className="font-heading text-5xl font-semibold tracking-normal sm:text-7xl">
            The work, systems, and stories so far.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/75">
            A focused view of roles, collaborations, launches, and lessons learned.
          </p>
        </div>
      </section>
    </main>
  );
}
