'use client';

import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    src: '/images/service-piping.jpg',
    title: 'Anti-Termite Pipe System',
    sub: 'Installed under-slab during foundation — refillable for life.',
    tag: 'Pre-Construction',
  },
  {
    src: '/images/service-drill-fill.jpg',
    title: 'Drill, Fill & Seal',
    sub: 'Precision drill at wall-floor junction, inject termiticide, seal clean.',
    tag: 'Existing Buildings',
  },
  {
    src: '/images/service-soil.jpg',
    title: 'Pre-Construction Soil Treatment',
    sub: 'Foundation pit treated per IS 6313 before slab pour.',
    tag: 'IS 6313',
  },
  {
    src: '/images/service-inspection.jpg',
    title: 'Inspection & Consultation',
    sub: 'Trained biologists assess every entry point, species and severity.',
    tag: 'Diagnosis',
  },
  {
    src: '/images/service-spot.jpg',
    title: 'Spot Treatment',
    sub: 'Quick, surgical action against localized infestations — same day.',
    tag: 'Targeted',
  },
  {
    src: '/images/why-us.jpg',
    title: 'Trained Field Teams',
    sub: 'Biologists & engineers — every site signed off on a 23-point checklist.',
    tag: 'Quality',
  },
  {
    src: '/images/service-refill.jpg',
    title: 'Pipe Refill & Recharge',
    sub: 'Already piped? We extend protection by years with regular refills.',
    tag: 'Ongoing Care',
  },
];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const go = (i: number) => setActive(((i % slides.length) + slides.length) % slides.length);
  const next = () => go(active + 1);
  const prev = () => go(active - 1);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    touchStartX.current = null;
  };

  return (
    <section
      aria-label="Project gallery"
      className="section relative overflow-hidden bg-bone-100"
    >
      <div className="absolute inset-0 ribbon-stripes opacity-40 pointer-events-none" aria-hidden />
      <div className="container-x relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <span className="chip-leaf">Our Work</span>
            <h2 className="h-section mt-3 leaf-underline inline-block">
              Real treatments. <span className="gradient-text">Real sites.</span>
            </h2>
            <p className="p-lead mt-4">
              A peek at the kind of work we do every week — from foundation-stage piping to
              quick spot fixes.
            </p>
          </div>
          {/* Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-bone-200 hover:bg-leaf-50 hover:ring-leaf-300 transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-white hover:bg-brand-800 transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="mt-6 relative rounded-3xl overflow-hidden ring-1 ring-bone-200 shadow-forest bg-ink-900"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={s.src + i} className="relative shrink-0 w-full bg-ink-900">
                <img
                  src={s.src}
                  alt={s.title}
                  className="w-full h-[260px] sm:h-[380px] lg:h-[460px] object-contain"
                  draggable={false}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-900 via-ink-900/70 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10 text-white">
                  <span className="chip bg-leaf-500/20 text-leaf-200 ring-leaf-400/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-leaf-300" />
                    {s.tag}
                  </span>
                  <h3 className="mt-3 font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm sm:text-base text-bone-100/85">
                    {s.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile arrows overlay */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="sm:hidden absolute top-1/2 -translate-y-1/2 left-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-900"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="sm:hidden absolute top-1/2 -translate-y-1/2 right-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-900"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots / progress */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((_, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  isActive ? 'w-10 bg-brand-700' : 'w-3 bg-bone-200 hover:bg-leaf-400'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
