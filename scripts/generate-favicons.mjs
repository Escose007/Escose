import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const sourceImage = path.join(rootDir, 'src/assets/escose_logo.png');
const sizes = [16, 32, 48, 64, 128, 192, 256, 512];

function roundedCornerMask(width, height, radius) {
  return Buffer.from(
    `<svg width="${width}" height="${height}">
      <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="white"/>
    </svg>`
  );
}

async function generate() {
  // Extract wing icon, flatten to white background
  const squareIcon = await sharp(sourceImage)
    .extract({ left: 0, top: 0, width: 345, height: 345 })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .toBuffer();

  for (const size of sizes) {
    const radius = Math.round(size * 0.2); // 20% corner radius
    const mask = roundedCornerMask(size, size, radius);

    const resized = await sharp(squareIcon)
      .resize(size, size, { kernel: 'lanczos3' })
      .sharpen(size <= 64 ? 1.2 : 0.5)
      .png()
      .toBuffer();

    const outPath = path.join(publicDir, `favicon-${size}x${size}.png`);
    await sharp(resized)
      .composite([{ input: mask, blend: 'dest-in' }])
      .png()
      .toFile(outPath);
    console.log(`Generated favicon-${size}x${size}.png`);
  }

  // Apple touch icon (180x180)
  const apple = await sharp(squareIcon)
    .resize(180, 180, { kernel: 'lanczos3' })
    .png()
    .toBuffer();
  const appleRadius = Math.round(180 * 0.2);
  await sharp(apple)
    .composite([{ input: roundedCornerMask(180, 180, appleRadius), blend: 'dest-in' }])
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // ICO from 48x48
  const ico48 = await sharp(squareIcon)
    .resize(48, 48, { kernel: 'lanczos3' })
    .sharpen(1.2)
    .png()
    .toBuffer();
  const icoRounded = await sharp(ico48)
    .composite([{ input: roundedCornerMask(48, 48, 10), blend: 'dest-in' }])
    .png()
    .toBuffer();

  const pngToIco = (await import('png-to-ico')).default;
  const icoBuffer = await pngToIco(icoRounded);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico');

  console.log('\nAll favicons generated with white background and rounded corners!');
}

generate().catch(console.error);
