'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Props {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    // enter (0s) → hold (0.7s) — content fades/scales in
    // hold → exit (4s)         — start fade out
    // exit → complete (5s)     — unmount & reveal homepage
    const t1 = setTimeout(() => setPhase('hold'), 700);
    const t2 = setTimeout(() => setPhase('exit'), 4000);
    const t3 = setTimeout(onComplete, 5200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
      style={{
        background: 'linear-gradient(145deg, #1a2e0a 0%, #2e4d12 35%, #487a1a 70%, #3a6217 100%)',
        opacity: phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 1.1s ease-in-out' : undefined,
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: '70vw', height: '70vw', maxWidth: 600, maxHeight: 600,
            top: '-20%', right: '-15%',
            background: 'radial-gradient(circle, rgba(163,201,63,0.18) 0%, transparent 65%)',
            animation: 'pulse 5s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '50vw', height: '50vw', maxWidth: 400, maxHeight: 400,
            bottom: '-10%', left: '-10%',
            background: 'radial-gradient(circle, rgba(72,122,26,0.22) 0%, transparent 65%)',
            animation: 'pulse 7s ease-in-out infinite 1s',
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative flex flex-col items-center gap-8 px-8 text-center"
        style={{
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'translateY(18px) scale(0.94)' : 'translateY(0) scale(1)',
          transition: 'opacity 0.75s ease-out, transform 0.75s ease-out',
        }}
      >
        {/* Logo with animated glow ring */}
        <div className="relative">
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'rgba(163, 201, 63, 0.28)',
              filter: 'blur(22px)',
              transform: 'scale(1.7)',
              animation: 'pulse 2.8s ease-in-out infinite',
            }}
          />
          {/* Spinning ring */}
          <div
            className="absolute rounded-full border-2"
            style={{
              inset: -8,
              borderColor: 'rgba(163,201,63,0.5)',
              borderTopColor: '#a3c93f',
              animation: 'spin 3s linear infinite',
            }}
          />
          {/* Logo image */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-white/25 shadow-2xl">
            <Image
              src="/logo.jpeg"
              alt="Doon Earth Solution"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Brand name */}
        <div className="space-y-3">
          <h1 className="font-display font-bold text-white tracking-tight leading-none"
              style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}>
            Doon{' '}
            <span style={{ color: '#a3c93f' }}>Earth</span>
            <br />
            Solution
          </h1>
          <p className="text-xs sm:text-sm font-medium tracking-[0.22em] uppercase"
             style={{ color: 'rgba(163,201,63,0.75)' }}>
            Dehradun, Uttarakhand
          </p>
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-base font-medium italic"
           style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 320 }}>
          "Say Goodbye to Termites — For Good."
        </p>

        {/* Progress bar */}
        <div
          className="rounded-full overflow-hidden"
          style={{ width: 'clamp(180px, 50vw, 280px)', height: 3, background: 'rgba(255,255,255,0.15)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #84b020, #a3c93f, #c6dfa1)',
              width: phase === 'hold' || phase === 'exit' ? '100%' : '0%',
              transition: phase === 'hold' ? 'width 3.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            }}
          />
        </div>

        {/* Services pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {['Anti-Termite Treatment', 'Waterproofing', '10-Yr Warranty'].map((s) => (
            <span
              key={s}
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{
                background: 'rgba(163,201,63,0.15)',
                color: 'rgba(163,201,63,0.9)',
                border: '1px solid rgba(163,201,63,0.3)',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
