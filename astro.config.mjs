import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Domaine de production : sert au sitemap, aux URL canoniques et à Open Graph
  site: 'https://pietelagage.fr',
  // Pages statiques ; seule /api/devis tourne côté serveur (fonction Vercel)
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap()],
  env: {
    schema: {
      // À définir dans Vercel → Settings → Environment Variables (et dans .env en local)
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }),
      // Expéditeur : adresse d'un domaine vérifié dans Resend
      RESEND_FROM: envField.string({ context: 'server', access: 'secret', default: "Site Arbor'essence <no-reply@pietelagage.fr>" }),
      // Destinataire de test (optionnel) : remplace contact.email de src/data/seo.js
      RESEND_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
