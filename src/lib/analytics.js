import posthog from 'posthog-js';

const PH_TOKEN = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN;
const PH_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com';

// Don't pollute production stats with localhost traffic.
const isTrackable = () =>
  typeof window !== 'undefined' &&
  !['localhost', '127.0.0.1'].includes(window.location.hostname);

let phReady = false;

export const initAnalytics = () => {
  if (!isTrackable() || !PH_TOKEN || phReady) return;
  posthog.init(PH_TOKEN, {
    api_host: PH_HOST,
    capture_pageview: false, // we send these on route change instead
    autocapture: true, // records every click/input without per-element code
    capture_pageleave: true,
    persistence: 'localStorage+cookie',
  });
  phReady = true;
};

export const trackPageView = (path, title) => {
  if (!isTrackable()) return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: title || document.title,
    });
  }
  if (phReady) {
    posthog.capture('$pageview', { $current_url: window.location.href, path });
  }
};

// Use for things autocapture can't infer: form submits, CTA intent, downloads.
export const trackEvent = (name, props = {}) => {
  if (!isTrackable()) return;
  if (typeof window.gtag === 'function') window.gtag('event', name, props);
  if (phReady) posthog.capture(name, props);
};

export { posthog };

// ── CTA click delegation ────────────────────────────────────────────────
// Hire/contact CTAs are spread across ~20 page files. Rather than tagging each
// one, we listen once at the document level and classify by destination.
const classifyCta = (el) => {
  const href = el.getAttribute('href') || '';
  if (href.startsWith('https://wa.me/')) return 'whatsapp_click';
  if (/outsourcing/i.test(href)) return 'hire_cta_click';
  if (/contact/i.test(href)) return 'contact_cta_click';
  if (/careers|job-application/i.test(href)) return 'careers_cta_click';
  if (href.startsWith('mailto:')) return 'email_click';
  if (href.startsWith('tel:')) return 'phone_click';
  return null;
};

export const initCtaTracking = () => {
  if (!isTrackable()) return () => {};
  const onClick = (e) => {
    const el = e.target.closest('a[href]');
    if (!el) return;
    const event = classifyCta(el);
    if (!event) return;
    trackEvent(event, {
      link_text: (el.getAttribute('aria-label') || el.innerText || '').trim().slice(0, 80),
      link_url: el.getAttribute('href'),
      source_page: window.location.pathname,
    });
  };
  document.addEventListener('click', onClick, { capture: true });
  return () => document.removeEventListener('click', onClick, { capture: true });
};

// Form submissions — the real conversions. Called from each form on success.
export const trackFormSubmit = (formType, props = {}) =>
  trackEvent('form_submit', { form_type: formType, source_page: window.location.pathname, ...props });
