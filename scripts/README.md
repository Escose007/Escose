# 🔧 Scripts Directory

This directory contains utility scripts for the Escose project.

---

## 📁 Available Scripts

### 1. `gen-favicon.mjs`
**Purpose:** Generate favicon images in multiple sizes

**Usage:**
```bash
node scripts/gen-favicon.mjs
```

**What it does:**
- Takes a source image
- Generates favicons in various sizes (16x16, 32x32, 48x48, etc.)
- Creates PNG files for different platforms
- Used during initial setup

---

### 2. `optimize-images.mjs` ⭐ NEW
**Purpose:** Optimize images for web with high-quality WebP conversion

**Usage:**
```bash
npm run optimize-images
```

**What it does:**
- Converts PNG/JPG images to WebP format
- Uses 92% quality (visually lossless)
- Reduces file sizes by 40-70% on average
- Maintains original images as backup
- Provides detailed optimization report

**Configuration:**
```javascript
{
  webpQuality: 92,      // High quality, no visible loss
  targetSizes: {
    logos: 800,         // Tech logos
    heroes: 1920,       // Hero images
    icons: 512          // Icons
  }
}
```

**When to use:**
- When adding new images to `src/assets/`
- When existing images are too large
- Before major releases to ensure optimal performance

**Results from last run (Oct 25, 2025):**
- 30 images optimized
- 824 KB saved (60.5% reduction)
- No visible quality loss

---

## 🚀 Quick Reference

```bash
# Optimize images
npm run optimize-images

# Generate favicons
node scripts/gen-favicon.mjs
```

---

## 📝 Notes

### Image Optimization Best Practices
1. Add new images as PNG to `src/assets/`
2. Edit `optimize-images.mjs` to include new images
3. Run `npm run optimize-images`
4. Update `src/assets/index.js` to import WebP version
5. Test and build

### Quality Settings
- **92%** - Current setting (visually lossless)
- **95%** - Higher quality (slightly larger files)
- **85%** - Lower quality (may show artifacts)

---

## 📚 Documentation

For detailed information about image optimization, see:
- `IMAGE_OPTIMIZATION_REPORT.md` - Full technical details
- `IMAGE_OPTIMIZATION_SUMMARY.md` - Quick reference
- `VISUAL_QUALITY_CHECKLIST.md` - Testing guide

---

**Last Updated:** October 25, 2025


