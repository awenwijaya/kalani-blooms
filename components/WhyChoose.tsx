import { Placeholder, SectionHeading } from "./ui";

type Feature = { title: string; tone: string; shift?: string };

const body = "Lorem ipsum dolor sit amet consectetur. Posuere dolor commodo.";

const left: Feature[] = [
  { title: "Lifetime Use", tone: "bg-[#FFE2D1] text-ink" },
  { title: "Eco-friendly", tone: "bg-maroon text-white", shift: "lg:-translate-x-28" },
  { title: "Best Quality", tone: "bg-[#FFEFD0] text-ink" },
];
const right: Feature[] = [
  { title: "Customization", tone: "bg-[#FFEFD0] text-ink" },
  { title: "Comical Free", tone: "bg-maroon text-white", shift: "lg:translate-x-28" },
  { title: "Wall hanging flower/ bouquet", tone: "bg-[#FFE2D1] text-ink" },
];

function FeatureCard({ title, tone, shift = "" }: Feature) {
  const light = tone.includes("text-ink");
  return (
    <div className={`w-full max-w-102.25 rounded-3xl px-10.5 py-6 ${tone} ${shift}`}>
      <h3 className="mb-3 text-2xl">{title}</h3>
      <p className={`font-body text-base ${light ? "text-mocha" : "text-white"}`}>{body}</p>
    </div>
  );
}

export function WhyChoose() {
  return (
    <section className="bg-linear-to-b from-white/35 to-[#FFDFCE]/15 py-24">
      <div className="mx-auto max-w-[1640px] px-6">
        <SectionHeading eyebrow="WHY US">
          Why choose <span className="text-coral">Our Flowers</span>
        </SectionHeading>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_562px_1fr]">
          <div className="flex flex-col items-center gap-12 lg:items-end lg:gap-46.25">
            {left.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
          <Placeholder w={562} h={846} alt="Rangkaian bunga" className="mx-auto h-auto w-full max-w-140.5" />
          <div className="flex flex-col items-center gap-12 lg:items-start lg:gap-46.25">
            {right.map((f) => <FeatureCard key={f.title} {...f} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Collections() {
  return (
    <section className="py-24">
      <SectionHeading eyebrow="Collection">
        Our Best <span className="text-coral">Collections</span>
      </SectionHeading>

      <div className="mt-[82px] flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Placeholder
            key={i}
            w={500}
            h={500}
            alt={`Koleksi ${i + 1}`}
            className="size-[280px] shrink-0 snap-center rounded border-4 border-white md:size-[500px]"
          />
        ))}
      </div>

      <div className="mt-9 flex justify-center gap-1" aria-hidden>
        {[false, true, false, false].map((active, i) => (
          <span key={i} className={`h-2.5 w-9 rounded-[7px] ${active ? "bg-maroon" : "bg-[#DEDEDE]"}`} />
        ))}
      </div>
    </section>
  );
}
