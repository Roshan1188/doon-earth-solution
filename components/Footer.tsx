import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-8 sm:mt-12 bg-ink-900 text-bone-100/80 relative overflow-hidden">
      <div className="absolute inset-0 ribbon-stripes opacity-40 pointer-events-none" aria-hidden />
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-leaf-500/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="container-x py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 relative">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1 ring-1 ring-white/10">
              <img
                src="/logo.jpeg"
                alt="Doon Earth Solutions"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display font-bold text-white text-lg">
              {site.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-bone-200/70">
            Termite-free homes & workplaces, backed by science, delivered with care.
            Multi-year warranty on every treatment.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold">Anti-Termite</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services#piping" className="hover:text-leaf-300">Anti-Termite Piping</Link></li>
            <li><Link href="/services#drill-fill" className="hover:text-leaf-300">Drill, Fill & Seal</Link></li>
            <li><Link href="/services#soil" className="hover:text-leaf-300">Soil Treatment</Link></li>
            <li><Link href="/services#spot" className="hover:text-leaf-300">Spot Treatment</Link></li>
            <li><Link href="/services#refill" className="hover:text-leaf-300">Pipe Refill Service</Link></li>
            <li><Link href="/services#inspection" className="hover:text-leaf-300">Inspection & Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Waterproofing</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services#wp-general" className="hover:text-leaf-300">Waterproofing (General)</Link></li>
            <li><Link href="/services#wp-basement" className="hover:text-leaf-300">Basement Waterproofing</Link></li>
            <li><Link href="/services#wp-terrace" className="hover:text-leaf-300">Terrace Waterproofing</Link></li>
            <li><Link href="/services#wp-garden" className="hover:text-leaf-300">Garden & Planter</Link></li>
            <li><Link href="/services#wp-injection" className="hover:text-leaf-300">Injection Grouting</Link></li>
            <li><Link href="/services#wp-hdpe" className="hover:text-leaf-300">Membrane Systems</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-leaf-300">About Us</Link></li>
            <li><Link href="/#process" className="hover:text-leaf-300">How We Work</Link></li>
            <li><Link href="/#faq" className="hover:text-leaf-300">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-leaf-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Reach Us</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-leaf-300">{site.phone}</a>
            </li>
            <li>
              <a href={`tel:${site.tempPhone}`} className="hover:text-leaf-300">{site.tempPhone}</a>
              <span className="text-bone-200/60"> (Office)</span>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-leaf-300">{site.email}</a>
            </li>
            <li className="text-bone-200/70">{site.address}</li>
            <li className="text-bone-200/70">{site.hours}</li>
          </ul>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-leaf-500 hover:bg-leaf-400 text-ink-900 px-4 py-2 text-sm font-semibold transition"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3zM12 21.4h-.1c-1.7 0-3.4-.5-4.9-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.4 9.4 0 1 1 17.6-4.7c0 5.2-4.2 9.4-9.2 9.4z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 relative">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-bone-200/60">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Built with care · Termite control done right.</p>
        </div>
      </div>
    </footer>
  );
}
