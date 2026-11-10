# Codex implementation brief: Ancestors Aura

You are working in the existing Ancestors Aura repository. First inspect the complete project and preserve the current design direction.

## Goal
Turn the starter into a production-ready African heritage ecommerce and storytelling storefront. The visual identity should feel premium, warm, editorial and culturally respectful. Use charcoal, parchment, muted brass and earthy tones. Use tasteful motion, depth and subtle 3D interactions. Keep mobile performance strong.

## Required work
1. Audit the existing code and list implementation gaps before changing architecture.
2. Improve component structure, responsive layout, keyboard navigation, semantic HTML, accessibility and reduced-motion support.
3. Build real collection and product detail routes with loading, empty and error states.
4. Integrate Shopify as the source of truth for products, collections, variants, inventory, cart, discounts, customer accounts, checkout, orders and shipping. Use supported Shopify Storefront APIs or a Shopify theme architecture. Do not hardcode fake stock, reviews, discounts or order/payment success.
5. Add robust cart quantity changes, remove item, subtotal and checkout handoff.
6. Add editorial story pages and heritage categories with content that can be managed.
7. Add SEO metadata, Open Graph, sitemap, structured data where accurate, analytics consent and performance optimizations.
8. Add tests for cart, filters, product display and Shopify error states.
9. Add deployment documentation and environment variable examples. Never commit secrets or Shopify Admin tokens.
10. Provide a final audit with READY / PARTIALLY READY / NOT READY / NOT YET REQUIRED for each module.

## Shopify safety
The existing live theme must remain untouched. Develop and test against an unpublished duplicate theme or a development storefront. Never publish, overwrite, change payment settings, or alter live store data without explicit owner approval. The current UI uses sample products and a local preview cart. Label these as demo until real Shopify data is connected.

## Completion criteria
- `npm run build` passes.
- Responsive behavior is checked at mobile, tablet and desktop sizes.
- All interactive controls work and have accessible names.
- Shopify checkout is real and Shopify-hosted.
- No secrets are present in source control.
- A clear setup guide explains the remaining manual Shopify configuration.
