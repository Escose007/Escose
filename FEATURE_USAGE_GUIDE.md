# 🎯 Feature Usage Guide - New Components

Quick reference for using the newly implemented features.

---

## 🔔 Toast Notifications

### Import and Use
```jsx
import { useToast } from '../components/ToastContainer';

function MyComponent() {
  const { showSuccess, showError, showWarning, showInfo } = useToast();

  const handleAction = () => {
    // Show success
    showSuccess('Operation completed successfully!');
    
    // Show error
    showError('Something went wrong!');
    
    // Show warning
    showWarning('Please review your input');
    
    // Show info
    showInfo('New feature available!');
  };

  return <button onClick={handleAction}>Click Me</button>;
}
```

### Custom Duration
```jsx
import { useToast } from '../components/ToastContainer';

const { addToast } = useToast();
addToast('Custom message', 'success', 5000); // 5 seconds
```

---

## 📄 Page Meta Tags (SEO)

### Add to Any Page
```jsx
import { Helmet } from 'react-helmet-async';

function MyPage() {
  return (
    <>
      <Helmet>
        <title>Page Title | Escose Technologies</title>
        <meta name="description" content="Your page description here (150-160 chars)" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <link rel="canonical" href="https://escose.com/your-page" />
        
        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Page Title" />
        <meta property="og:description" content="Description" />
        <meta property="og:url" content="https://escose.com/your-page" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page Title" />
        <meta name="twitter:description" content="Description" />
      </Helmet>
      
      {/* Your page content */}
      <div>...</div>
    </>
  );
}
```

---

## 🛡️ Error Boundary

Already implemented globally in `main.jsx`. All pages are protected!

### Add to Specific Sections (Optional)
```jsx
import ErrorBoundary from '../components/ErrorBoundary';

function MyComponent() {
  return (
    <ErrorBoundary>
      <SectionThatMightError />
    </ErrorBoundary>
  );
}
```

---

## 📜 Scroll to Top Button

Already implemented globally! Automatically shows after 300px scroll.

### Customize (if needed)
```jsx
// In ScrollToTop.jsx, change:
if (window.scrollY > 300) // Change 300 to your preferred value
```

---

## 🚫 404 Page

Automatically works! Any undefined route shows the 404 page.

### Test It
```
http://localhost:5173/non-existent-page
```

---

## ✅ Form Validation Example

### Contact Form Pattern
```jsx
import { useToast } from '../components/ToastContainer';

function MyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showError } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    const formData = new FormData(e.target);
    const email = formData.get('email');
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('Please enter a valid email');
      return;
    }
    
    setIsSubmitting(true);
    
    // Your submission logic
    try {
      // ... submit
      showSuccess('Form submitted successfully!');
    } catch (error) {
      showError('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" required />
      <button disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}
```

---

## 🎨 Accessible Images

### Best Practice
```jsx
<img
  src={imageUrl}
  alt="Descriptive alt text for SEO and screen readers"
  loading="lazy"
  className="..."
/>
```

### Example
```jsx
<img
  src="/logo.png"
  alt="Escose Technologies - IT Staffing and Software Development Company"
  loading="lazy"
  className="w-32 h-32"
/>
```

---

## ⌨️ Keyboard Navigation

Already implemented in Navbar:
- **ESC key**: Closes mobile menu
- **Tab key**: Navigate through links
- **Enter**: Activate buttons/links

---

## 🔍 Google Analytics Events (Optional)

### Track Custom Events
```jsx
// Add to your component
const trackEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Usage examples
trackEvent('button_click', {
  button_name: 'contact_cta',
  page_location: window.location.pathname
});

trackEvent('form_submit', {
  form_type: 'contact',
  success: true
});

trackEvent('service_view', {
  service_name: 'IT Staffing'
});
```

---

## 🎯 ARIA Labels for Accessibility

### Buttons
```jsx
<button aria-label="Close menu">
  <img src={closeIcon} alt="" />
</button>
```

### Interactive Elements
```jsx
<button
  aria-label="Open navigation menu"
  aria-expanded={isOpen}
  onClick={handleToggle}
>
  Menu
</button>
```

### Sections
```jsx
<section aria-labelledby="services-heading">
  <h2 id="services-heading">Our Services</h2>
  {/* content */}
</section>
```

---

## 🎨 Color Variables (Accessibility)

Use these for consistent, accessible colors:

```css
/* In your CSS */
.text-primary { color: var(--text-primary); } /* #f1f5f9 */
.text-secondary { color: var(--text-secondary); } /* #cbd5e1 */
.text-tertiary { color: var(--text-tertiary); } /* #94a3b8 */
.text-muted { color: var(--text-muted); } /* #64748b */
```

```jsx
/* In Tailwind classes - already optimized */
<p className="text-gray-100">High contrast</p>
<p className="text-gray-300">Medium contrast</p>
<p className="text-gray-400">Lower contrast</p>
```

---

## 📱 Testing Checklist

### Before Deployment
- [ ] Test all forms with invalid data
- [ ] Try to navigate with keyboard only
- [ ] Visit non-existent URL to test 404 page
- [ ] Check mobile menu (try ESC key)
- [ ] Submit contact form successfully
- [ ] Submit contact form with errors
- [ ] Scroll down and test scroll-to-top button
- [ ] Check all images have alt text
- [ ] Verify meta tags in browser inspector (View Source)

### Accessibility Testing
```bash
# Install axe DevTools browser extension
# Run accessibility scan on each page
```

### Performance Testing
```bash
# Test locally
npm run build
npm run preview

# Visit http://localhost:4173
# Open DevTools > Lighthouse
# Run audit
```

---

## 🐛 Troubleshooting

### Toast Not Showing
```jsx
// Make sure you're inside ToastProvider
// Check main.jsx - ToastProvider should wrap your app
```

### 404 Page Not Working
```jsx
// Verify route order in main.jsx
// Catch-all route (*) must be LAST
<Route path="*" element={<NotFound />} />
```

### Helmet Not Working
```jsx
// Ensure HelmetProvider wraps your app in main.jsx
<HelmetProvider>
  {/* Your app */}
</HelmetProvider>
```

### Form Validation Not Working
```jsx
// Make sure useToast is called inside a component
// Not at the top level of a file
```

---

## 💡 Pro Tips

1. **Always use toast notifications** instead of `alert()` for better UX
2. **Add Helmet to all pages** for better SEO
3. **Use semantic HTML** (`<nav>`, `<main>`, `<section>`, etc.)
4. **Test keyboard navigation** on every new feature
5. **Check color contrast** using browser DevTools
6. **Validate forms client-side** before submitting
7. **Add loading states** to all async operations
8. **Use descriptive alt text** for images (think SEO)
9. **Test on mobile devices** not just responsive mode
10. **Monitor GA4 events** to understand user behavior

---

## 📚 Resources

### Learn More
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Google Analytics Events](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Schema.org](https://schema.org/)

### Testing Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Schema Markup Validator](https://validator.schema.org/)

---

**Happy Coding! 🚀**

