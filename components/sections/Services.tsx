import Image from "next/image";
import { decorTwo, heroBg, heroTwo } from "@/assets";
import { Container } from "@/components/ui/Container";
import { Decoration, Sparkle } from "@/components/ui/Decoration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cardTones } from "@/components/ui/card-tones";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";
import type { Service } from "@/types";

const alignStyles = {
  start: "xl:self-start",
  center: "xl:self-center",
  end: "xl:self-end",
} as const;

type Alignment = keyof typeof alignStyles;

// Zig-zag per column, mirrored left/right so the layout stays symmetric around the photo:
// the outermost cards touch the container edges (same margin as the navbar), the innermost sit next to the photo.
const staggerPattern: Record<Service["column"], Alignment[]> = {
  left: ["end", "start", "center", "end"],
  right: ["start", "end", "center", "start"],
};

// md and below: image on top + 2-column cards. lg and up: image always centered between two card columns.
// The zig-zag stagger only kicks in from xl, where the columns are wide enough.
const columnStyles = "contents lg:flex lg:flex-col lg:justify-between lg:gap-6";

type ServiceCardProps = Pick<Service, "title" | "description" | "tone"> & { align: Alignment };

function ServiceCard({ title, description, tone, align }: ServiceCardProps) {
  const styles = cardTones[tone];

  return (
    <article className={cn("flex w-full flex-col gap-3 rounded-3xl px-6 py-6 xl:w-4/5 xl:px-8", styles.surface, alignStyles[align])}>
      <h3 className={styles.title}>{title}</h3>
      <p className={cn("text-sm 2xl:text-base", styles.description)}>{description}</p>
    </article>
  );
}

function ServiceColumn({ column, className }: { column: Service["column"]; className: string }) {
  const pattern = staggerPattern[column];
  const columnServices = services.filter((service) => service.column === column);

  return (
    <div className={cn(columnStyles, className)}>
      {columnServices.map(({ title, description, tone }, index) => (
        <ServiceCard
          key={title}
          title={title}
          description={description}
          tone={tone}
          align={pattern[index % pattern.length]}
        />
      ))}
    </div>
  );
}

export function Services() {
  return (
    <section id="layanan" className="relative isolate py-16 lg:py-20 2xl:py-28">
      <Sparkle size="md" className="right-1/4 top-4" />
      <Sparkle size="sm" className="bottom-4 left-1/2" />
      <Sparkle size="md" className="bottom-4 right-8" />
      <Decoration src={decorTwo} className="left-0 top-1/2 w-80 -scale-x-100 md:top-240 md:w-158" />

      <Container>
        <SectionHeading eyebrow="Layanan Kami" title="Mari Wujudkan Momen Spesialmu" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6 2xl:mt-16">
          <div className="relative order-first mx-auto w-full max-w-md sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:self-center">
            <Sparkle size="md" className="-top-8 right-10" />
            <Image src={heroBg} alt="" aria-hidden sizes="(min-width: 1024px) 33vw, 448px" className="absolute inset-0 size-full object-contain" />
            <Image
              src={heroTwo}
              alt="Buket bunga gerbera dan krisan dengan kartu ucapan"
              sizes="(min-width: 1024px) 33vw, 448px"
              className="relative h-auto w-full"
            />
          </div>

          <ServiceColumn column="left" className="lg:col-start-1 lg:row-start-1" />
          <ServiceColumn column="right" className="lg:col-start-3 lg:row-start-1" />
        </div>
      </Container>
    </section>
  );
}
