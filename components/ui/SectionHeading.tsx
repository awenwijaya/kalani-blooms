import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  className?: string;
};

export function SectionHeading({ title, eyebrow, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {eyebrow && <p className="px-6 font-heading text-2xl tracking-eyebrow text-secondary lg:text-4xl">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-5xl lg:text-7xl">{title}</h2>
    </div>
  );
}
