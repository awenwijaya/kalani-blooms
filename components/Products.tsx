import { Placeholder, SectionHeading } from "./ui";

const products = [
  { name: "Combo Bouquet 01", price: "$40.00", rating: "5.0", w: 443, h: 443, max: "max-w-[443px]" },
  { name: "Combo Bouquet 02", price: "$40.00", rating: "5.0", w: 614, h: 572, max: "max-w-[614px]" },
  { name: "Combo Bouquet 03", price: "$40.00", rating: "5.0", w: 443, h: 443, max: "max-w-[443px]" },
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-7.5 fill-[#FFBB0D]">
      <path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.1 5.5 22l1.7-7.4-5.7-5 7.5-.7z" />
    </svg>
  );
}

export function TopProducts() {
  return (
    <section className="mx-auto flex w-full max-w-[1640px] flex-col items-center gap-18 px-6 py-24">
      <SectionHeading eyebrow="PRODUCTS">
        <span className="text-maroon">This month’s top selling</span>{" "}
        <span className="text-mocha">Product</span>
      </SectionHeading>

      <div className="flex w-full flex-col items-center gap-16 lg:flex-row lg:items-end lg:justify-between">
        {products.map((p) => (
          <article key={p.name} className={`flex w-full flex-col items-center gap-6 ${p.max}`}>
            <div className="relative w-full">
              <span className="absolute left-[18%] top-[46%] aspect-square w-[54%] rounded-l-full rounded-tr-full bg-[#FFCFCF]/55" />
              <Placeholder w={p.w} h={p.h} alt={p.name} className="relative h-auto w-full" />
            </div>
            <div className="flex w-full flex-col items-center gap-3">
              <h3 className="text-3xl tracking-[0.02em] text-ink md:text-4xl">{p.name}</h3>
              <div className="flex w-full justify-between text-2xl text-ink">
                <span>{p.price}</span>
                <span className="flex items-center gap-1.5">
                  <Star />
                  {p.rating}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
