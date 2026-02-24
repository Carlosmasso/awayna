"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Destination } from "@/lib/destinations-data";

interface DestinationOverviewProps {
  destination: Destination;
}

export function DestinationOverview({ destination }: DestinationOverviewProps) {
  const galleryImages = destination.galleryImages || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track which slide is visible via IntersectionObserver
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrentIndex(items.indexOf(entry.target as HTMLElement));
          }
        }
      },
      { root: container, threshold: 0.6 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [galleryImages.length]);

  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const scrollTo = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const item = container.children[index] as HTMLElement;
    item?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  const prev = () => { setIsUserInteracting(true); scrollTo(Math.max(0, currentIndex - 1)); };
  const next = () => { setIsUserInteracting(true); scrollTo(Math.min(galleryImages.length - 1, currentIndex + 1)); };

  // Auto-advance every 4s, pauses when user interacts
  useEffect(() => {
    if (isUserInteracting || galleryImages.length <= 1) return;
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      scrollTo(nextIndex);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex, isUserInteracting, galleryImages.length]);

  // Resume auto-play 6s after last user interaction
  useEffect(() => {
    if (!isUserInteracting) return;
    const resume = setTimeout(() => setIsUserInteracting(false), 6000);
    return () => clearTimeout(resume);
  }, [isUserInteracting]);

  if (galleryImages.length === 0) return null;

  return (
    <section className="py-16 bg-background">
      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left: Description (8 cols) */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Sobre este viaje
          </h2>
          {Array.isArray(destination.description)
            ? destination.description.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-lg text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))
            : (
                <p
                  className="text-lg text-muted-foreground leading-relaxed mb-8"
                  dangerouslySetInnerHTML={{ __html: destination.description }}
                />
              )}
        </div>

        {/* Right: Carousel Gallery (7 cols) */}
        <div className="lg:col-span-7">
          <div className="sticky top-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">
                Galería del viaje
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {galleryImages.length}
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={prev}
                    disabled={currentIndex === 0}
                    className="p-2 rounded-full bg-secondary/60 hover:bg-secondary disabled:opacity-30 transition-all"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    disabled={currentIndex === galleryImages.length - 1}
                    className="p-2 rounded-full bg-secondary/60 hover:bg-secondary disabled:opacity-30 transition-all"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Scroll container — iOS-style snap */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-3 rounded-2xl pb-1"
              onTouchStart={() => setIsUserInteracting(true)}
              onMouseDown={() => setIsUserInteracting(true)}
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="relative flex-none w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <Image
                    src={img}
                    alt={`${destination.name} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
                  />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-4 h-1.5 bg-foreground"
                      : "w-1.5 h-1.5 bg-muted-foreground/30"
                  }`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
