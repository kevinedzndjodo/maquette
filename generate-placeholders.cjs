const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/work',
  'public/images/celebrity',
  'public/images/training',
  'public/images/about'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const placeholders = [
  // Work - Selected Work
  { path: 'public/images/work/editorial-1.svg', w: 1200, h: 1600, label: 'EDITORIAL', sub: 'Vogue Africa' },
  { path: 'public/images/work/bridal-1.svg', w: 800, h: 1000, label: 'BRIDAL', sub: 'Ngondo Ceremony' },
  { path: 'public/images/work/beauty-1.svg', w: 800, h: 1000, label: 'BEAUTY', sub: 'Golden Hour' },
  { path: 'public/images/work/celebrity-1.svg', w: 1200, h: 1600, label: 'CELEBRITY', sub: 'Canal 2\'Or Awards' },
  { path: 'public/images/work/editorial-2.svg', w: 600, h: 1600, label: 'AVANT-GARDE', sub: 'Structural Beauty' },
  { path: 'public/images/work/bridal-2.svg', w: 800, h: 1000, label: 'BRIDAL', sub: 'White Wedding' },
  { path: 'public/images/work/creative-1.svg', w: 800, h: 1000, label: 'CREATIVE', sub: 'Desert Rose' },
  { path: 'public/images/work/celebrity-2.svg', w: 1200, h: 1000, label: 'CELEBRITY', sub: 'Music Video' },
  { path: 'public/images/work/beauty-2.svg', w: 600, h: 800, label: 'BEAUTY', sub: 'Natural Look' },

  // Celebrity & Editorial
  { path: 'public/images/celebrity/celeb-1.svg', w: 800, h: 1000, label: 'CELEBRITY', sub: 'Red Carpet' },
  { path: 'public/images/celebrity/celeb-2.svg', w: 800, h: 1000, label: 'EDITORIAL', sub: 'Magazine Cover' },
  { path: 'public/images/celebrity/celeb-3.svg', w: 800, h: 1000, label: 'CELEBRITY', sub: 'Music Video' },
  { path: 'public/images/celebrity/celeb-4.svg', w: 800, h: 1000, label: 'EDITORIAL', sub: 'Fashion Spread' },

  // Training
  { path: 'public/images/training/fondamentaux.svg', w: 800, h: 600, label: 'FORMATION', sub: 'Fondamentaux Pro' },
  { path: 'public/images/training/mariee.svg', w: 800, h: 600, label: 'FORMATION', sub: 'Mariée Expert' },
  { path: 'public/images/training/editorial.svg', w: 800, h: 600, label: 'FORMATION', sub: 'Editorial Creative' },
  { path: 'public/images/training/airbrush.svg', w: 800, h: 600, label: 'FORMATION', sub: 'Airbrush Masterclass' },

  // About
  { path: 'public/images/about/portrait.svg', w: 1000, h: 1200, label: 'FRED KENDRICK', sub: 'Portrait' },

  // Hero
  { path: 'public/images/hero-main.svg', w: 1920, h: 1080, label: 'FRED KENDRICK', sub: 'Makeup Artist' },
];

function createPlaceholder({ path, w, h, label, sub }) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <rect fill="#0A0A0A" width="${w}" height="${h}"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.min(w, h) * 0.035}" fill="#F5F0E8" opacity="0.12" letter-spacing="0.15em">${label}</text>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${Math.min(w, h) * 0.015}" fill="#C9B896" opacity="0.25" letter-spacing="0.2em" text-transform="uppercase">${sub}</text>
  <line x1="${w * 0.4}" y1="${h * 0.62}" x2="${w * 0.6}" y2="${h * 0.62}" stroke="#C9B896" stroke-width="${Math.max(1, w * 0.001)}" opacity="0.2"/>
</svg>`;
  fs.writeFileSync(path, svg);
  console.log(`Created: ${path}`);
}

placeholders.forEach(createPlaceholder);
console.log('All placeholders generated!');
