'use client';

const categories = [
  {
    id: 'termite',
    eyebrow: 'Core Service · 01',
    title: 'Anti-Termite Solutions',
    desc: 'Engineered termite protection for new builds and existing properties — piping, drill-fill-seal, soil treatment and more, every job backed by a written warranty.',
    bullets: ['Anti-Termite Piping', 'Drill, Fill & Seal', 'Soil Treatment (IS 6313)', 'Spot Treatment', 'Pipe Refill', 'Inspection'],
    image: '/images/service-piping.jpg',
    anchor: '#termite-control',
    cta: 'View termite services',
  },
  {
    id: 'waterproofing',
    eyebrow: 'Core Service · 02',
    title: 'Waterproofing Solutions',
    desc: 'Guaranteed leakage solutions for terraces, basements and every surface in between — we find the source of the leak and seal it for good.',
    bullets: ['Terrace Waterproofing', 'Basement Waterproofing', 'Membrane Systems', 'Injection Grouting', 'Garden & Planter', 'General Leakage Fix'],
    image: '/images/wp-general.jpg',
    anchor: '#waterproofing',
    cta: 'View waterproofing services',
  },
];

export default function ServiceCategories() {
  const scrollTo = (anchor: string) => {
    document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="section relative">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip-leaf">What We Do</span>
          <h2 className="h-section mt-4 leaf-underline inline-block">Two specialties. Done properly.</h2>
          <p className="p-lead mt-6">
            We don&apos;t spread thin. Doon Earth Solutions focuses on two things —
            termite protection and waterproofing — and goes deep on both.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid lg:grid-cols-2 gap-6">
          {categories.map((c) => (
            <article
              key={c.id}
              className="group card overflow-hidden hover:shadow-forest transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="chip-dark">{c.eyebrow}</span>
                </div>
                <h3 className="absolute bottom-4 left-5 right-5 text-white text-2xl sm:text-3xl font-display font-extrabold drop-shadow">
                  {c.title}
                </h3>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <p className="text-sm sm:text-base text-ink-700 leading-relaxed">{c.desc}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-xs font-medium text-brand-800 bg-leaf-50 ring-1 ring-leaf-200 rounded-full px-3 py-1.5"
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => scrollTo(c.anchor)}
                  className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-800 rounded-full px-5 py-3 transition-all self-start group/btn"
                >
                  {c.cta}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover/btn:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6"/></svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
