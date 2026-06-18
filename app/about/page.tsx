import type { Metadata } from 'next';
import Image from 'next/image';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'About Doon Earth Solution | Termite & Pest Control Experts Dehradun',
  description:
    'Doon Earth Solution is a specialist termite control & waterproofing company with 10+ years of experience. Combining biology, structural know-how and field discipline to deliver lasting protection across Dehradun and Uttarakhand.',
  alternates: { canonical: '/about' },
};

const values = [
  { t: 'Specialist focus', d: 'We do termite & pest control all day, every day. Depth over breadth.' },
  { t: 'Honest pricing', d: 'Transparent quotes, no upselling, EMI options on big projects.' },
  { t: 'Documented quality', d: 'A 23-point checklist ensures consistency across every site.' },
  { t: 'Customer-first', d: 'Free inspections, written warranties, and follow-ups that actually happen.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-forest-fade" />
        <div className="absolute inset-0 -z-10 bg-leaf-rays" />
        <div className="container-x pt-6 sm:pt-10 pb-6 sm:pb-8 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <span className="chip-leaf">Our Story</span>
            <h1 className="mt-4 font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-ink-900 leading-[1.05] max-w-3xl">
              We obsess over termites <span className="gradient-text">so you don’t have to.</span>
            </h1>
            <p className="p-lead mt-5 max-w-2xl">
              Doon Earth Solutions started with one question: why do most termite
              jobs fail within a year? The answer was simple — and so was the fix.
              Treat the cause, document the work, stand behind it. That’s what we
              do, every day.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 blob-leaf opacity-20 blur-2xl animate-tilt" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-bone-200 shadow-forest h-[420px]">
              <Image
                src="/images/about-hero.jpg"
                alt="Doon Earth Solutions field experts"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 inline-flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-soft ring-1 ring-bone-200">
                <Image src="/logo.jpeg" alt="" width={40} height={40} className="object-contain rounded-lg bg-white" />
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-brand-700 font-semibold">Est. 2012</p>
                  <p className="text-sm font-display font-bold text-ink-900">Doon Earth Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-4">
            {[['10+', 'Years'], ['50k+', 'Treatments'], ['23', 'Quality Checks'], ['10 yr', 'Max Warranty']].map(([k, v]) => (
              <div key={k} className="card p-6">
                <p className="text-3xl font-display font-bold text-brand-800">{k}</p>
                <p className="text-sm text-ink-700 mt-1">{v}</p>
              </div>
            ))}
            <div className="col-span-2 rounded-2xl overflow-hidden ring-1 ring-bone-200 shadow-soft relative h-56">
              <Image
                src="/images/team.jpg"
                alt="Doon Earth Solutions team"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="h-section leaf-underline inline-block">A team of biologists, engineers &amp; field experts.</h2>
            <p className="p-lead mt-6">
              Our crews are trained on real structures across India and supported
              by entomologists who keep our protocols in line with the latest
              research. Every project is signed off against IS 6313.
            </p>
            <ul className="mt-6 grid gap-3">
              {values.map((v) => (
                <li key={v.t} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-leaf-100 text-brand-800 ring-1 ring-leaf-200">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{v.t}</p>
                    <p className="text-sm text-ink-700">{v.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
