'use client';

import { FormEvent, useState } from 'react';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const serviceGroups = [
  {
    label: 'Termite Control',
    items: [
      'Anti-Termite Piping (New Construction)',
      'Drill, Fill & Seal Treatment',
      'Pre-Construction Soil Treatment',
      'Spot Treatment / Spraying',
      'Pipe Refill Service',
      'Inspection & Consultation',
    ],
  },
  {
    label: 'Waterproofing',
    items: [
      'Waterproofing (General)',
      'Basement Waterproofing',
      'Terrace Waterproofing',
      'Garden / Planter Waterproofing',
      'Bituminous Membrane Waterproofing',
      'APP Membrane Waterproofing',
      'EPDM Membrane Waterproofing',
      'HDPE Membrane Waterproofing',
      'Injection Grouting',
    ],
  },
];

const services = serviceGroups.flatMap((g) => g.items).concat('Other');

export default function QueryForm({
  compact = false,
  defaultService,
}: {
  compact?: boolean;
  defaultService?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    if (!name || !phone) {
      setError('Name and phone are required.');
      return;
    }
    setSubmitting(true);
    const url = buildWhatsAppLink({
      name,
      phone,
      email: String(fd.get('email') || '').trim() || undefined,
      service: String(fd.get('service') || '').trim() || undefined,
      property: String(fd.get('property') || '').trim() || undefined,
      city: String(fd.get('city') || '').trim() || undefined,
      message: String(fd.get('message') || '').trim() || undefined,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    setTimeout(() => setSubmitting(false), 600);
  }

  const inputCls =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition';
  const labelCls = 'text-xs font-semibold text-slate-700';

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
      <div className="grid gap-1.5">
        <label htmlFor="name" className={labelCls}>Full name *</label>
        <input id="name" name="name" required className={inputCls} placeholder="Your name" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="phone" className={labelCls}>Phone *</label>
        <input id="phone" name="phone" required type="tel" inputMode="tel" pattern="[0-9+\-\s]{7,}" className={inputCls} placeholder="+91 9XXXXXXXXX" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="email" className={labelCls}>Email</label>
        <input id="email" name="email" type="email" className={inputCls} placeholder="you@example.com" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="service" className={labelCls}>Service</label>
        <select id="service" name="service" className={inputCls} defaultValue={defaultService ?? ''}>
          <option value="" disabled>Select a service</option>
          {serviceGroups.map((g) => (
            <optgroup key={g.label} label={g.label}>
              {g.items.map((s) => <option key={s} value={s}>{s}</option>)}
            </optgroup>
          ))}
          <option value="Other">Other</option>
          {defaultService && !services.includes(defaultService) && (
            <option value={defaultService}>{defaultService}</option>
          )}
        </select>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="property" className={labelCls}>Property type / size</label>
        <input id="property" name="property" className={inputCls} placeholder="e.g. 3BHK, 1500 sqft" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="city" className={labelCls}>Location</label>
        <input id="city" name="city" className={inputCls} placeholder="e.g. Dehradun, Sector 5" />
      </div>
      <div className={`grid gap-1.5 ${compact ? '' : 'sm:col-span-2'}`}>
        <label htmlFor="message" className={labelCls}>Tell us about the issue</label>
        <textarea id="message" name="message" rows={4} className={inputCls} placeholder="Where do you see termites? Any past treatments?" />
      </div>

      {error && (
        <p className={`text-sm text-red-600 ${compact ? '' : 'sm:col-span-2'}`}>{error}</p>
      )}

      <div className={`flex flex-col sm:flex-row sm:items-center gap-3 ${compact ? '' : 'sm:col-span-2'}`}>
        <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-70 whitespace-nowrap shrink-0 w-full sm:w-auto">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3z"/></svg>
          {submitting ? 'Opening WhatsApp…' : 'Send Enquiry on WhatsApp'}
        </button>
        <p className="text-xs text-slate-500 flex-1 leading-snug">
          Submitting opens WhatsApp with your details prefilled. We respond fast.
        </p>
      </div>
    </form>
  );
}
