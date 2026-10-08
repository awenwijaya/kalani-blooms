import Image from "next/image";
import type { ReactNode } from "react";

export function Placeholder({
  w,
  h,
  alt = "",
  className = "",
}: {
  w: number;
  h: number;
  alt?: string;
  className?: string;
}) {
  return (
    <Image
      src={`https://placehold.co/${w}x${h}/png`}
      width={w}
      height={h}
      alt={alt}
      unoptimized
      className={className}
    />
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`fill-none stroke-current ${className}`}
      strokeWidth="1"
    >
      <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[9px] px-2.5 ${className}`}>
      <Sparkle className="size-11 text-maroon" />
      <span className="text-3xl tracking-[0.08em] text-ink md:text-4xl">
        Kalani Blooms
      </span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="px-6 text-2xl tracking-[0.08em] text-mocha md:text-4xl">
        {eyebrow}
      </span>
      <h2 className="text-4xl text-ink md:text-7xl">{children}</h2>
    </div>
  );
}
