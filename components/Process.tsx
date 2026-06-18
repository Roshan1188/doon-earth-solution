const steps = [
  { n: '01', t: 'Free Inspection', d: 'A trained biologist visits, identifies the species, and maps every entry point.', img: '/images/process-1.jpg' },
  { n: '02', t: 'Custom Plan', d: 'You get a clear written quote with the exact method, chemicals, schedule and warranty.', img: '/images/process-2.jpg' },
  { n: '03', t: 'Treatment', d: 'Our field team executes the plan precisely — minimal disruption, maximum coverage.', img: '/images/process-3.jpg' },
  { n: '04', t: 'Quality Check', d: 'A 23-point checklist is signed off. You receive the warranty document and care notes.', img: '/images/process-4.jpg' },
  { n: '05', t: 'Aftercare', d: 'Free follow-ups and reminders so your protection stays active for years.', img: '/images/process-5.jpg' },
];

export default function Process() {
  return (
    <section id="process" className="section relative">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip-leaf">How We Work</span>
          <h2 className="h-section mt-4 leaf-underline inline-block">A clean, predictable 5-step process.</h2>
          <p className="p-lead mt-6">
            From first call to final warranty, we keep things simple, documented,
            and on-time.
          </p>
        </div>

        <ol className="mt-6 sm:mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-leaf-400 to-transparent" aria-hidden />

          {steps.map((s) => (
            <li key={s.n} className="relative card overflow-hidden hover:shadow-forest hover:-translate-y-1 transition-all">
              <div className="relative h-32 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.t}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
                <span className="absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-leaf-500 text-ink-900 font-display font-extrabold text-sm shadow-forest">
                  {s.n}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-ink-900">{s.t}</h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
