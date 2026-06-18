import type { Metadata } from 'next';
import Image from 'next/image';
import QueryForm from '@/components/QueryForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Doon Earth Solution | Free Termite Inspection Dehradun',
  description:
    'Book a free termite inspection in Dehradun. Call +91 86790 22742, email info@doonearthsolution.in or WhatsApp us. Doon Earth Solution replies within minutes.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-forest-fade" />
      <div className="absolute inset-0 -z-10 bg-leaf-rays" />
      <div className="container-x pt-6 sm:pt-10 pb-8 sm:pb-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="chip-leaf">Contact</span>
            <h1 className="mt-4 font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-ink-900 leading-tight">
              Tell us about the issue. <span className="gradient-text">We’ll handle the rest.</span>
            </h1>
            <p className="p-lead mt-5">
              Fill the quick form — submitting opens WhatsApp with your details so
              our team can reply instantly.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 blob-leaf opacity-20 blur-2xl animate-tilt" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-bone-200 shadow-forest h-[320px]">
              <Image
                src="/images/team.jpg"
                alt="Doon Earth Solutions field team ready to help"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/65 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 inline-flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-soft ring-1 ring-bone-200">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-100 text-brand-800 ring-1 ring-leaf-200">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-brand-700 font-semibold">Reply within minutes</p>
                  <p className="text-sm font-display font-bold text-ink-900">Real humans, fast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6 sm:gap-8">
          <aside className="lg:col-span-1 space-y-4">
            <div className="card p-6">
              <h2 className="font-semibold text-ink-900">Direct</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Phone</p>
                  <a href={`tel:${site.phone}`} className="font-medium text-ink-900 hover:text-brand-700">{site.phone}</a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Office Number</p>
                  <a href={`tel:${site.tempPhone}`} className="font-medium text-ink-900 hover:text-brand-700">{site.tempPhone}</a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
                  <a href={`mailto:${site.email}`} className="font-medium text-ink-900 hover:text-brand-700 break-all">{site.email}</a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Address</p>
                  <p className="text-ink-900">{site.address}</p>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Hours</p>
                  <p className="text-ink-900">{site.hours}</p>
                </li>
              </ul>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full mt-5 bg-[#25D366] text-white hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3z"/></svg>
                WhatsApp Now
              </a>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-ink-900">What happens next?</h3>
              <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal list-inside">
                <li>We confirm your enquiry on WhatsApp.</li>
                <li>Schedule a free, on-site inspection.</li>
                <li>Share a written quote with warranty terms.</li>
                <li>Execute treatment with quality sign-off.</li>
              </ol>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <div className="card p-6 sm:p-8">
              <QueryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
