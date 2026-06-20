"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useCallback } from "react";

type AnimationStart = "center" | "top-right";
type AnimationVariant = "circle";

const styleId = "theme-transition-styles";

function createAnimation(variant: AnimationVariant, start: AnimationStart) {
  const clipPosition = start === "top-right" ? "100% 0%" : "50% 50%";

  return `
    ::view-transition-group(root) {
      animation-duration: 0.75s;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }

    ::view-transition-new(root) {
      animation-name: reveal-theme;
    }

    ::view-transition-old(root),
    .dark::view-transition-old(root) {
      animation: none;
      z-index: -1;
    }

    @keyframes reveal-theme {
      from { clip-path: circle(0% at ${variant === "circle" ? clipPosition : "50% 50%"}); }
      to { clip-path: circle(150% at ${variant === "circle" ? clipPosition : "50% 50%"}); }
    }
  `;
}

function useThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const updateStyles = useCallback((css: string) => {
    let styleElement = document.getElementById(
      styleId,
    ) as HTMLStyleElement | null;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = isDark ? "light" : "dark";

    updateStyles(createAnimation("circle", "top-right"));

    const switchTheme = () => setTheme(nextTheme);

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [isDark, setTheme, updateStyles]);

  return { isDark, toggleTheme };
}

export default function ThemeToggleButton({
  className = "",
}: {
  className?: string;
}) {
  const { isDark, toggleTheme } = useThemeToggle();

  return (
    <button
      aria-label="Toggle theme"
      className={`size-10 cursor-pointer rounded-full border border-white/25 bg-white/15 p-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(255,255,255,0.12),0_8px_24px_rgba(15,23,42,0.12)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 active:scale-95 dark:border-white/20 dark:bg-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(255,255,255,0.08),0_8px_24px_rgba(8,12,18,0.24)] ${className}`}
      onClick={toggleTheme}
      type="button"
    >
      <span className="sr-only">Toggle theme</span>
      <svg fill="none" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
        <motion.g
          animate={{ rotate: isDark ? -180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <path
            d="M120 67.5C149.25 67.5 172.5 90.75 172.5 120C172.5 149.25 149.25 172.5 120 172.5"
            fill="white"
          />
          <path
            d="M120 67.5C90.75 67.5 67.5 90.75 67.5 120C67.5 149.25 90.75 172.5 120 172.5"
            fill="black"
          />
        </motion.g>
        <motion.path
          animate={{ rotate: isDark ? 180 : 0 }}
          d="M120 3.75C55.5 3.75 3.75 55.5 3.75 120C3.75 184.5 55.5 236.25 120 236.25C184.5 236.25 236.25 184.5 236.25 120C236.25 55.5 184.5 3.75 120 3.75ZM120 214.5V172.5C90.75 172.5 67.5 149.25 67.5 120C67.5 90.75 90.75 67.5 120 67.5V25.5C172.5 25.5 214.5 67.5 214.5 120C214.5 172.5 172.5 214.5 120 214.5Z"
          fill="white"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </svg>
    </button>
  );
}
