'use client';

import { useState } from 'react';
import QuoteModal from './QuoteModal';

const waterproofing = [
  {
    id: 'wp-general',
    title: 'Waterproofing Services',
    formService: 'Waterproofing (General)',
    desc: 'End-to-end leakage solutions for homes, offices and industrial units — we diagnose the source first, then apply the right system for a lasting, dry result.',
    bullet: ['Guaranteed leak-proof', 'Free site survey', 'Up to 10-yr warranty'],
    image: '/images/wp-general.jpg',
  },
  {
    id: 'wp-basement',
    title: 'Basement Waterproofing',
    formService: 'Basement Waterproofing',
    desc: 'Stop rising damp and seepage in basements and retaining walls with crystalline and membrane systems built to handle constant water pressure.',
    bullet: ['Negative-side sealing', 'Anti-fungal finish', 'Pressure-tested'],
    image: '/images/wp-basement.jpg',
  },
  {
    id: 'wp-terrace',
    title: 'Terrace Waterproofing',
    formService: 'Terrace Waterproofing',
    desc: 'Protect your roof from monsoon leakage and heat with seamless coatings and membranes that flex with the slab and reflect the sun.',
    bullet: ['UV & heat resistant', 'Seamless coating', 'Slope correction'],
    image: '/images/wp-terrace.jpg',
  },
  {
    id: 'wp-garden',
    title: 'Garden & Planter Waterproofing',
    formService: 'Garden / Planter Waterproofing',
    desc: 'Keep terrace gardens and planters lush without letting water reach the structure below — root-resistant membranes with proper drainage.',
    bullet: ['Root-resistant', 'Drainage layer', 'Safe for plants'],
    image: '/images/wp-garden.jpg',
  },
  {
    id: 'wp-bituminous',
    title: 'Bituminous Membrane Waterproofing',
    formService: 'Bituminous Membrane Waterproofing',
    desc: 'Torch-applied bituminous membranes form a thick, self-healing barrier ideal for roofs, basements and water tanks under heavy load.',
    bullet: ['Self-healing layer', 'Torch-applied', 'High durability'],
    image: '/images/wp-bituminous.jpg',
  },
  {
    id: 'wp-app',
    title: 'APP Membrane Waterproofing',
    formService: 'APP Membrane Waterproofing',
    desc: 'Plastomeric APP membranes give superior UV stability and high-temperature performance — a proven choice for exposed terraces and roofs.',
    bullet: ['UV stable', 'High-temp grade', 'Long service life'],
    image: '/images/wp-app.jpg',
  },
  {
    id: 'wp-epdm',
    title: 'EPDM Membrane Waterproofing',
    formService: 'EPDM Membrane Waterproofing',
    desc: 'Single-ply EPDM rubber sheets offer outstanding elasticity and weather resistance, sealing large flat roofs with minimal joints.',
    bullet: ['Highly elastic', 'Few joints', 'Weatherproof'],
    image: '/images/wp-epdm.jpg',
  },
  {
    id: 'wp-hdpe',
    title: 'HDPE Membrane Waterproofing',
    formService: 'HDPE Membrane Waterproofing',
    desc: 'Pre-applied HDPE membranes bond fully to concrete, blocking water and gas ingress for foundations, basements and tunnels.',
    bullet: ['Fully bonded', 'Gas & water proof', 'Pre-applied'],
    image: '/images/wp-hdpe.jpg',
  },
  {
    id: 'wp-injection',
    title: 'Injection Grouting',
    formService: 'Injection Grouting',
    desc: 'Pressure injection of PU or epoxy grout seals active leaks and cracks from inside — a fast, low-disruption fix for live seepage.',
    bullet: ['Seals active leaks', 'Crack filling', 'Minimal breaking'],
    image: '/images/wp-injection.jpg',
  },
];

export default function Waterproofing() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="waterproofing" className="section relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-leaf-300 to-transparent" />
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip-leaf">Waterproofing Services</span>
          <h2 className="h-section mt-4 leaf-underline inline-block">Guaranteed leakage solutions for every surface.</h2>
          <p className="p-lead mt-6">
            From basements to terraces, we find the root of the leak and seal it
            with the right membrane or coating — backed by a written warranty.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {waterproofing.map((s) => (
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
