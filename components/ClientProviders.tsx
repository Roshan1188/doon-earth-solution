'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports to keep them out of the main bundle
const SplashScreen = dynamic(() => import('./SplashScreen'), { ssr: false });
const EnquiryPopup = dynamic(() => import('./EnquiryPopup'), { ssr: false });

const SPLASH_KEY = 'des_splash_shown';
const POPUP_KEY  = 'des_popup_shown';
const POPUP_DELAY_MS = 15_000; // 15 seconds after homepage is visible

export default function ClientProviders() {
  // null = not yet determined (waiting for mount)
  const [splashVisible, setSplashVisible] = useState<boolean | null>(null);
  const [popupVisible,  setPopupVisible]  = useState(false);

  const startPopupTimer = useCallback(() => {
    // Only start if visitor hasn't dismissed it this session
    if (sessionStorage.getItem(POPUP_KEY)) return;
    const t = setTimeout(() => setPopupVisible(true), POPUP_DELAY_MS);
    return t;
  }, []);

  useEffect(() => {
    const splashShown = sessionStorage.getItem(SPLASH_KEY);

    if (splashShown) {
      // Skip splash — already seen this session
      setSplashVisible(false);
      const t = startPopupTimer();
      return () => { if (t) clearTimeout(t); };
    } else {
      // First visit — show splash
      setSplashVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem(SPLASH_KEY, '1');
    setSplashVisible(false);
    // Start popup countdown after splash finishes
    const t = startPopupTimer();
    return () => { if (t) clearTimeout(t); };
  }, [startPopupTimer]);

  const handlePopupClose = useCallback(() => {
    sessionStorage.setItem(POPUP_KEY, '1');
    setPopupVisible(false);
  }, []);

  // Render nothing until we've checked sessionStorage (avoids SSR flash)
  if (splashVisible === null) return null;

  return (
    <>
      {splashVisible && <SplashScreen onComplete={handleSplashComplete} />}
      {popupVisible  && <EnquiryPopup onClose={handlePopupClose} />}
    </>
  );
}
