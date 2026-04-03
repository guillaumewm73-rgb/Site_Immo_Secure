# Immo Secure - Site vitrine Next.js

Site one-page premium pour l'offre **"Zéro Opportunité Perdue"** d'Immo Secure.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Prérequis

- Node.js 18.17+ (ou version LTS récente)
- npm

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:3000`.

## URL de réservation

Pour activer le bouton de prise de rendez-vous direct, ajoute une variable d'environnement publique :

```bash
NEXT_PUBLIC_BOOKING_URL=https://cal.com/votre-compte/diagnostic
```

Sans cette variable, le CTA de réservation bascule automatiquement sur un appel direct.

## Scripts disponibles

```bash
npm run dev      # développement
npm run build    # build production
npm run start    # lancer le build
npm run lint     # lint Next.js
```

## Structure principale

- `app/layout.tsx` : layout global + metadata SEO
- `app/page.tsx` : composition de toutes les sections de la landing
- `app/globals.css` : styles globaux
- `app/api/contact/route.ts` : endpoint de démonstration du formulaire
- `components/sections/*` : sections de la page (Hero, Problème, Solution, etc.)
- `components/ui/*` : composants UI réutilisables
- `content/siteContent.ts` : tous les textes et contenus de la landing
- `public/dashboard-mockup.svg` : visuel dashboard local

## Modifier facilement les textes

Édite uniquement `content/siteContent.ts`.

Tu peux y changer :
- les textes de sections
- les CTA
- les bénéfices
- la FAQ
- les coordonnées (email/téléphone)
- les URLs d'images externes

## Brancher le formulaire à un email/webhook

Le formulaire envoie actuellement vers `POST /api/contact` avec validation.

Pour connecter un vrai envoi :
1. Ouvre `app/api/contact/route.ts`
2. Remplace la réponse mock par un envoi vers :
   - API email (Resend, Sendgrid, etc.)
   - webhook (Make, Zapier, n8n, CRM)
3. Garde la validation déjà en place pour éviter les envois invalides.

## Direction visuelle déjà intégrée

- Design clair, premium, sobre
- Palette bleu profond / acier / blanc / gris léger
- Hiérarchie typographique nette
- Responsive mobile + desktop
- Transitions légères (hover, interactions)

## Notes

- Images externes autorisées via `next.config.mjs` (`images.unsplash.com`, `images.pexels.com`).
- Tu peux remplacer ces visuels par tes propres assets dans `public/` à tout moment.
