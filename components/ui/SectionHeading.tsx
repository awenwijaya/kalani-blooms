import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  className?: string;
};

export function SectionHeading({ title, eyebrow, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {eyebrow && <p className="px-6 font-heading text-base tracking-eyebrow text-secondary 2xl:text-xl">{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
  );
}
