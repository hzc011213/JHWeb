import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

import styles from "./HomeScreen.module.css";

type HomeScreenProps = {
  as?: "div" | "main";
  children: ReactNode;
  className?: string;
};

export default function HomeScreen({
  as: Component = "main",
  children,
  className,
}: HomeScreenProps) {
  const Root = Component as ElementType;

  return (
    <Root
      className={cn(
        styles.root,
        "relative min-h-screen overflow-hidden",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(styles.scrim, "absolute inset-0")}
      />
      {children}
    </Root>
  );
}
