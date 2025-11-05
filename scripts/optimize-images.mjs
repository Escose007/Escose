#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts PNG/JPG images to high-quality WebP format
 * Maintains visual quality while reducing file sizes by 40-70%
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration - High quality settings to maintain visual fidelity
const CONFIG = {
  webpQuality: 92, // 92% quality - visually lossless for most images
  pngQuality: 90,  // For PNG optimization
  maxWidth: 2000,   // Max width for large images
  targetSizes: {
    logos: 800,     // Tech logos and company logos
    heroes: 1920,   // Hero/banner images
    icons: 512      // Icons and small images
  }
};

// Images to optimize (relative to src/assets)
const IMAGES_TO_OPTIMIZE = [
  // Critical - Large files
  { file: 'escose_logo.png', category: 'logos', priority: 1 },
  { file: 'contact_us.png', category: 'heroes', priority: 1 },
  { file: 'about_us.png', category: 'heroes', priority: 1 },
  { file: 'aws.png', category: 'logos', priority: 1 },
  { file: 'escose_logo1.png', category: 'logos', priority: 1 },
  
  // Medium priority
  { file: 'rails.png', category: 'logos', priority: 2 },
  { file: 'angular.png', category: 'logos', priority: 2 },
  { file: 'node.png', category: 'logos', priority: 2 },
  { file: 'css.png', category: 'logos', priority: 2 },
  { file: 'vue.png', category: 'logos', priority: 2 },
  { file: 'html.png', category: 'logos', priority: 2 },
  
  // Lower priority but still worth optimizing
  { file: 'startup.png', category: 'icons', priority: 3 },
  { file: 'java.png', category: 'logos', priority: 3 },
  { file: 'education1.png', category: 'icons', priority: 3 },
  { file: 'ecommerce.png', category: 'icons', priority: 3 },
  { file: 'gcp.png', category: 'logos', priority: 3 },
  { file: 'ionic.png', category: 'logos', priority: 3 },
  { file: 'mongodb.png', category: 'logos', priority: 3 },
  { file: 'postgresql.png', category: 'logos', priority: 3 },
  { file: 'wordtress.png', category: 'logos', priority: 3 },
  { file: 'flutter.png', category: 'logos', priority: 3 },
  { file: 'android.png', category: 'logos', priority: 3 },
  { file: 'azure.png', category: 'logos', priority: 3 },
  { file: 'digitalocean.png', category: 'logos', priority: 3 },
  { file: 'sqlite.png', category: 'logos', priority: 3 },
  { file: 'education.png', category: 'icons', priority: 3 },
  { file: 'ios.png', category: 'logos', priority: 3 },
  { file: 'go.png', category: 'logos', priority: 3 },
  { file: 'mysql.png', category: 'logos', priority: 3 },
  { file: 'php.png', category: 'logos', priority: 3 },
];

const assetsDir = path.join(__dirname, '../src/assets');

/**
 * Get file size in KB
 */
function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
}

/**
 * Optimize a single image
 */
async function optimizeImage(imageConfig) {
  const { file, category } = imageConfig;
  const inputPath = path.join(assetsDir, file);
  const outputPath = path.join(assetsDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
  
  // Skip if already WebP or doesn't exist
  if (file.endsWith('.webp') || !fs.existsSync(inputPath)) {
    return null;
  }
  
  const originalSize = getFileSizeKB(inputPath);
  
  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    const maxWidth = CONFIG.targetSizes[category] || CONFIG.maxWidth;
    
    // Optimize and convert to WebP
    let pipeline = sharp(inputPath);
    
    // Resize if image is too large
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Convert to WebP with high quality
    await pipeline
      .webp({ 
        quality: CONFIG.webpQuality,
        effort: 6 // Max compression effort (0-6), slower but better
      })
      .toFile(outputPath);
    
    const optimizedSize = getFileSizeKB(outputPath);
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    
    return {
      file,
      originalSize: `${originalSize}KB`,
      optimizedSize: `${optimizedSize}KB`,
      savings: `${savings}%`,
      success: true
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${file}:`, error.message);
    return {
      file,
      success: false,
      error: error.message
    };
  }
}

/**
 * Main optimization function
 */
async function optimizeAllImages() {
  console.log('🎨 Image Optimization Script');
  console.log('═'.repeat(80));
  console.log(`Quality: ${CONFIG.webpQuality}% (High Quality - No Visible Loss)`);
  console.log(`Total images to optimize: ${IMAGES_TO_OPTIMIZE.length}`);
  console.log('═'.repeat(80));
  console.log('');
  
  const results = [];
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  // Process images by priority
  const sortedImages = IMAGES_TO_OPTIMIZE.sort((a, b) => a.priority - b.priority);
  
  for (const imageConfig of sortedImages) {
    const result = await optimizeImage(imageConfig);
    if (result) {
      results.push(result);
      
      if (result.success) {
        const original = parseFloat(result.originalSize);
        const optimized = parseFloat(result.optimizedSize);
        totalOriginalSize += original;
        totalOptimizedSize += optimized;
        
        console.log(`✅ ${result.file}`);
        console.log(`   ${result.originalSize} → ${result.optimizedSize} (saved ${result.savings})`);
      } else {
        console.log(`❌ ${result.file}: ${result.error}`);
      }
    }
  }
  
  // Summary
  console.log('');
  console.log('═'.repeat(80));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('═'.repeat(80));
  
  const successCount = results.filter(r => r.success).length;
  const totalSavings = ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1);
  
  console.log(`✅ Successfully optimized: ${successCount}/${results.length} images`);
  console.log(`📦 Total original size: ${totalOriginalSize.toFixed(2)}KB`);
  console.log(`📦 Total optimized size: ${totalOptimizedSize.toFixed(2)}KB`);
  console.log(`💾 Total savings: ${(totalOriginalSize - totalOptimizedSize).toFixed(2)}KB (${totalSavings}%)`);
  console.log('');
  console.log('🎉 Image optimization complete!');
  console.log('');
  console.log('📝 Next steps:');
  console.log('   1. Check visual quality of optimized images');
  console.log('   2. Update components to use .webp files');
  console.log('   3. Keep original .png files as fallbacks');
  console.log('═'.repeat(80));
}

// Run the optimization
optimizeAllImages().catch(console.error);


