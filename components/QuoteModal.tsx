'use client';

import { useEffect } from 'react';
import QueryForm from './QueryForm';

type Props = {
  open: boolean;
  onClose: () => void;
  service?: string;
};

export default function QuoteModal({ open, onClose, service }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Get a free quote"
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in"
    >
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-ink-900/70 backdrop-blur-sm cursor-default"
      />

      {/* Panel */}
      <div className="relative w-full sm:max-w-2xl bg-bone-50 rounded-t-3xl sm:rounded-3xl shadow-forest ring-1 ring-bone-200 overflow-hidden max-h-[92vh] flex flex-col animate-fade-up">
        {/* Header */}
        <div className="relative bg-ink-900 text-white p-5 sm:p-6 overflow-hidden">
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-leaf-500/20 blur-3xl" aria-hidden />
          <div className="absolute inset-0 ribbon-stripes opacity-30" aria-hidden />
          <div className="relative flex items-start justify-between gap-3">
            <div>
              <span className="chip bg-leaf-500/20 text-leaf-200 ring-leaf-400/30">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf-300" />
                Free Quote
              </span>
              <h3 className="mt-2 font-display font-bold text-xl sm:text-2xl">
                Get a quick {service ? <span className="text-leaf-300">{service}</span> : 'service'} quote
              </h3>
              <p className="mt-1 text-sm text-bone-100/75">
                Fill the form — submitting opens WhatsApp with your details prefilled.
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          <QueryForm compact defaultService={service} />
        </div>
      </div>
    </div>
  );
}
