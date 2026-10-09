"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { CollectionItem } from "@/types";

type CollectionCarouselProps = {
  items: CollectionItem[];
};

export function CollectionCarousel({ items }: CollectionCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Distance between two slides (slide width + gap), measured from the DOM so it stays responsive
  const getStep = () => {
    const [first, second] = Array.from(trackRef.current?.children ?? []) as HTMLElement[];
    return first && second ? second.offsetLeft - first.offsetLeft : (first?.offsetWidth ?? 1);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / getStep());
    setActiveIndex(Math.min(Math.max(index, 0), items.length - 1));
  };

  const scrollToIndex = (index: number) => {
    trackRef.current?.scrollTo({ left: index * getStep(), behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-9">
      <ul
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-5 px-5 lg:scroll-px-0 lg:px-0"
      >
        {items.map(({ id, image, alt }) => (
          <li key={id} className="w-4/5 shrink-0 snap-start sm:w-2/5 lg:w-1/4">
            <Image
              src={image}
              alt={alt}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 80vw"
              className="aspect-square w-full rounded-sm border-4 border-white bg-white object-cover"
            />
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-1">
        {items.map(({ id }, index) => (
          <button
            key={id}
            type="button"
            aria-label={`Lihat koleksi ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "h-2.5 w-6 rounded-full transition-colors lg:w-9",
              index === activeIndex ? "bg-primary" : "bg-neutral-200 hover:bg-neutral-300",
            )}
          />
        ))}
      </div>
    </div>
  );
}
