import Image from "next/image";
import { decorThree } from "@/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Decoration, Sparkle } from "@/components/ui/Decoration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cardTones } from "@/components/ui/card-tones";
import { branches } from "@/data/branches";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site";
import { getBranchMapsUrl } from "@/lib/maps";
import { formatPhone } from "@/lib/phone";

export function Locations() {
  return (
    <section id="temukan-kami" className="relative isolate py-16 lg:py-20 2xl:py-28">
      <Sparkle size="md" className="left-12 top-4" />
      <Sparkle size="md" className="right-1/4 top-4" />
      <Sparkle size="md" className="bottom-4 left-24" />
      <Sparkle size="md" className="bottom-4 right-12" />
      <Decoration src={decorThree} className="-top-24 right-0 w-115 opacity-30 md:-top-46 md:w-230" />

      <Container>
        <SectionHeading title="Temukan Kami" />

        <div className="mx-auto mt-10 grid max-w-md gap-6 sm:max-w-none sm:grid-cols-2 lg:mt-12 xl:grid-cols-4 2xl:mt-16">
          {branches.map((branch) => {
            const { name, address, phone, image, tone } = branch;
            const styles = cardTones[tone];

            return (
              <article key={name} className={cn("flex flex-col gap-3 rounded-3xl p-6", styles.surface)}>
                <Image
                  src={image}
                  alt={`Kalani Blooms Cabang ${name}, florist di Bali`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 448px"
                  className="aspect-4/3 w-full rounded-xl object-cover"
                />
                <h3 className={cn("text-center", styles.title)}>
                  Cabang <strong className="font-bold">{name}</strong>
                </h3>
                <address className={cn("flex flex-1 flex-col gap-1 text-center text-sm not-italic 2xl:text-base", styles.description)}>
                  <span>{address}</span>
                  {siteConfig.showBranchPhone && phone && (
                    <a href={`tel:${phone}`} className="font-semibold underline-offset-4 hover:underline">
                      {formatPhone(phone)}
                    </a>
                  )}
                </address>
                <Button href={getBranchMapsUrl(branch)} variant={styles.button} size="md" className="w-full">
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
