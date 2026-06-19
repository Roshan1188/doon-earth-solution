import type { Metadata } from 'next';
import Image from 'next/image';
import ServiceCategories from '@/components/ServiceCategories';
import Services from '@/components/Services';
import Waterproofing from '@/components/Waterproofing';
import CTA from '@/components/CTA';
import WhyUs from '@/components/WhyUs';

export const metadata: Metadata = {
  title: 'Termite Control & Waterproofing Services Dehradun | Doon Earth Solution',
  description:
    'Explore the full range of termite & waterproofing services by Doon Earth Solution — anti-termite piping, drill-fill-seal, pre-construction soil treatment (IS 6313), terrace & basement waterproofing, injection grouting. Free inspection.',
  keywords: [
    'termite control services Dehradun',
    'anti termite piping Dehradun',
    'drill fill seal termite',
    'soil treatment IS 6313',
    'waterproofing services Dehradun',
    'terrace waterproofing Dehradun',
    'basement waterproofing Dehradun',
    'injection grouting Dehradun',
    'free termite inspection',
  ],
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-forest-fade" />
        <div className="absolute inset-0 -z-10 bg-leaf-rays" />
        <div className="container-x pt-6 sm:pt-10 pb-6 sm:pb-8 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <span className="chip-leaf">What we do</span>
            <h1 className="mt-4 font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-ink-900 leading-tight">
              Termite treatments designed for <span className="gradient-text">long-term protection.</span>
            </h1>
            <p className="p-lead mt-5 max-w-2xl">
              Pick the right service for your property — or let us recommend one
              after a free, on-site inspection.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 blob-leaf opacity-20 blur-2xl animate-tilt" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-bone-200 shadow-forest h-[380px]">
              <Image
                src="/images/service-piping.jpg"
                alt="Anti-termite piping installation by Doon Earth Solutions"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 inline-flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-soft ring-1 ring-bone-200">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-100 text-brand-800 ring-1 ring-leaf-200">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-brand-700 font-semibold">IS 6313 Compliant</p>
                  <p className="text-sm font-display font-bold text-ink-900">Engineered protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceCategories />
      <Services />
      <Waterproofing />
      <WhyUs />
      <CTA />
    </>
  );
}
