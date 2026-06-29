'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '../../libs/config';

const AnalyticsScript = () => {
  useEffect(() => {
    const checkConsentAndLoadGA = () => {
      const consent = localStorage.getItem('cookie-consent');
      if (consent) {
        const consentData = JSON.parse(consent);
        if (consentData.analytics === true) {
          loadGoogleAnalytics();
        }
      }
    };

    // Check on mount
    checkConsentAndLoadGA();

    // Listen for storage changes (cookie consent updates from other tabs)
    const handleStorageChange = () => {
      checkConsentAndLoadGA();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const loadGoogleAnalytics = () => {
    if (window.gtag) return; // Already loaded

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { send_page_view: true });
  };

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          const consent = localStorage.getItem('cookie-consent');
          if (consent) {
            const consentData = JSON.parse(consent);
            if (consentData.analytics === true) {
              loadGoogleAnalytics();
            }
          }
        }}
      />
    </>
  );
};

export default AnalyticsScript;
