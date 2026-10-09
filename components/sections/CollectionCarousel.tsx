"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { CollectionItem } from "@/types";

type CollectionCarouselProps = {
  items: CollectionItem[];
};

export function CollectionCarousel({ items }: CollectionCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageCount, setPageCount] = useState(items.length);

  const getStep = useCallback(() => {
    const [first, second] = Array.from(trackRef.current?.children ?? []) as HTMLElement[];
    return first && second ? second.offsetLeft - first.offsetLeft : (first?.offsetWidth ?? 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updatePageCount = () => {
      const scrollableDistance = track.scrollWidth - track.clientWidth;
      setPageCount(Math.max(1, Math.round(scrollableDistance / getStep()) + 1));
    };

    updatePageCount();
    const observer = new ResizeObserver(updatePageCount);
    observer.observe(track);
    return () => observer.disconnect();
  }, [getStep]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / getStep());
    setActiveIndex(Math.min(Math.max(index, 0), pageCount - 1));
  };

  const scrollToIndex = (index: number) => {
    trackRef.current?.scrollTo({ left: index * getStep(), behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-9">
      <ul
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar -mx-3 flex snap-x snap-mandatory overflow-x-auto"
      >
        {items.map(({ id, image, alt }) => (
          <li key={id} className="w-4/5 shrink-0 snap-start px-3 sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <Image
              src={image}
              alt={alt}
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 80vw"
              className="aspect-square w-full rounded-sm border-4 border-white bg-white object-cover"
            />
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
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
