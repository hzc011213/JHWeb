import Link from "next/link";

import GlassSurface from "@/components/react-bits/GlassSurface";
import { cn } from "@/lib/utils";

import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Experience", href: "/experience" },
  { label: "Personality", href: "/personality" },
];

export default function Navbar() {
  return (
    <nav
      className={cn(
        styles.root,
        "fixed left-0 right-0 top-4 z-50 flex items-center justify-between px-8 lg:px-16",
      )}
    >
      <div aria-hidden="true" className="h-12 w-12" />

      <GlassSurface
        height={52}
        width={400}
        borderRadius={9999}
        borderWidth={0.07}
        brightness={50}
        displace={0.5}
        distortionScale={-180}
        opacity={0.93}
        saturation={1}
        className={cn(
          styles.glass,
          "hidden items-center px-1.5 py-1.5 md:flex",
        )}
      >
        {navItems.map((item) => (
          <Link
            className={cn(
              styles.link,
              "rounded px-3 py-2 text-sm font-medium transition",
            )}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </GlassSurface>

      <div aria-hidden="true" className="h-12 w-12" />
    </nav>
  );
}
