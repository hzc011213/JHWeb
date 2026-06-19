import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Voyages", href: "/voyages" },
  { label: "Worlds", href: "/worlds" },
  { label: "Innovation", href: "/innovation" },
  { label: "Plan Launch", href: "/plan-launch" },
];

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M7 7h10v10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function FluidGlassNavbar() {
  return (
    <nav className="fixed left-0 right-0 top-4 z-50 flex items-center justify-between px-8 lg:px-16">
      <div aria-hidden="true" className="h-12 w-12" />

      <div className="liquid-glass hidden items-center rounded px-1.5 py-1.5 md:flex">
        {navItems.map((item) => (
          <Link
            className="rounded px-3 py-2 text-sm font-medium text-white/90 transition hover:text-white"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}

        <Link
          className="ml-1 flex items-center gap-2 whitespace-nowrap rounded bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          href="/claim"
        >
          Claim a Spot
          <ArrowUpRightIcon />
        </Link>
      </div>

      <div aria-hidden="true" className="h-12 w-12" />
    </nav>
  );
}
