import Image from "next/image";
import { ellipseOutlined, heroBg, heroTwo } from "@/assets";
import { Container } from "@/components/ui/Container";
import { Decoration, Sparkle } from "@/components/ui/Decoration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cardTones } from "@/components/ui/card-tones";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";
import type { Service } from "@/types";

function ServiceCard({ title, description, tone, offset }: Service) {
  const styles = cardTones[tone];

  return (
    <article className={cn("flex w-full flex-col gap-3 rounded-3xl px-8 py-6 lg:max-w-md", styles.surface, offset)}>
      <h3 className={cn("text-xl lg:text-2xl", styles.title)}>{title}</h3>
      <p className={cn("text-sm lg:text-base", styles.description)}>{description}</p>
    </article>
  );
}

const columnStyles = "contents lg:flex lg:flex-col lg:justify-between lg:gap-6";

export function Services() {
  const leftServices = services.filter(({ column }) => column === "left");
  const rightServices = services.filter(({ column }) => column === "right");

  return (
    <section id="layanan" className="relative isolate overflow-hidden py-16 lg:py-28">
      <Decoration src={ellipseOutlined} className="-right-1/4 top-0 w-1/2" />
      <Sparkle className="left-1/4 top-1/2 hidden lg:block" />
      <Sparkle className="right-1/4 top-1/3 hidden lg:block" />
      <Sparkle className="bottom-6 right-6 lg:right-12" />

      <Container>
        <SectionHeading eyebrow="Layanan Kami" title="Mari Wujudkan Momen Spesialmu" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          <div className="relative order-first mx-auto w-full max-w-md sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:self-center">
            <Image src={heroBg} alt="" aria-hidden className="absolute inset-0 size-full object-contain" />
            <Image
              src={heroTwo}
              alt="Buket bunga gerbera dan krisan dengan kartu ucapan"
              className="relative h-auto w-full"
            />
          </div>

          <div className={cn(columnStyles, "lg:col-start-1 lg:row-start-1")}>
            {leftServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className={cn(columnStyles, "lg:col-start-3 lg:row-start-1")}>
            {rightServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
