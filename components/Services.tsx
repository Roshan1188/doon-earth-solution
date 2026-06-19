'use client';

import { useState } from 'react';
import QuoteModal from './QuoteModal';

const services = [
  {
    id: 'piping',
    title: 'Anti-Termite Piping System',
    formService: 'Anti-Termite Piping (New Construction)',
    desc: 'For new construction. A network of porous pipes installed under the slab gives lifetime, refillable termite protection.',
    bullet: ['Lifetime structure', 'Easy refills', 'Up to 10-yr warranty'],
    image: '/images/service-piping.jpg',
  },
  {
    id: 'drill-fill',
    title: 'Drill, Fill & Seal Treatment',
    formService: 'Drill, Fill & Seal Treatment',
    desc: 'Targeted root-cause treatment for existing buildings. We drill at the wall-floor junction, inject termiticide and seal cleanly.',
    bullet: ['Root-cause kill', 'Multi-year warranty', 'Minimal mess'],
    image: '/images/service-drill-fill.jpg',
  },
  {
    id: 'soil',
    title: 'Pre-Construction Soil Treatment',
    formService: 'Pre-Construction Soil Treatment',
    desc: 'Time-tested protection per IS 6313 — the soil under and around your foundation is treated before pouring the slab.',
    bullet: ['IS 6313 compliant', 'Foundational defense', '5-yr+ warranty'],
    image: '/images/service-soil.jpg',
  },
  {
    id: 'spot',
    title: 'Spot Treatment & Spraying',
    formService: 'Spot Treatment / Spraying',
    desc: 'Quick, surgical action against localized infestations on furniture, frames, and fixtures — without disrupting your day.',
    bullet: ['Same-day service', 'Low-odor formula', 'Pet & child safe'],
    image: '/images/service-spot.jpg',
  },
  {
    id: 'refill',
    title: 'Porous Pipe Refill Service',
    formService: 'Pipe Refill Service',
    desc: 'Already have a piping system? We refill, recharge and inspect for full coverage — extending your protection by years.',
    bullet: ['Recharges existing pipes', 'Inspection included', 'Affordable plans'],
    image: '/images/service-refill.jpg',
  },
  {
    id: 'inspection',
    title: 'Inspection & Consultation',
    formService: 'Inspection & Consultation',
    desc: 'Trained biologists inspect every nook to identify species, severity and entry points — then build a plan that actually works.',
    bullet: ['On-site assessment', 'Species identification', 'Custom plan'],
    image: '/images/service-inspection.jpg',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="termite-control" className="section relative scroll-mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-leaf-300 to-transparent" />
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip-leaf">Anti-Termite Solutions</span>
          <h2 className="h-section mt-4 leaf-underline inline-block">Termite treatments engineered to actually solve the problem.</h2>
          <p className="p-lead mt-6">
            Every property is different. We pick the right method, install it
            correctly, and stand behind it — in writing.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              id={s.id}
              key={s.id}
              className="group card overflow-hidden hover:shadow-forest hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="chip-dark">
                    <span className="h-1.5 w-1.5 rounded-full bg-leaf-400" />
                    {s.bullet[0]}
                  </span>
                </div>
                <h3 className="absolute bottom-3 left-4 right-4 text-white text-lg font-display font-bold drop-shadow">
                  {s.title}
                </h3>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-ink-700 leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.bullet.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-ink-800">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-leaf-600" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setActiveService(s.formService)}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-brand-800 hover:text-brand-900 self-start group/btn"
                >
                  Get this service
                  <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <QuoteModal
        open={activeService !== null}
        onClose={() => setActiveService(null)}
        service={activeService ?? undefined}
      />
    </section>
  );
}
