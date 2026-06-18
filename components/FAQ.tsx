'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

type Faq = { q: string; a: string; cat: 'General' | 'Treatment' | 'Pricing' | 'Safety' };

const faqs: Faq[] = [
  {
    cat: 'Treatment',
    q: 'How long does a typical termite treatment take?',
    a: 'For most homes, drill-fill-seal is completed in 4–8 hours. Pre-construction piping is installed during the foundation stage. We always share a clear time estimate before starting.',
  },
  {
    cat: 'Safety',
    q: 'Are the chemicals safe for my family and pets?',
    a: 'Yes. We use government-approved, low-odor termiticides applied by trained technicians. We share the exact product details and recommend a safe re-entry window where applicable.',
  },
  {
    cat: 'General',
    q: 'What warranty do you offer?',
    a: 'Most treatments come with a written multi-year warranty (3–10 years depending on the service). Anti-termite piping with regular refills can give effectively lifetime protection.',
  },
  {
    cat: 'Pricing',
    q: 'How much does termite treatment cost?',
    a: 'Pricing depends on property size, severity and method. After a free inspection, you get a transparent quote with no hidden charges. EMI options are available on larger projects.',
  },
  {
    cat: 'General',
    q: 'Do you serve commercial and institutional properties?',
    a: 'Yes — we work with hotels, hospitals, factories, schools, residential societies and corporate offices, with project-specific scheduling to minimise disruption.',
  },
  {
    cat: 'Treatment',
    q: 'Do I need to vacate during the treatment?',
    a: 'In most cases, no. Treatments are designed to be minimally invasive. We will tell you in advance if any specific area needs to be cleared.',
  },
  {
    cat: 'Treatment',
    q: 'Can termites come back after treatment?',
    a: 'With our written warranty and 23-point quality system, recurrence within the warranty period is treated free of cost. Refillable piping systems also let us recharge protection over time.',
  },
  {
    cat: 'Pricing',
    q: 'Do you offer EMI or instalments?',
    a: 'Yes — for larger projects (typically over a defined value), we offer EMI options through partner programs. Ask during the quote stage.',
  },
];

const categories: ('All' | Faq['cat'])[] = ['All', 'General', 'Treatment', 'Pricing', 'Safety'];

const catIcon = {
  General: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  ),
  Treatment: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11V7a3 3 0 0 1 6 0v4m-9 0h12l-1 9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2l-1-9z" />
  ),
  Pricing: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-3 1-3 2s1 2 3 2 3 1 3 2-1 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  ),
  Safety: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4zM9 12l2 2 4-4" />
  ),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [activeCat, setActiveCat] = useState<(typeof categories)[number]>('All');
  const [query, setQuery] = useState('');

  const filtered = faqs.filter((f) => {
    const matchCat = activeCat === 'All' || f.cat === activeCat;
    const matchQ =
      query.trim() === '' ||
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <section id="faq" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-leaf-rays pointer-events-none" aria-hidden />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT — header + sidebar (sticky on desktop) */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="chip-leaf">FAQ</span>
            <h2 className="h-section mt-3 leaf-underline inline-block">
              Questions, <span className="gradient-text">answered.</span>
            </h2>
            <p className="p-lead mt-5 max-w-md">
              Quick answers about our treatments, warranty and process. Still
              unsure? Tap below — we reply on WhatsApp in minutes.
            </p>

            {/* Search */}
            <div className="mt-6 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-600">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a7 7 0 1 1-7 7M21 21l-4.35-4.35" />
                </svg>
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a question..."
                className="w-full rounded-full bg-white ring-1 ring-bone-200 pl-10 pr-4 py-3 text-sm text-ink-900 placeholder:text-ink-600 focus:outline-none focus:ring-2 focus:ring-leaf-400"
              />
            </div>

            {/* Category pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = activeCat === c;
                return (
                  <button
                    key={c}
                    onClick={() => setActiveCat(c)}
                    className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full ring-1 transition ${
                      active
                        ? 'bg-brand-700 text-white ring-brand-700'
                        : 'bg-white text-ink-800 ring-bone-200 hover:bg-leaf-50 hover:ring-leaf-300'
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            {/* WhatsApp callout */}
            <div className="mt-6 card-dark p-5 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-leaf-500/20 blur-2xl" aria-hidden />
              <p className="text-[11px] uppercase tracking-[0.18em] text-leaf-300 font-semibold">Talk to us</p>
              <p className="mt-1 font-display font-bold text-white text-lg">Still have a question?</p>
              <p className="mt-2 text-sm text-bone-100/75 leading-relaxed">
                Message us on WhatsApp — we reply with specifics for your property in minutes.
              </p>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi, I have a question about termite treatment.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-leaf-500 hover:bg-leaf-400 text-ink-900 px-4 py-2 text-sm font-semibold transition"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </aside>

          {/* RIGHT — accordion list */}
          <div className="lg:col-span-7">
            {filtered.length === 0 ? (
              <div className="card p-8 text-center">
                <p className="text-ink-700">
                  Hmm, nothing matched <span className="font-semibold">"{query}"</span>.
                </p>
                <button
                  onClick={() => {
                    setQuery('');
                    setActiveCat('All');
                  }}
                  className="mt-3 text-sm font-semibold text-brand-800 hover:text-brand-900"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <ul className="grid gap-3">
                {filtered.map((f, i) => {
                  const isOpen = open === i;
                  return (
                    <li
                      key={f.q}
                      className={`card overflow-hidden transition-all ${
                        isOpen ? 'ring-leaf-300 shadow-forest' : ''
                      }`}
                    >
                      <button
                        className="w-full flex items-start gap-3 sm:gap-4 text-left px-4 sm:px-5 py-4"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                      >
                        <span
                          className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                            isOpen
                              ? 'bg-brand-700 text-white'
                              : 'bg-leaf-100 text-brand-800'
                          }`}
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            {catIcon[f.cat]}
                          </svg>
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-[10px] uppercase tracking-[0.18em] font-semibold text-brand-700">
                            {f.cat}
                          </span>
                          <span className="block mt-0.5 text-sm sm:text-base font-semibold text-ink-900 leading-snug">
                            {f.q}
                          </span>
                        </span>
                        <span
                          className={`ml-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bone-100 text-ink-800 transition-transform duration-300 ${
                            isOpen ? 'rotate-45 bg-leaf-500' : ''
                          }`}
                          aria-hidden
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-4 sm:px-5 pb-5 pl-[4.25rem] text-sm text-ink-700 leading-relaxed">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
