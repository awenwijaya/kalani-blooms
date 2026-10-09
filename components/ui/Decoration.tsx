import Image, { type StaticImageData } from "next/image";
import { starFill } from "@/assets";
import { cn } from "@/lib/cn";

type DecorationProps = {
  src: StaticImageData;
  className?: string;
};

/** Large background shapes (rings, blurred blobs). Hidden on mobile to keep it clean. */
export function Decoration({ src, className }: DecorationProps) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 hidden h-auto max-w-none select-none md:block", className)}
    />
  );
}

/** Soft blurred blush circle (1100px) used behind the order section */
export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 hidden size-275 rounded-full bg-blush/35 blur-glow md:block", className)}
    />
  );
}

const sparkleSizes = {
  sm: "size-5 lg:size-9",
  md: "size-10 lg:size-16",
} as const;

type SparkleProps = {
  size?: keyof typeof sparkleSizes;
  className?: string;
};

export function Sparkle({ size = "md", className }: SparkleProps) {
  return (
    <Image
      src={starFill}
      alt=""
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 select-none", sparkleSizes[size], className)}
    />
  );
}
