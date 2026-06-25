const sharp = require('sharp');
const fs = require('fs');

const svg = `
<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A90D9"/>
      <stop offset="100%" stop-color="#2D5C8A"/>
    </linearGradient>
    <linearGradient id="hl" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFC857"/>
      <stop offset="100%" stop-color="#FFA726"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="256" height="256" rx="48" fill="url(#bg)"/>

  <rect x="48" y="48" width="160" height="180" rx="12" fill="#ffffff" opacity="0.13"/>
  <rect x="48" y="48" width="160" height="180" rx="12" fill="#ffffff" opacity="0.08"/>

  <rect x="88" y="56" width="60" height="14" rx="3" fill="#ffffff" opacity="0.15"/>

  <rect x="64" y="82" width="130" height="6" rx="3" fill="#ffffff" opacity="0.5"/>
  <rect x="64" y="96" width="110" height="6" rx="3" fill="#ffffff" opacity="0.5"/>
  <rect x="64" y="110" width="140" height="6" rx="3" fill="#ffffff" opacity="0.5"/>

  <rect x="56" y="124" width="155" height="24" rx="6" fill="url(#hl)" opacity="0.3"/>
  <rect x="64" y="130" width="125" height="6" rx="3" fill="#FFC857"/>

  <text x="64" y="130" font-family="monospace" font-size="9" fill="#ffffff" opacity="0.7"
        text-anchor="start" dominant-baseline="middle">42</text>
  <rect x="80" y="127" width="1" height="18" fill="#ffffff" opacity="0.4"/>

  <rect x="56" y="156" width="85" height="6" rx="3" fill="#ffffff" opacity="0.5"/>
  <rect x="56" y="170" width="120" height="6" rx="3" fill="#ffffff" opacity="0.5"/>
  <rect x="56" y="184" width="95" height="6" rx="3" fill="#ffffff" opacity="0.5"/>

  <rect x="56" y="202" width="144" height="20" rx="4" fill="#ffffff" opacity="0.1"/>
  <text x="128" y="215" font-family="sans-serif" font-size="10" fill="#ffffff" opacity="0.8"
        text-anchor="middle" dominant-baseline="middle" font-weight="bold">copy-with-file-line</text>

  <rect x="196" y="48" width="24" height="24" rx="6" fill="#FFC857" opacity="0.9"/>
  <text x="208" y="63" font-family="sans-serif" font-size="12" fill="#2D5C8A"
        text-anchor="middle" dominant-baseline="middle" font-weight="bold">L</text>
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
