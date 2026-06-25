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

  <rect x="0" y="0" width="256" height="256" rx="48" fill="url(#bg)"/>

  <rect x="36" y="32" width="184" height="192" rx="14" fill="#ffffff"/>

  <rect x="54" y="50" width="80" height="8" rx="4" fill="#E2E8F0"/>
  <rect x="146" y="50" width="20" height="8" rx="4" fill="#E2E8F0"/>

  <rect x="50" y="74" width="156" height="4" rx="2" fill="#E2E8F0"/>
  <rect x="50" y="88" width="130" height="4" rx="2" fill="#E2E8F0"/>
  <rect x="50" y="102" width="100" height="4" rx="2" fill="#E2E8F0"/>

  <rect x="42" y="116" width="172" height="42" rx="8" fill="#F59E0B" opacity="0.12"/>
  <rect x="42" y="116" width="5" height="42" rx="2.5" fill="#F59E0B"/>

  <rect x="56" y="128" width="90" height="4" rx="2" fill="#D97706"/>
  <rect x="56" y="142" width="110" height="4" rx="2" fill="#D97706"/>

  <rect x="188" y="116" width="22" height="42" rx="6" fill="#F59E0B"/>
  <text x="199" y="142" font-family="sans-serif" font-size="15" fill="#ffffff"
        text-anchor="middle" dominant-baseline="middle" font-weight="bold">42</text>

  <rect x="50" y="172" width="140" height="4" rx="2" fill="#E2E8F0"/>
  <rect x="50" y="186" width="90" height="4" rx="2" fill="#E2E8F0"/>
  <rect x="50" y="200" width="115" height="4" rx="2" fill="#E2E8F0"/>
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
