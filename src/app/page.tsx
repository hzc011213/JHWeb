import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 py-10 sm:px-10 lg:px-12">
      <nav className="flex items-center justify-between text-sm">
        <Link className="font-semibold tracking-tight" href="/">
          JH
        </Link>
        <div className="flex gap-5 text-neutral-600 dark:text-neutral-300">
          <a className="hover:text-foreground" href="#work">
            Work
          </a>
          <Link className="hover:text-foreground" href="/writing/hello">
            Writing
          </Link>
          <a className="hover:text-foreground" href="mailto:hello@example.com">
            Contact
          </a>
        </div>
      </nav>

      <section className="grid gap-10 py-12 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-7">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
            Personal portfolio
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            Building calm, useful digital things.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            A fresh portfolio foundation with Next.js, TypeScript, Tailwind CSS,
            MDX writing, and Vercel deployment support.
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <p className="text-sm font-medium text-neutral-500">Available for</p>
          <p className="mt-3 text-2xl font-semibold">Product engineering</p>
          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300">
            Replace this panel with your current role, availability, or a short
            statement about the kind of work you want more of.
          </p>
        </div>
      </section>

      <section id="work" className="grid gap-4 sm:grid-cols-3">
        {["Featured project", "Case study", "Open source"].map((title) => (
          <article
            className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"
            key={title}
          >
            <p className="text-sm text-neutral-500">{title}</p>
            <h2 className="mt-4 text-xl font-semibold">Project title</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              Add a concise outcome, the stack you used, and a link to the live
              work or write-up.
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
