import { ellipseOutlined } from "@/assets";
import { Container } from "@/components/ui/Container";
import { Decoration, Sparkle } from "@/components/ui/Decoration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { collection } from "@/data/collection";
import { CollectionCarousel } from "./CollectionCarousel";

export function Collection() {
  return (
    <section id="koleksi" className="relative isolate overflow-hidden py-16 lg:py-28">
      <Decoration src={ellipseOutlined} className="-left-24 top-1/4 w-120 -scale-x-100" />
      <Sparkle className="bottom-6 left-1/3" />

      <Container>
        <SectionHeading eyebrow="Koleksi" title="Ragam Kreasi Kalani Blooms" />
      </Container>

      <div className="mt-10 lg:mt-16">
        <CollectionCarousel items={collection} />
      </div>
    </section>
  );
}
