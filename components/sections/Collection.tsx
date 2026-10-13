import { Container } from "@/components/ui/Container";
import { Sparkle } from "@/components/ui/Decoration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { collection } from "@/data/collection";
import { CollectionCarousel } from "./CollectionCarousel";

export function Collection() {
  return (
    <section id="koleksi" className="relative isolate py-16 lg:py-20 2xl:py-28">
      <Sparkle size="md" className="bottom-4 left-1/3 hidden md:block" />

      <Container>
        <SectionHeading eyebrow="Koleksi" title="Ragam Kreasi Kalani Blooms" />

        <div className="mt-10 lg:mt-12 2xl:mt-16">
          <CollectionCarousel items={collection} />
        </div>
      </Container>
    </section>
  );
}
