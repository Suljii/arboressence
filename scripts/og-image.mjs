// Génère public/og-image.png (aperçu lors des partages) : node scripts/og-image.mjs
import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1E3A1E"/>
      <stop offset="0.6" stop-color="#2E5827"/>
      <stop offset="1" stop-color="#4A7C3F"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="1020" cy="140" r="260" fill="#7A9E72" opacity="0.12"/>
  <circle cx="1100" cy="560" r="180" fill="#7A9E72" opacity="0.10"/>
  <text x="90" y="200" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="#7A9E72">✦</text>
  <text x="90" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="96" fill="#F2EAD8">Arbor'essence</text>
  <text x="92" y="365" font-family="Arial, Helvetica, sans-serif" font-size="26" letter-spacing="6" fill="#7A9E72">PAYSAGISTE EN ÎLE-DE-FRANCE</text>
  <rect x="92" y="410" width="120" height="2" fill="#F2EAD8" opacity="0.5"/>
  <text x="92" y="470" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#F2EAD8" opacity="0.85">Élagage · Création de jardins · Entretien</text>
  <text x="92" y="520" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#F2EAD8" opacity="0.6">Val-de-Marne &amp; Île-de-France · Devis gratuit</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-image.png');
console.log('public/og-image.png créé');
