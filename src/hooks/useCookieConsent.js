import { useEffect, useState } from 'react';

const COOKIE_CONSENT_KEY = 'cookie-consent';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      setConsent(JSON.parse(stored));
    }
  }, []);

  const acceptCookies = () => {
    const consentData = {
      analytics: true,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setConsent(consentData);
  };

  const rejectCookies = () => {
    const consentData = {
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setConsent(consentData);
  };

  const hasConsent = consent?.analytics === true;
  const hasRejected = consent?.analytics === false;
  const showBanner = mounted && consent === null;

  return {
    hasConsent,
    hasRejected,
    showBanner,
    acceptCookies,
    rejectCookies,
    consent,
  };
};
