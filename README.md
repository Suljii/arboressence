# Arbor'essence – Site Paysagiste 🌿

Site vitrine statique (Astro 7) d'un paysagiste basé à Villeneuve-le-Roi (94).

## Structure du projet

```
arboressence/
├── src/
│   ├── data/seo.js              → Coordonnées, infos légales, villes, métiers (source unique)
│   ├── data/metiers-contenu.js  → Par métier : expression recherchée, saison, FAQ
│   ├── layouts/Layout.astro     → <head> (SEO, Open Graph, schema.org), CSS global
│   ├── components/
│   │   ├── Header.astro         → Navigation + menu mobile
│   │   ├── Footer.astro         → Pied de page
│   │   ├── ServiceHero.astro    → Bandeau des pages services
│   │   ├── Breadcrumb.astro     → Fil d'Ariane + schema BreadcrumbList
│   │   ├── Faq.astro            → FAQ + schema FAQPage
│   │   └── PreuvesLocales.astro → Réalisations et avis d'une ville (si renseignés)
│   └── pages/
│       ├── index.astro          → Accueil
│       ├── contact.astro        → Formulaire de devis (→ /api/devis)
│       ├── api/devis.ts         → Envoi du formulaire par email (Resend, fonction Vercel)
│       ├── mentions-legales.astro, confidentialite.astro
│       ├── services/*.astro     → 5 pages services
│       ├── metiers/             → index, [pratique], [pratique]/[ville] (métier × ville)
│       └── villes/              → index, [ville]
├── public/
│   ├── og-image.png             → Aperçu lors des partages (node scripts/og-image.mjs)
│   ├── robots.txt
│   └── favicon.svg
├── astro.config.mjs             → Domaine (`site`), sitemap, adaptateur Vercel, variables d'env
└── vercel.json                  → En-têtes HTTP de sécurité
```

Ajouter une ville ou un métier dans `src/data/seo.js` génère automatiquement toutes les pages
correspondantes. Les champs disponibles pour une ville sont documentés en commentaire au-dessus
de `villes` : `metiers` (limiter les pages générées), `quartiers`, `chantiers`, `avis`.
Les sections correspondantes n'apparaissent que si les données existent. Le téléphone et l'email se modifient uniquement dans `contact` de ce fichier
(l'email sert aussi de destinataire du formulaire).

## Commandes

```bash
npm install      # installer les dépendances
npm run dev      # développement (localhost:4321)
npm run build    # build de production (Vercel)
```

## Déploiement sur Vercel

1. Pousser le projet sur GitHub puis l'importer dans Vercel (framework détecté : Astro)
2. Dans Vercel → Settings → Environment Variables :
   - `RESEND_API_KEY` : clé API Resend (obligatoire)
   - `RESEND_FROM` : expéditeur, par défaut `Site Arbor'essence <no-reply@pietelagage.fr>`
3. Dans Resend → Domains, vérifier le domaine de l'expéditeur (enregistrements DNS)
4. Dans Vercel → Domains, brancher `pietelagage.fr` (domaine principal) ; les autres domaines éventuels
   s'ajoutent au même projet en « Redirect to pietelagage.fr » pour éviter le contenu dupliqué

En local, copier `.env.example` en `.env` : le formulaire fonctionne alors aussi avec `npm run dev`.

**Tester sans domaine vérifié** : mettre `RESEND_FROM="Site Arbor'essence <onboarding@resend.dev>"` et
`RESEND_TO=<email du compte Resend>` (Resend n'accepte que ce destinataire avec l'expéditeur de test).
Supprimer ces deux variables une fois le domaine vérifié.

## Reste à faire

- [ ] Compléter `legal` dans `src/data/seo.js` (forme juridique, SIRET, responsable, adresse)
- [x] Domaine principal : `pietelagage.fr` (`astro.config.mjs`, `public/robots.txt`, expéditeur Resend)
- [ ] Renseigner `instagram` / `facebook` dans `contact` (les icônes s'affichent alors)
- [ ] Ajouter de vraies photos dans `/public/images/`
- [ ] Tester le formulaire en ligne (vérifier la réception et les spams, logs dans Resend)
- [ ] Google Business Profile + Search Console (soumettre `/sitemap-index.xml`)
- [ ] Renseigner `chantiers`, `avis` et `quartiers` par ville (le levier SEO le plus fort)
- [ ] Limiter `metiers` par ville aux combinaisons réellement demandées (Search Console)
- [ ] Ajouter des fourchettes de prix par métier
- [ ] Vérifier les affirmations « plus de 20 ans », « élagueurs certifiés », « déclaré SAP »

## Palette de couleurs

| Variable | Valeur | Usage |
|---|---|---|
| `--vert-fonce` | `#1E3A1E` | Header, hero, textes forts |
| `--vert-moyen` | `#2E5827` | Boutons, accents |
| `--vert-clair` | `#4A7C3F` | Tags, liens |
| `--vert-sauge` | `#7A9E72` | Éléments décoratifs |
| `--beige` | `#F2EAD8` | Sections alternées |
| `--beige-clair` | `#FAF7F0` | Fond principal |

## Polices

- **Cormorant Garamond** (titres) – élégance naturelle
- **Jost** (corps de texte) – modernité épurée
