const sharp = require('sharp');
const fs = require('fs');

const svg = `
<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A6CF7"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
    <linearGradient id="hl" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FBBF24"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="256" height="256" rx="52" fill="url(#bg)"/>

  <rect x="44" y="32" width="168" height="192" rx="16" fill="#ffffff"/>

  <rect x="44" y="32" width="168" height="40" rx="16" fill="#F1F5F9"/>
  <rect x="44" y="58" width="168" height="14" fill="#F1F5F9"/>

  <rect x="56" y="46" width="18" height="14" rx="3" fill="#F59E0B"/>
  <rect x="56" y="52" width="18" height="1" fill="#FBBF24"/>
  <rect x="80" y="48" width="80" height="10" rx="5" fill="#CBD5E1"/>

  <rect x="56" y="88" width="144" height="3" rx="1.5" fill="#E2E8F0"/>
  <rect x="56" y="100" width="130" height="3" rx="1.5" fill="#E2E8F0"/>
  <rect x="56" y="112" width="110" height="3" rx="1.5" fill="#E2E8F0"/>

  <rect x="50" y="124" width="156" height="34" rx="8" fill="url(#hl)" opacity="0.18"/>
  <rect x="50" y="124" width="5" height="34" rx="2.5" fill="url(#hl)"/>

  <circle cx="78" cy="141" r="13" fill="url(#hl)"/>
  <text x="78" y="145" font-family="monospace" font-size="12" fill="#ffffff"
        text-anchor="middle" dominant-baseline="middle" font-weight="bold">15</text>

  <rect x="98" y="134" width="60" height="3" rx="1.5" fill="#D97706"/>
  <rect x="98" y="146" width="85" height="3" rx="1.5" fill="#D97706"/>

  <rect x="56" y="170" width="120" height="3" rx="1.5" fill="#E2E8F0"/>
  <rect x="56" y="182" width="80" height="3" rx="1.5" fill="#E2E8F0"/>
  <rect x="56" y="194" width="140" height="3" rx="1.5" fill="#E2E8F0"/>
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
