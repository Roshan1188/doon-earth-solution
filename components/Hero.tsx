'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const slides = [
  {
    key: 'termite',
    chip: 'Anti Termite Pipe System · Sealing Solutions · 13+ Years',
    headline: (
      <>
        Protect what you{' '}
        <span className="relative inline-block">
          <span className="gradient-text">built.</span>
          <svg viewBox="0 0 220 14" className="absolute -bottom-2 left-0 w-full h-3 text-leaf-500" fill="none" aria-hidden>
            <path d="M2 8 C 60 2, 140 14, 218 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
        <br />
        From the ground <span className="gradient-text-dark">up.</span>
      </>
    ),
    lead: (
      <>
        Doon Earth Solutions installs <strong className="text-ink-900">refillable anti-termite pipe systems</strong>, drill-fill-seal protection and structural sealing — engineered for the building, documented in writing, backed for a decade.
      </>
    ),
    waText: 'Hi, I want to know more about anti-termite pipe systems & sealing solutions.',
    image: '/images/hero-side.jpg',
    alt: 'Anti-termite pipe system installation by Doon Earth Solutions',
  },
  {
    key: 'waterproofing',
    chip: 'Waterproofing · Leak-Proofing · 10-Yr Warranty',
    headline: (
      <>
        Stop every{' '}
        <span className="relative inline-block">
          <span className="gradient-text">leak.</span>
          <svg viewBox="0 0 220 14" className="absolute -bottom-2 left-0 w-full h-3 text-leaf-500" fill="none" aria-hidden>
            <path d="M2 8 C 60 2, 140 14, 218 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
        <br />
        Sealed <span className="gradient-text-dark">for life.</span>
      </>
    ),
    lead: (
      <>
        From basements to terraces, we deliver <strong className="text-ink-900">guaranteed waterproofing</strong> — membrane systems, injection grouting and seamless coatings. We find the source of the leak and seal it, backed in writing.
      </>
    ),
    waText: 'Hi, I want to know more about your waterproofing & leakage solutions.',
    image: '/images/wp-hero.jpg',
    alt: 'Waterproof coating being spray-applied on a rooftop by Doon Earth Solutions',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden">
      {/* Background layers — earth-toned */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-forest-fade" />
        <div className="absolute inset-0 bg-leaf-rays" />
        <div className="absolute inset-0 bg-grid-soft [background-size:34px_34px] [mask-image:radial-gradient(ellipse_at_top,white,transparent_65%)]" />
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-leaf-300/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-brand-700/15 blur-3xl" />
      </div>

      <div className="container-x pt-6 sm:pt-10 pb-7 sm:pb-10 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left — copy (swaps per slide) */}
        <div key={slide.key} className="lg:col-span-7 animate-fade-up">
          <span className="chip-leaf">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-700"></span>
            {slide.chip}
          </span>

          <h1 className="mt-4 font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-[58px] text-ink-900 leading-[1.05]">
            {slide.headline}
          </h1>

          <p className="mt-4 p-lead max-w-xl">{slide.lead}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Book Free Inspection
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(slide.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Stats strip — shared */}
          <ul className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
            {[
              ['10+ yrs', 'Experience'],
              ['50k+', 'Treatments'],
              ['4.9★', 'Customer Rating'],
              ['10 yr', 'Max Warranty'],
            ].map(([k, v]) => (
              <li
                key={k}
                className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-bone-200 p-4 hover:-translate-y-0.5 hover:shadow-soft transition"
              >
                <p className="text-xl sm:text-2xl font-display font-extrabold text-brand-800">{k}</p>
                <p className="text-[11px] sm:text-xs text-ink-700 mt-1 uppercase tracking-wide">{v}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Clean framed image (swaps per slide) */}
        <div className="lg:col-span-5 relative animate-fade-up">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Decorative blob behind */}
            <div className="absolute -inset-6 blob-leaf opacity-25 blur-2xl animate-tilt" aria-hidden />
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-brand-700/20 to-leaf-400/30 blur-xl" aria-hidden />

            {/* Main framed image */}
            <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-bone-200 shadow-forest bg-bone-50">
              {slides.map((s, i) => (
                <img
                  key={s.key}
                  src={s.image}
                  alt={s.alt}
                  className={`w-full h-[380px] sm:h-[460px] object-cover transition-opacity duration-700 ${
                    i === active ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
                  }`}
                />
              ))}

              {/* Slide dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.key}
                    type="button"
                    aria-label={`Show ${s.key} slide`}
                    aria-current={i === active}
                    onClick={() => setActive(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-7 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee — service keywords */}
      <div className="relative border-y border-bone-200 bg-white/60 backdrop-blur">
        <div className="container-x py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-ink-700">
          {[
            'Anti-Termite Piping',
            'Drill · Fill · Seal',
            'Soil Treatment (IS 6313)',
            'Terrace & Basement Waterproofing',
            'Membrane & Injection Grouting',
            'Structural Sealing',
          ].map((t, i) => (
            <span key={t} className="inline-flex items-center gap-2">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-leaf-500" aria-hidden />}
              <span className="font-medium">{t}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
