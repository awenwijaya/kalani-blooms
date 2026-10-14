import Image, { type StaticImageData } from "next/image";
import { starFill } from "@/assets";
import { cn } from "@/lib/cn";

type DecorationProps = {
  src: StaticImageData;
  className?: string;
};

/** Large background shapes (rings, blurred blobs). Size is set per usage: scaled down on mobile, natural size from md. */
export function Decoration({ src, className }: DecorationProps) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 h-auto max-w-none select-none", className)}
    />
  );
}

/** Soft blurred blush circle used behind the order section. Size and position are set per usage. */
export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 rounded-full bg-blush/35 blur-glow", className)}
    />
  );
}

const sparkleSizes = {
  sm: "size-1.25 lg:size-5.25",
  md: "size-6.25 lg:size-12.25",
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
