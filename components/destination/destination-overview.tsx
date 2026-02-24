"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import type { Destination } from "@/lib/destinations-data";

interface DestinationOverviewProps {
  destination: Destination;
}

export function DestinationOverview({ destination }: DestinationOverviewProps) {
  const galleryImages = destination.galleryImages || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered || galleryImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, galleryImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

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

          {/* Components with ratings */}
          {/* <div className="bg-secondary/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Componentes del viaje
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {destination.components.map((component, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{component.name}</span>
                    <StarRating rating={component.rating} />
                  </div>
                ))}
              </div>
            </div> */}
        </div>

        {/* Right: Carousel Gallery (7 cols) */}
        <div className="lg:col-span-7">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">
                Galería del viaje
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>
                  {currentIndex + 1} / {galleryImages.length}
                </span>
                <button
                  onClick={toggleAutoPlay}
                  className="p-2 hover:bg-secondary/50 rounded-full transition-colors"
                  aria-label={isAutoPlaying ? "Pausar" : "Reproducir"}
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Main Carousel */}
            <div
              className="relative rounded-2xl overflow-hidden bg-muted group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Image Container with Animation */}
              <div className="relative h-[450px]">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
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

                {/* Gradient Overlay for better visibility of controls */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
              </div>

              {/* Navigation Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/90 hover:bg-background rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/90 hover:bg-background rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Progress Bar */}
              {isAutoPlaying && !isHovered && galleryImages.length > 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20">
                  <div
                    className="h-full bg-primary transition-all duration-100"
                    style={{
                      width: "100%",
                      animation: "progress 4s linear infinite",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
