import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
} as const;

const sizes = {
  md: "h-12 font-body text-base",
  lg: "h-12 font-heading text-lg 2xl:h-14 2xl:text-xl",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function Button({ href, children, variant = "primary", size = "lg", className }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    variants[variant],
    sizes[size],
    className,
  );

  // In-page anchors use a plain <a> so the browser handles smooth scrolling and scroll-padding natively
  if (href.startsWith("#")) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
