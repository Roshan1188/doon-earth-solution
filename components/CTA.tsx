import Link from 'next/link';
import { site } from '@/lib/site';

export default function CTA() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 text-white shadow-forest">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/images/cta-bg.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-brand-900/70" />
          </div>

          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-leaf-400/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-12">
            <div>
              <span className="chip bg-leaf-500/20 text-leaf-200 ring-leaf-400/30">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf-300" />
                Free Site Visit · Same-day Quote
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl tracking-tight">
                Ready to make your home <span className="text-leaf-300">termite-free?</span>
              </h2>
              <p className="mt-3 text-bone-100/80 max-w-xl">
                Free inspection. Honest quote. Written warranty. We make the
                whole thing painless — and the termites permanent history.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link href="/contact" className="btn bg-white text-brand-800 hover:bg-bone-50">
                Book Free Inspection
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-leaf-500 hover:bg-leaf-400 text-ink-900"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
