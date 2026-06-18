const points = [
  { t: 'Specialists, not generalists', d: 'We do termite control end-to-end. Biologists, structural engineers, and trained field teams.' },
  { t: 'Root-cause first', d: 'We don’t spray and pray. Every treatment targets the colony and entry points, not just symptoms.' },
  { t: 'Written warranty', d: 'You receive an actual warranty document with clear terms — up to 10 years on select services.' },
  { t: '23-point quality system', d: 'Every site passes a documented quality checklist before a job is closed.' },
  { t: 'Family-safe chemicals', d: 'We use approved low-odor, residue-light termiticides. Safe around kids and pets.' },
  { t: 'Transparent pricing', d: 'Honest, upfront quotes. No hidden charges. EMI options on larger projects.' },
];

export default function WhyUs() {
  return (
    <section className="section bg-bone-100 relative overflow-hidden">
      <div className="absolute inset-0 ribbon-stripes opacity-50 pointer-events-none" aria-hidden />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left side — image + copy */}
          <div className="lg:col-span-5">
            <span className="chip-leaf">Why Doon Earth Solutions</span>
            <h2 className="h-section mt-4 leaf-underline inline-block">Built different. Backed by science.</h2>
            <p className="p-lead mt-6">
              Termite control is a craft. Our teams are trained on real
              structures across India, follow IS 6313 standards, and document
              every step — so the work outlasts the season.
            </p>

            <div className="mt-8 relative">
              <div className="absolute -inset-4 blob-leaf opacity-25 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-bone-200 shadow-forest">
                <img
                  src="/images/why-us.jpg"
                  alt="Doon Earth Solutions team at work"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="text-white">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-leaf-300 font-semibold">Field Crew</p>
                    <p className="font-display font-bold">Trained &amp; Certified</p>
                  </div>
                  <span className="chip bg-white/95">100% Compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — points grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <div
                key={p.t}
                className={`card p-5 hover:shadow-forest hover:-translate-y-0.5 transition-all ${
                  i % 3 === 0 ? 'sm:translate-y-2' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink-900">{p.t}</h3>
                    <p className="text-sm text-ink-700 mt-1 leading-relaxed">{p.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
