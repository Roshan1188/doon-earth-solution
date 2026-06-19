'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

const posters = [
  {
    src: '/images/promotions/promo-waterproofing-1.jpg',
    alt: 'Ghar banate waqt waterproofing karwa lo — Doon Earth Solutions waterproofing offer poster',
  },
  {
    src: '/images/promotions/promo-waterproofing-2.jpg',
    alt: 'Leakage problem? We have the permanent solution — before/after waterproofing poster',
  },
  {
    src: '/images/promotions/promo-monsoon-special.jpg',
    alt: 'Monsoon Special — Doon Earth Solutions waterproofing offer poster',
  },
];

export default function Promotions() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-label="Latest offers" className="section relative">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip-leaf">Latest Offers</span>
          <h2 className="h-section mt-4 leaf-underline inline-block">
            Don&apos;t wait for the leak. <span className="gradient-text">Waterproof now.</span>
          </h2>
          <p className="p-lead mt-6">
            A quick look at our current waterproofing campaigns — built to keep your home
            leakage-free, this monsoon and every season after.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posters.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setOpen(i)}
              className="group card overflow-hidden hover:shadow-forest hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-ink-900">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi, I saw your waterproofing offer poster and want a free site inspection.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Chat on WhatsApp
          </a>
          <a href="/contact" className="btn-ghost">
            Book Free Site Inspection
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink-900/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={posters[open].src}
            alt={posters[open].alt}
            className="max-h-full max-w-full rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
