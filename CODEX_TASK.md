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

## New requirement: Tanzania ethnic communities book collection
Create a dedicated, prominent collection named **Tanzania Heritage Library** (also discoverable as **Books by Tanzanian Communities**) within the Ancestors Aura storefront.

### Coverage and research integrity
- Cover ethnic communities across mainland Tanzania and Zanzibar. Do not limit the collection to a few famous or large communities.
- Research the catalogue as a living, expandable index. Sources commonly describe Tanzania as having more than 120 ethnic groups, but exact counts and lists vary. Tanzania's 2022 census did not disaggregate population by ethnicity. Never claim the catalogue is a definitive official government list or invent a precise total.
- Create a research-backed community index using reliable sources such as Tanzanian university publications, the University of Dar es Salaam's language atlas, government and museum resources, reputable scholarly works, and community-led cultural organisations.
- Distinguish ethnic communities, language names, dialects, clans and regional identities. Do not automatically treat every language as a separate tribe or every community as one homogeneous group.
- Include spelling variants and alternate names as searchable aliases. Preserve community-preferred names where reliable sources identify them.
- Record source references and research notes for every community entry. Mark uncertain or disputed information clearly. Do not fabricate citations, quotations, dates, origin stories or cultural practices.
- Ensure respectful representation. Avoid stereotypes, exoticising descriptions, unsupported claims of ancientness, and presenting a practice as universal when it varies by locality, family, generation or faith.
- Include contemporary life and community voices, not only historical or traditional material. Flag sacred, restricted or sensitive knowledge and do not publish it without appropriate permission.

### Book product model
Each community should have its own individual book product entry, with:
- Working title format: **[Community Name]: History, Language and Living Heritage**.
- A clear short description and a longer editorial description.
- Community name, alternate names, associated regions/areas (with careful qualification), language(s), broad language family where verified, and research status.
- Suggested chapters: historical background and oral histories; language and naming; family and social life; arts, music and dance; food and agriculture/pastoralism/fishing/crafts as relevant; clothing and material culture; ceremonies and beliefs where publicly appropriate; environment and place; changes in modern life; community voices and further reading.
- Author/editor, edition, publication status, table of contents, bibliography, image permissions and review status fields. Do not invent author credentials or imply community endorsement.
- Product media slots for an authorised cover and optional sample pages. Do not use generic imagery that misrepresents a community.
- Product tags and filters for region, language family, language, subject, format and publication status.

### Formats, commerce and content workflow
- Support both ebook and printed-book product formats in the data model, but do not invent prices, ISBNs, stock, shipping weights, file downloads or delivery promises. Keep products unpublished/draft until the owner supplies and approves these details.
- Where Shopify supports it, use product options/variants for formats. Explain any platform limitations rather than faking digital fulfilment.
- Provide a clear **In research**, **Editorial review**, **Ready to publish**, and **Published** workflow. Only Published/available products should appear purchasable to customers.
- Allow the owner/editor to add a new community, edit research, attach sources, review a manuscript and prepare a product listing without changing code.
- Show a clear “More community books are being researched” state for communities without a completed manuscript. Do not represent a placeholder catalogue entry as a finished book for sale.
- Add a collection landing page with search, region and topic filters, community profile links, and accessible product cards. Keep the design consistent with the premium editorial storefront.
- Include a note that cultural content is researched and reviewed, and invite corrections or contributions from community members through a moderated contact workflow.

### Initial content seed
Seed a small, clearly labelled research-preview set to demonstrate the data model and UI. It may include well-documented communities such as Sukuma, Chagga, Haya, Nyamwezi, Maasai, Makonde, Zaramo, Iraqw, Hadza, Sandawe, Datooga, Gogo, Hehe, Yao and Nyakyusa, but this is not an exhaustive list and must not be presented as one. Verify each entry independently before publishing factual claims. Do not fabricate complete books or sale-ready products from these seed records.

## Shopify safety
The existing live theme must remain untouched. Develop and test against an unpublished duplicate theme or a development storefront. Never publish, overwrite, change payment settings, or alter live store data without explicit owner approval. The current UI uses sample products and a local preview cart. Label these as demo until real Shopify data is connected. All new book products must remain drafts until product content, format, price, rights and fulfilment are approved.

## Completion criteria
- `npm run build` passes.
- Responsive behavior is checked at mobile, tablet and desktop sizes.
- All interactive controls work and have accessible names.
- Shopify checkout is real and Shopify-hosted.
- No secrets are present in source control.
- A clear setup guide explains the remaining manual Shopify configuration.
- The Tanzania Heritage Library clearly distinguishes research previews from finished, purchasable books.
- Every published cultural claim has a traceable source and an appropriate review status.
