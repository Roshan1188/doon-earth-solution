'use client';

import { useEffect, useRef, useState } from 'react';

const items = [
  {
    name: 'Priya S.',
    role: 'Homeowner',
    avatar: '/images/avatar-1.jpg',
    text:
      'The team explained the problem clearly, finished the drill-fill treatment in a day and even cleaned up after. No termites in over two years.',
  },
  {
    name: 'Rohit M.',
    role: 'Restaurant Owner',
    avatar: '/images/avatar-2.jpg',
    text:
      'Quick response, fair price, and a written 5-year warranty. Exactly what we needed before our renovation.',
  },
  {
    name: 'Anjali K.',
    role: 'Architect',
    avatar: '/images/avatar-3.jpg',
    text:
      'I now recommend Doon Earth Solutions for every new project. Their pre-construction piping work is genuinely well-done.',
  },
  {
    name: 'Vikram T.',
    role: 'Society Secretary',
    avatar: '/images/avatar-4.jpg',
    text:
      'Treated 28 flats over a weekend. Professional, polite, and zero complaints from residents about smell or mess.',
  },
  {
    name: 'Neha R.',
    role: 'Hotel Manager',
    avatar: '/images/avatar-1.jpg',
    text:
      'They scheduled around guest hours so nobody was disturbed. Detailed quality checklist was a nice surprise.',
  },
  {
    name: 'Arjun P.',
    role: 'Contractor',
    avatar: '/images/avatar-2.jpg',
    text:
      'Pre-construction piping was done in a day, perfectly aligned with our pour schedule. Clean, professional crew.',
  },
];

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3);
      else if (w >= 640) setPerView(2);
      else setPerView(1);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);
  return perView;
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const perView = usePerView();
  const touchStartX = useRef<number | null>(null);

  const maxIndex = Math.max(0, items.length - perView);

  useEffect(() => {
    setActive((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i >= maxIndex ? 0 : i + 1));
    }, 3800);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  const go = (i: number) => {
    const clamped = ((i % items.length) + items.length) % items.length;
    setActive(Math.min(clamped, maxIndex));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) go(active - 1);
    else if (dx < -40) go(active + 1);
    touchStartX.current = null;
  };

  const slideWidth = 100 / perView;

  return (
    <section className="section bg-gradient-to-b from-bone-50 to-leaf-50/40 relative">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <span className="chip-leaf">Reviews</span>
            <h2 className="h-section mt-3 leaf-underline inline-block">
              Customers who got their <span className="gradient-text">peace back.</span>
            </h2>
            <p className="p-lead mt-4">
              A few words from people whose homes and businesses are now termite-free.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-bone-200 hover:bg-leaf-50 hover:ring-leaf-300 transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-white hover:bg-brand-800 transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="mt-6 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * slideWidth}%)` }}
          >
            {items.map((t, i) => (
              <figure
                key={t.name + i}
                className="shrink-0 px-2 sm:px-3"
                style={{ width: `${slideWidth}%` }}
              >
                <div className="card p-6 h-full flex flex-col hover:shadow-forest hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center gap-1 text-leaf-600" aria-label="5 star rating">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1z"/></svg>
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm text-ink-700 leading-relaxed flex-1">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-4 pt-4 border-t border-bone-200 flex items-center gap-3">
                    <span className="inline-block h-10 w-10 rounded-full overflow-hidden ring-2 ring-leaf-200 bg-bone-100">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <span>
                      <p className="text-sm font-bold text-ink-900">{t.name}</p>
                      <p className="text-xs text-ink-600">{t.role}</p>
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial set ${i + 1}`}
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
