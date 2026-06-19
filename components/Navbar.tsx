'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/#process', label: 'Process' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-bone-200' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white ring-1 ring-bone-200 shadow-soft overflow-hidden">
            <img
              src="/logo.jpeg"
              alt="Doon Earth Solutions logo"
              className="h-full w-full object-contain p-1"
            />
          </span>
          <span className="font-display font-bold text-base sm:text-lg text-ink-900 tracking-tight">
            Doon <span className="text-brand-700">Earth</span> Solutions
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-3 py-2 rounded-full text-sm font-medium text-ink-800 hover:text-brand-800 hover:bg-brand-50 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <a href={`tel:${site.phone}`} className="btn-ghost">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
            Call
          </a>
          <Link href="/contact" className="btn-primary">
            Get Free Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden p-2 rounded-lg ring-1 ring-bone-200 bg-white"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-bone-200 bg-white">
          <ul className="container-x py-3 grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-ink-800 hover:bg-brand-50 hover:text-brand-800"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 grid grid-cols-2 gap-2">
              <a href={`tel:${site.phone}`} className="btn-ghost">Call Now</a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary">Free Quote</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
