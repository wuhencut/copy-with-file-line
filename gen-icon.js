const sharp = require('sharp');
const fs = require('fs');

const svg = `
<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A6CF7"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="256" height="256" rx="52" fill="url(#bg)"/>

  <rect x="56" y="48" width="144" height="160" rx="12" fill="#ffffff"/>

  <rect x="72" y="64" width="80" height="8" rx="4" fill="#E2E8F0"/>
  <rect x="164" y="64" width="20" height="8" rx="4" fill="#E2E8F0"/>

  <rect x="68" y="88" width="120" height="4" rx="2" fill="#E2E8F0"/>
  <rect x="68" y="102" width="100" height="4" rx="2" fill="#E2E8F0"/>
  <rect x="68" y="116" width="80" height="4" rx="2" fill="#E2E8F0"/>

  <rect x="60" y="130" width="136" height="36" rx="6" fill="#F59E0B" opacity="0.15"/>
  <rect x="60" y="130" width="4" height="36" rx="2" fill="#F59E0B"/>

  <rect x="72" y="141" width="70" height="4" rx="2" fill="#D97706"/>
  <rect x="72" y="154" width="90" height="4" rx="2" fill="#D97706"/>

  <rect x="166" y="130" width="24" height="36" rx="6" fill="#F59E0B"/>
  <text x="178" y="153" font-family="sans-serif" font-size="13" fill="#ffffff"
        text-anchor="middle" dominant-baseline="middle" font-weight="bold">42</text>

  <rect x="68" y="180" width="110" height="4" rx="2" fill="#E2E8F0"/>
</svg>
`;

async function generate() {
  const pngBuffer = await sharp(Buffer.from(svg))
    .resize(256, 256)
    .png()
    .toBuffer();

  const outPath = require('path').join(__dirname, 'icon.png');
  fs.writeFileSync(outPath, pngBuffer);
  console.log('icon.png generated');
}

generate().catch(console.error);
