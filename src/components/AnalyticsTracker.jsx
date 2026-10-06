import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, initCtaTracking, trackPageView } from '../lib/analytics';

// Sends a page_view to GA4 + PostHog on every route change.
// Without this an SPA only ever reports the first page a visitor lands on.
const AnalyticsTracker = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initAnalytics();
    return initCtaTracking();
  }, []);

  useEffect(() => {
    // Let the route's <Helmet> title land before we read document.title.
    const t = setTimeout(() => trackPageView(`${pathname}${search}`), 150);
    return () => clearTimeout(t);
  }, [pathname, search]);

  return null;
};

export default AnalyticsTracker;
