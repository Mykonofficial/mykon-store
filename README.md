# MYKON Storefront

Starter Next.js app (App Router) with Tailwind and a simple cart context.

Quick start:

```bash
cd "c:\\Users\\hill0\\Downloads\\mykon-store"
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

Deployment (Vercel):

1. Create a Vercel account at https://vercel.com and install the Vercel CLI or connect your Git repository.
2. Push this project to a GitHub/GitLab/Bitbucket repo.
3. On Vercel, import the repository and use the default Next.js settings. Vercel will detect the project and set the correct build command (`npm run build`) and output automatically.

Notes:
- This is a UI-only starter. Add Stripe/Shopify or a backend for real checkout flows.
- The project uses Tailwind via PostCSS — no additional build steps are required beyond `next build`.

Local notes:
- If you see unresolved `@/` imports, ensure `tsconfig.json` contains the paths mapping (`@/*: ['./*']`).

Enjoy — ask me to wire up Stripe, add CMS content, or deploy to Vercel for you.

Stripe setup:

1. Install Stripe (optional dependency is listed in `package.json`). If you want the package locally run:

```bash
npm install stripe
```

2. Create a `.env.local` in the project root with these variables:

```
STRIPE_SECRET_KEY=sk_test_...      # your Stripe secret key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

3. The server route at `/api/checkout` will create a Checkout Session and return `session.url`. The `Buy Now` button on the product page uses this route to redirect buyers to Stripe Checkout.

4. For production, set `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_BASE_URL` in your hosting environment (Vercel project settings).

5. Optionally add a webhook endpoint to validate payments server-side and fulfill orders.

Webhook setup (local testing):

1. Set `STRIPE_WEBHOOK_SECRET` in your `.env.local` with the signing secret for the webhook endpoint configured in the Stripe dashboard.
2. Run the Stripe CLI during local development to forward events to your local server:

```bash
# from project root
npx stripe listen --forward-to localhost:3000/api/webhook
```

3. The provided `/api/webhook` route verifies signatures and appends simple order records to `data/orders.json` (demo use only — for production use a database).

Using Stripe Price IDs:

- You can pre-create Products & Prices in the Stripe dashboard and add the Price ID to the product entry in `lib/products.ts` using the `priceId` field. When present the checkout route will use the Price ID instead of creating inline `price_data`.

