import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const rootDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const srcPng = path.join(rootDir, 'src', 'assets', 'escose_logo.png');
const outDir = path.join(rootDir, 'public');
const outIco = path.join(outDir, 'favicon.ico');
const appleTouch = path.join(outDir, 'apple-touch-icon.png');
const manifest = path.join(outDir, 'site.webmanifest');

const sizes = [16, 32, 48, 64, 128, 192, 256, 512];

async function trimAndCenterSquareCrop(buffer) {
  // Get original dimensions first
  const originalMeta = await sharp(buffer).metadata();
  const originalWidth = originalMeta.width || 0;
  const originalHeight = originalMeta.height || 0;

  if (originalWidth === 0 || originalHeight === 0) {
    throw new Error('Invalid image dimensions');
  }

  // Trim transparent/flat background with a lower threshold to be more careful
  // This ensures we don't accidentally trim parts of the logo
  const trimmedBuffer = await sharp(buffer).trim({ threshold: 5 }).png().toBuffer();
  const trimmedMeta = await sharp(trimmedBuffer).metadata();
  let width = trimmedMeta.width || originalWidth;
  let height = trimmedMeta.height || originalHeight;

  // If trimming removed too much (more than 10% of width or height), use original
  if (width < originalWidth * 0.9 || height < originalHeight * 0.9) {
    console.log('Warning: Trim removed too much, using original dimensions');
    width = originalWidth;
    height = originalHeight;
    const originalBuffer = await sharp(buffer).png().toBuffer();
    return await createSquareLogo(originalBuffer, width, height);
  }

  return await createSquareLogo(trimmedBuffer, width, height);
}

async function createSquareLogo(imageBuffer, width, height) {
  // Target square size (use a reasonable base size for processing)
  const targetSize = 512;
  
  // Calculate scale factor to fit the logo within the square
  // We want to fit the entire logo, so use the smaller scale factor
  const scale = Math.min(targetSize / width, targetSize / height);
  
  // Calculate new dimensions after scaling
  const newWidth = Math.round(width * scale);
  const newHeight = Math.round(height * scale);
  
  // Scale the logo to fit within the square (maintain aspect ratio)
  const scaledBuffer = await sharp(imageBuffer)
    .resize(newWidth, newHeight, {
      fit: 'inside',
      withoutEnlargement: false, // Allow scaling up if needed for small logos
    })
    .png()
    .toBuffer();
  
  // Calculate padding to center the scaled logo in the square
  const paddingTop = Math.floor((targetSize - newHeight) / 2);
  const paddingBottom = Math.ceil((targetSize - newHeight) / 2);
  const paddingLeft = Math.floor((targetSize - newWidth) / 2);
  const paddingRight = Math.ceil((targetSize - newWidth) / 2);

  // Add padding to center the logo in a square canvas
  // The extend will make it exactly targetSize x targetSize
  return await sharp(scaledBuffer)
    .extend({
      top: paddingTop,
      bottom: paddingBottom,
      left: paddingLeft,
      right: paddingRight,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();
}

async function generatePngSizes(squareBuffer) {
  await fs.promises.mkdir(outDir, { recursive: true });
  const outputs = await Promise.all(
    sizes.map(async (size) => {
      const file = path.join(outDir, `favicon-${size}x${size}.png`);
      await sharp(squareBuffer).resize(size, size).png().toFile(file);
      return file;
    })
  );
  // Apple touch icon (recommended 180x180)
  await sharp(squareBuffer).resize(180, 180).png().toFile(appleTouch);
  return outputs;
}

async function generateIco(squareBuffer) {
  const icoPngs = await Promise.all(
    [16, 32, 48].map((s) => sharp(squareBuffer).resize(s, s).png().toBuffer())
  );
  const icoBuffer = await pngToIco(icoPngs);
  await fs.promises.writeFile(outIco, icoBuffer);
}

async function writeManifest() {
  const data = {
    name: 'Escose Technologies',
    short_name: 'Escose',
    icons: sizes
      .filter((s) => s >= 192)
      .map((s) => ({ src: `/favicon-${s}x${s}.png`, sizes: `${s}x${s}`, type: 'image/png' })),
    theme_color: '#000000',
    background_color: '#ffffff',
    display: 'standalone',
  };
  await fs.promises.writeFile(manifest, JSON.stringify(data, null, 2));
}

async function main() {
  const srcBuffer = await fs.promises.readFile(srcPng);
  const logoOnlySquare = await trimAndCenterSquareCrop(srcBuffer);
  await generatePngSizes(logoOnlySquare);
  await generateIco(logoOnlySquare);
  await writeManifest();
  console.log('Favicons (centered logo) generated in', outDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
