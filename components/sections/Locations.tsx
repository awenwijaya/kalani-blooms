import Image from "next/image";
import { decorThree } from "@/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Decoration, Sparkle } from "@/components/ui/Decoration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cardTones } from "@/components/ui/card-tones";
import { branches } from "@/data/branches";
import { cn } from "@/lib/cn";
import { getMapsUrl } from "@/lib/maps";

export function Locations() {
  return (
    <section id="temukan-kami" className="relative isolate py-16 lg:py-20 2xl:py-28">
      <Sparkle size="md" className="left-12 top-4 hidden md:block" />
      <Sparkle size="md" className="right-1/4 top-4 hidden md:block" />
      <Sparkle size="md" className="bottom-4 left-24 hidden md:block" />
      <Sparkle size="md" className="bottom-4 right-12 hidden md:block" />
      <Decoration src={decorThree} className="-top-46 right-0 opacity-30" />

      <Container>
        <SectionHeading title="Temukan Kami" />

        <div className="mx-auto mt-10 grid max-w-md gap-6 sm:max-w-none sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 2xl:mt-16">
          {branches.map(({ name, address, image, tone }) => {
            const styles = cardTones[tone];

            return (
              <article key={name} className={cn("flex flex-col gap-3 rounded-3xl p-6 lg:px-10", styles.surface)}>
                <Image
                  src={image}
                  alt={`Tampak cabang ${name}`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 448px"
                  className="aspect-4/3 w-full rounded-xl object-cover"
                />
                <h3 className={cn("text-center", styles.title)}>
                  Cabang <strong className="font-bold">{name}</strong>
                </h3>
                <p className={cn("flex-1 text-center text-sm 2xl:text-base", styles.description)}>{address}</p>
                <Button href={getMapsUrl(address)} variant={styles.button} size="md" className="w-full">
                  Buka di Google Maps
                </Button>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
