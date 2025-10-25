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

async function trimAndLeftSquareCrop(buffer) {
  // Trim transparent/flat background then crop a left-aligned square area
  const trimmedBuffer = await sharp(buffer).trim({ threshold: 10 }).png().toBuffer();
  const meta = await sharp(trimmedBuffer).metadata();
  const width = meta.width || 0;
  const height = meta.height || 0;

  if (width === 0 || height === 0) {
    // Fallback: ensure square by padding
    const maxSide = Math.max(width, height, 1);
    return await sharp(trimmedBuffer)
      .extend({
        top: Math.floor((maxSide - height) / 2),
        bottom: Math.ceil((maxSide - height) / 2),
        left: Math.floor((maxSide - width) / 2),
        right: Math.ceil((maxSide - width) / 2),
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .png()
      .toBuffer();
  }

  if (width > height) {
    // Left-aligned square crop to emphasize the logo mark (assuming text on the right)
    return await sharp(trimmedBuffer).extract({ left: 0, top: 0, width: height, height }).png().toBuffer();
  } else if (height > width) {
    // Taller than wide: center-crop vertically to square
    const top = Math.floor((height - width) / 2);
    return await sharp(trimmedBuffer).extract({ left: 0, top, width, height: width }).png().toBuffer();
  }

  return trimmedBuffer;
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
  const logoOnlySquare = await trimAndLeftSquareCrop(srcBuffer);
  await generatePngSizes(logoOnlySquare);
  await generateIco(logoOnlySquare);
  await writeManifest();
  console.log('Favicons (logo-only) generated in', outDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
