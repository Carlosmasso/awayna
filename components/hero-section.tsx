"use client";


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/awaynacabecera.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-background leading-tight tracking-tight text-balance mb-6">
          Tú eliges el destino,
          <br />
          <span className="text-primary">nosotros el plan</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-background/90 max-w-2xl mx-auto mb-10 text-pretty">
          Sitios increíbles con gente que suma.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
