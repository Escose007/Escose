# 🚀 Escose Technologies Website

Leading IT staffing and software development company. This is the official website for Escose Technologies, built with React, Vite, and Tailwind CSS.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

- ⚡ Fast and modern React application with Vite
- 🎨 Beautiful UI with Tailwind CSS
- 📱 Fully responsive design (mobile-first)
- 🔍 SEO optimized with meta tags and sitemap
- ♿ WCAG AA accessibility compliant
- 🌐 Multiple pages: Home, About, Services, Careers, Contact, Blogs
- 💬 WhatsApp integration for instant contact
- 📊 Client testimonials and trust indicators
- 📧 Email integration via EmailJS
- 📈 Google Analytics 4 ready
- 🎯 IT Staffing & Software Development focus

## 🛠️ Tech Stack

- **Frontend:** React 18.2.0
- **Build Tool:** Vite 3.0.0
- **Styling:** Tailwind CSS 3.1.6
- **Routing:** React Router DOM 6.10.0
- **SEO:** React Helmet Async 2.0.5
- **Email:** EmailJS Browser 3.11.0
- **Icons:** Material Icons

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/escose.git
cd escose
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables (see [Environment Variables](#environment-variables))

4. Start the development server:
```bash
npm start
# or
yarn start
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```bash
# Copy the example file
cp .env.example .env
```

Then edit `.env` with your actual values:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
### How to Get EmailJS Credentials:
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key

### How to Get Google Analytics ID:
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a GA4 property
3. Copy your Measurement ID (starts with G-)

## 📜 Available Scripts

```bash
# Development
npm start          # Start dev server at localhost:5173
npm run build      # Build for production
npm run preview    # Preview production build locally

# Deployment
npm run predeploy  # Runs before deployment
npm run deploy     # Deploy to GitHub Pages
```

## 📁 Project Structure

```
escose/
├── public/                 # Static files
│   ├── sitemap.xml        # SEO sitemap
│   ├── robots.txt         # Search engine rules
│   └── favicon files      # App icons
├── src/
│   ├── assets/            # Images, icons, SVGs
│   ├── components/        # React components
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ClientLogos.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ...
│   ├── page/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Careers.jsx
│   │   └── ...
│   ├── pureComponents/    # Reusable UI components
│   ├── constants/         # Static data
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── .env.example           # Environment variables template
├── package.json
├── vite.config.js
├── tailwind.config.cjs
└── README.md
```

## 🌐 Deployment

### Deploy to Production

1. Update environment variables in your hosting platform
2. Build the project:
```bash
npm run build
```

3. Deploy the `dist/` folder to your hosting service:
   - **Vercel:** Connect GitHub repo
   - **Netlify:** Drop `dist/` folder
   - **GitHub Pages:** Run `npm run deploy`

### Important: Before Deployment Checklist
- [ ] Replace GA4 placeholder ID in `index.html`
- [ ] Set up `.env` with actual credentials
- [ ] Replace placeholder testimonials in `Testimonials.jsx`
- [ ] Replace placeholder client logos in `ClientLogos.jsx`
- [ ] Test all forms work correctly
- [ ] Verify WhatsApp button links correctly
- [ ] Check all meta tags are present
- [ ] Test on mobile devices

## 📊 SEO & Analytics

### Sitemap
- Located at: `/public/sitemap.xml`
- Submit to Google Search Console after deployment

### Google Analytics
- Replace placeholder `G-XXXXXXXXXX` in `index.html`
- Monitor: Traffic, conversions, user behavior

### Meta Tags
All pages include:
- SEO-optimized titles and descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs

## 🎨 Customization

### Colors
Edit `tailwind.config.cjs`:
```javascript
colors: {
  brand: {
    primary: { ... },
    secondary: { ... },
    accent: { ... }
  }
}
```

### Content
- **Testimonials:** `src/components/Testimonials.jsx`
- **Client Logos:** `src/components/ClientLogos.jsx`
- **Services:** `src/constants/index.js`
- **Blog Posts:** `src/constants/blogs.js`

## 🐛 Troubleshooting

### Forms not sending emails
- Check EmailJS credentials in `.env`
- Verify EmailJS service is active
- Check browser console for errors

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### WhatsApp button not working
- Verify phone number format: +917416857052
- Check link: `https://wa.me/917416857052`

## 📝 License

Copyright © 2024 Escose Technologies. All Rights Reserved.

## 📞 Contact

- **Website:** https://escose.com
- **Email:** info@escose.com
- **Phone:** +91 7416 8570 52
- **WhatsApp:** +91 7416 8570 52
- **LinkedIn:** https://linkedin.com/company/escose

## 🙏 Acknowledgments

- Design inspired by modern SaaS companies
- Icons from Material Icons
- Illustrations from various open-source projects

---

**Made with ❤️ by Escose Technologies**