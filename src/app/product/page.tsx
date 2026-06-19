export default function ProductPage() {
  return (
    <main className="home-screen relative min-h-screen overflow-hidden">
      <div aria-hidden="true" className="home-screen__scrim absolute inset-0" />
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24 text-center">
        <div className="max-w-3xl space-y-5">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-black/60 dark:text-white/60">
            Product
          </p>
          <h1 className="font-heading text-5xl font-semibold tracking-normal sm:text-7xl">
            Building useful things with a sharp edge.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/75">
            A place for projects, experiments, and the product instincts behind them.
          </p>
        </div>
      </section>
    </main>
  );
}
