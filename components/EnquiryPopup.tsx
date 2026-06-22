'use client';

import { FormEvent, useState } from 'react';

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
      'Injection Grouting',
    ],
  },
];

interface Props {
  onClose: () => void;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function EnquiryPopup({ onClose }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const name  = String(fd.get('name')    ?? '').trim();
    const phone = String(fd.get('phone')   ?? '').trim();
    const email = String(fd.get('email')   ?? '').trim();
    const service = String(fd.get('service') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    if (!name || !phone) {
      setErrorMsg('Please enter your name and mobile number.');
      return;
    }

    setStatus('submitting');

    try {
      // ── Call Web3Forms directly from browser (most reliable) ──────────────
      const formData = new FormData();
      formData.append('access_key', 'ccb346b9-b6d9-4b32-ad75-9bea67a08945');
      formData.append('subject',    `🌿 New Enquiry: ${name} — ${service || 'General'}`);
      formData.append('from_name',  name);
      formData.append('name',       name);
      formData.append('phone',      phone);
      formData.append('email',      email || 'Not provided');
      formData.append('service',    service || 'Not specified');
      formData.append('message',    message || 'No message');
      formData.append('source',     'Website Popup');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json() as { success: boolean; message?: string };

      if (data.success) {
        // Also log to Vercel in background (fire & forget)
        fetch('/api/enquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone, email, service, message, source: 'popup' }),
        }).catch(() => { /* ignore */ });

        setStatus('success');
        setTimeout(onClose, 4500);
      } else {
        throw new Error(data.message ?? 'Submission failed');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please call us at +91 86790 22742.',
      );
    }
  }

  const inputCls =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200';

  return (
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6"
      style={{
        background: 'rgba(10, 18, 12, 0.78)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        animation: 'fadeIn 0.3s ease-out both',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        style={{ animation: 'popupSlideUp 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ───────────────────────────────────────── */}
        <div
          className="relative px-6 py-5 text-center"
          style={{
            background: 'linear-gradient(145deg, #2e4d12 0%, #487a1a 55%, #5f9a26 100%)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-8 h-8 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/15 transition-all duration-200 text-sm font-bold"
            aria-label="Close enquiry form"
          >
            ✕
          </button>

          {/* Logo */}
          <div className="w-12 h-12 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-white/25 shadow-lg">
            <img src="/logo.jpeg" alt="Doon Earth Solution" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-xl font-display font-bold text-white leading-tight">
            Get a Free Inspection
          </h2>
          <p className="mt-1 text-sm" style={{ color: 'rgba(163,201,63,0.85)' }}>
            We&apos;ll call you back within 30 minutes
          </p>

          {/* Decorative dots */}
          <div className="mt-3 flex justify-center gap-1.5">
            {['Termite Control', 'Waterproofing', 'Free Quote'].map((s) => (
              <span key={s} className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(163,201,63,0.2)', color: 'rgba(163,201,63,0.9)' }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── Body ─────────────────────────────────────────── */}
        <div className="px-6 py-5 max-h-[65vh] overflow-y-auto">

          {status === 'success' ? (
            /* Success state */
            <div className="py-6 text-center space-y-4">
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                style={{ background: '#f3f8ec', animation: 'popupSlideUp 0.4s ease-out both' }}
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#487a1a"
                     strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-ink-900">Thank you!</h3>
                <p className="mt-2 text-ink-700 text-sm leading-relaxed">
                  Our team will contact you shortly.
                </p>
                <p className="mt-1 text-xs text-slate-400">This window will close automatically.</p>
              </div>
            </div>

          ) : (
            /* Form */
            <form onSubmit={onSubmit} noValidate className="space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="ep-name" className="text-xs font-semibold text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ep-name"
                    name="name"
                    className={inputCls}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>

                {/* Mobile */}
                <div className="space-y-1.5">
                  <label htmlFor="ep-phone" className="text-xs font-semibold text-slate-700">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="ep-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    className={inputCls}
                    placeholder="+91 9XXXXXXXXX"
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="ep-email" className="text-xs font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  id="ep-email"
                  name="email"
                  type="email"
                  className={inputCls}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              {/* Service */}
              <div className="space-y-1.5">
                <label htmlFor="ep-service" className="text-xs font-semibold text-slate-700">
                  Service Required
                </label>
                <select id="ep-service" name="service" className={inputCls} defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  {serviceGroups.map((g) => (
                    <optgroup key={g.label} label={g.label}>
                      {g.items.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="Other">Other / Not sure</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="ep-message" className="text-xs font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  id="ep-message"
                  name="message"
                  rows={3}
                  className={`${inputCls} resize-none`}
                  placeholder="Where did you notice the issue? Property type, location…"
                />
              </div>

              {/* Error */}
              {errorMsg && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2.5">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-forest hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: 'linear-gradient(135deg, #3a6217 0%, #487a1a 50%, #5f9a26 100%)' }}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                    </svg>
                    Submitting…
                  </span>
                ) : (
                  'Submit Enquiry'
                )}
              </button>

              <p className="text-center text-xs text-slate-400 pb-1">
                🔒 Your information is safe with us. No spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
