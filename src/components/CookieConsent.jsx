'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const CookieConsent = ({ onConsent }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const consentData = {
      analytics: true,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setShowBanner(false);
    if (onConsent) onConsent(true);
  };

  const handleReject = () => {
    const consentData = {
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    setShowBanner(false);
    if (onConsent) onConsent(false);
  };

  if (!mounted || !showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-in slide-in-from-bottom-5 duration-300">
      <div className="mx-4 mb-4 rounded-lg border bg-background shadow-lg">
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium">Cookie Preferences</p>
            <p className="mt-1 text-xs text-muted-foreground">
              We use cookies to enhance your experience. Read our{' '}
              <Link href="/privacy" className="underline hover:text-accent">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="underline hover:text-accent">
                Terms of Service
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleReject}
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
