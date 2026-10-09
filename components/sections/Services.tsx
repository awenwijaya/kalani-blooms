import Image from "next/image";
import { ellipseOutlined, heroBg, heroTwo } from "@/assets";
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

// Below xl the cards use a simple 2-column grid; the 3-column staggered layout needs the extra width
const columnStyles = "contents xl:flex xl:flex-col xl:justify-between xl:gap-6";

function ServiceCard({ title, description, tone, align }: Service) {
  const styles = cardTones[tone];

  return (
    <article className={cn("flex w-full flex-col gap-3 rounded-3xl px-8 py-6 xl:w-4/5", styles.surface, alignStyles[align])}>
      <h3 className={styles.title}>{title}</h3>
      <p className={cn("text-sm lg:text-base", styles.description)}>{description}</p>
    </article>
  );
}

export function Services() {
  const leftServices = services.filter(({ column }) => column === "left");
  const rightServices = services.filter(({ column }) => column === "right");

  return (
    <section id="layanan" className="relative isolate overflow-hidden py-16 lg:py-28">
      <Decoration src={ellipseOutlined} className="-right-24 top-0 w-120" />
      <Sparkle className="left-1/4 top-1/2 hidden xl:block" />
      <Sparkle className="right-1/4 top-1/3 hidden xl:block" />
      <Sparkle className="bottom-6 right-6 lg:right-12" />

      <Container>
        <SectionHeading eyebrow="Layanan Kami" title="Mari Wujudkan Momen Spesialmu" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 xl:grid-cols-3 xl:gap-6">
          <div className="relative order-first mx-auto w-full max-w-md sm:col-span-2 xl:order-none xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:self-center">
            <Image src={heroBg} alt="" aria-hidden sizes="(min-width: 1280px) 33vw, 448px" className="absolute inset-0 size-full object-contain" />
            <Image
              src={heroTwo}
              alt="Buket bunga gerbera dan krisan dengan kartu ucapan"
              sizes="(min-width: 1280px) 33vw, 448px"
              className="relative h-auto w-full"
            />
          </div>

          <div className={cn(columnStyles, "xl:col-start-1 xl:row-start-1")}>
            {leftServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className={cn(columnStyles, "xl:col-start-3 xl:row-start-1")}>
            {rightServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
