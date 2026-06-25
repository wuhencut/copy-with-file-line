const sharp = require('sharp');
const fs = require('fs');

const svg = `
<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5B86E5"/>
      <stop offset="100%" stop-color="#36D1DC"/>
    </linearGradient>
    <linearGradient id="hl" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFD54F"/>
      <stop offset="100%" stop-color="#FFB300"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="256" height="256" rx="52" fill="url(#bg)"/>

  <rect x="48" y="44" width="160" height="168" rx="14" fill="#ffffff"/>
  <rect x="48" y="44" width="160" height="32" rx="14" fill="#F5F5F5"/>
  <rect x="48" y="62" width="160" height="14" fill="#F5F5F5"/>

  <circle cx="63" cy="60" r="3.5" fill="#D0D0D0"/>
  <circle cx="78" cy="60" r="3.5" fill="#D0D0D0"/>
  <circle cx="93" cy="60" r="3.5" fill="#D0D0D0"/>

  <rect x="62" y="82" width="80" height="4" rx="2" fill="#E8E8E8"/>
  <rect x="62" y="94" width="120" height="4" rx="2" fill="#E8E8E8"/>
  <rect x="62" y="106" width="65" height="4" rx="2" fill="#E8E8E8"/>

  <rect x="56" y="118" width="145" height="28" rx="6" fill="url(#hl)" opacity="0.25"/>

  <text x="63" y="136" font-family="monospace" font-size="10" fill="#B0BEC5"
        text-anchor="start" dominant-baseline="middle">12</text>
  <rect x="80" y="120" width="1" height="24" fill="#E0E0E0"/>
  <rect x="88" y="128" width="100" height="4" rx="2" fill="#FFB300" opacity="0.9"/>

  <rect x="62" y="156" width="105" height="4" rx="2" fill="#E8E8E8"/>
  <rect x="62" y="168" width="90" height="4" rx="2" fill="#E8E8E8"/>
  <rect x="62" y="180" width="50" height="4" rx="2" fill="#E8E8E8"/>
  <rect x="62" y="192" width="115" height="4" rx="2" fill="#E8E8E8"/>
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
