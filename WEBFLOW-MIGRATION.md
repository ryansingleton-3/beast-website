# B.E.A.S.T. — Shopify → Webflow migration handoff

Written 2026-09-02 by Claude, from the session where the Webflow connection was set up.
This is a PERSONAL/freelance project for Ryan (site for Bastian Borowik's training business). NOT MTi — skip the MTi hub.

## Goal (Ryan's words, paraphrased)
Shopify was overkill for a personal-trainer site. Rebuild the SAME site in Webflow so Bastian can own and edit it easily.
Drop the e-commerce machinery. Replace it with "book time on Bastian's calendar" — paying at booking is a bonus, not a requirement.
The site content and look must be copied over essentially exactly.
Shopify just billed ~$52 for the month (Aug 31) and the site has NOT been handed to Bastian yet, so there is no live traffic to protect.

## Source of truth for the rebuild (all local)
Repo: `/Users/ryansingleton/Projects/BEAST Website` (github.com/ryansingleton-3/beast-website)
- `templates/index.json` — the one-page home in this section order:
  hero, ticker, programs, stats, about, gallery, why, stories, athlete_of_the_month, testimonials, pricing, merch, faq, location, booking, contact
- `sections/beast-*.liquid` — the copy and markup for each of those sections (custom sections; ignore the stock Dawn sections)
- `sections/header-group.json` — nav is anchor links: #about, #programs, #why, #pricing
- `assets/beast.css`, `assets/beast.js`, `assets/animations.js` — styling/animation. Note beast.css tokens are the LIGHT variant (#f5f6f7 bg); the brand guide says dark #0A0A0A base — check the live theme settings in `config/settings_data.json` and `_design-reference/styles.css` before choosing.
- `assets/beast-*.jpg`, `assets/beast-logo.png` — images (hero/coach/athlete/gallery 1–6)
- `_design-reference/` — a static HTML/CSS build of the site (`index.html`, `styles.css`, `animations.*`, Images/, Logos/). Likely the cleanest source for layout since it is plain HTML, not Liquid.
- `BEAST-Brand-Reference-Guide.md` — colors (Near Black #0A0A0A, Steel Gray #8A8F94, Carolina Blue #7EB8E8, Deep Carolina Blue #4A90C4, Ice White #E8F2FA), fonts, voice, audiences
- `beast_testimonials.json` — testimonials data
- `setup/beast-products-import.csv` — the 6 "products" = the pricing offer: 60-min, 45-min, 30-min sessions, consult, 4-pack, 10-pack (prices + descriptions in the CSV)
- `setup/FINISH-SETUP.md` — how booking works today and the launch checklist
- `setup/MANAGING-REVIEWS.md` — how testimonials are managed

Live Shopify store: `mt1rnf-e1.myshopify.com` (password-protected, never launched publicly).
**Do NOT use the Shopify MCP `switch-shop` tool** — it revokes the current token, and the Shopify connector is pointed at the MTi USA store, which must stay connected. Use the local repo instead; it is the same theme.

## Webflow — two separate connections, keep them straight
1. Claude.ai OAuth connector "Webflow" (tools `mcp__6ee4d03c…__*`) = **MTi Group workspace**. Site "MTi GROUP website" id `68b94d810ebe045ab9a18628`. **Do not touch for this project.**
2. Local MCP server **`webflow-beast`** (added 2026-09-02 via `claude mcp add`, user scope, command `/opt/homebrew/bin/npx -y webflow-mcp-server@latest`, site API token in the env of `~/.claude.json`).
   - Reaches exactly one site: **B.E.A.S.T.**, site id `6a988ff4622d7065ea2aa7fd`, short name `b-e-a-s-t`, never published, no custom domain.
   - Verified 2026-09-02 via REST: read access to pages, collections, assets. Site is blank: 1 empty Home page, 0 collections, 0 assets.
   - Its tools (43): sites_*, pages_* (list/get_content/update_static_content/update_page_settings), collections_*, components_*, asset_tool, element_builder, element_tool, style_tool, variable_tool, de_page_tool, site scripts, ask_webflow_ai, webflow_guide_tool. Call `webflow_guide_tool` once first.
   - Designer-live tools need a "bridge app" that is NOT installed; work through the data/element/style tools.
   - Fix applied: an old standalone `npx` at `~/.npm/bin/npx` shadows Homebrew's and broke the server; the config now points at `/opt/homebrew/bin/npx`. If the server ever fails with "You must supply a command", that is why.

## Booking today (what Webflow must replace)
- Shopify app **Apntly** (Pro, ~$9/mo) on the session products; pay-at-booking; timezone America/Chicago.
- Coach Bastian availability: Mon–Thu 10 AM–9 PM, Fri 10 AM–9 PM, Sat 7 AM–3 PM (site hours are the source of truth).
- 4-pack / 10-pack are prepaid, then scheduled directly with Bastian (no time picker).
- Bastian's email for notifications: borowikseliteathletics@gmail.com. Google Calendar sync was wanted but never connected.
- Webflow has no native scheduling → embed Calendly / Cal.com / Acuity. Paid tiers of those take Stripe payment at booking. **Ryan has not chosen one yet, and Claude cannot create accounts** — build the booking section with a clearly marked embed placeholder and ask Ryan which tool; he creates the account and hands over the embed link.

## Status 2026-09-02 (evening) — what is done, what the build session needs
- **The local `webflow-beast` server cannot build.** npm `webflow-mcp-server` 1.0.0 is the only version; its element/style/asset tools need a Designer "Bridge App" that would have to be built and published as a Designer Extension. The Data API alone cannot create elements.
- **Use the official remote server instead.** Registered as `webflow-beast-v2` (`https://mcp.webflow.com/mcp`, user scope). It has headless `data_element_builder`, `data_whtml_builder`, `data_style_tool`, `data_variable_tool`, `data_assets_tool`, `data_scripts_tool` — no Designer needed. It takes OAuth only (site token rejected). **Ryan must authorize it once** from an interactive `claude` terminal with `/mcp` → webflow-beast-v2 → pick ONLY the B.E.A.S.T. workspace, then start a new session. The claude.ai "Webflow" connector (`mcp__6ee4d03c…`) was checked read-only: it reaches only the MTi site.
- **Assets are uploaded** (all 9, via REST with the site token): ids + CDN URLs in `_webflow-build/assets.json`.
- **Build spec is ready:** `_webflow-build/BUILD-PLAN.md` + one `NN-section.html/.css` pair per section (whtml-builder format: single root, Webflow breakpoints only, no keyframes), `site-head.html` for fonts + ticker keyframes, `preview.html` = the whole thing assembled for a local look (`.claude/launch.json` → `webflow-build-preview`).
- **Decisions confirmed by Ryan ("go", 2026-09-02):** light theme; copy verbatim from the live theme (7 testimonials); schedule/embed placeholder section added before the CTA band; pricing CTAs → `#schedule`; merch static; PDF links stay `#`. Booking tool still unchosen (Calendly / Cal.com / Acuity — Acuity is the only one that sells the packs).
- **B.E.A.S.T. Shopify Admin token now exists** at `~/.beast/shopify/beast.token` (see `~/.beast/shopify/SETUP.md`) for later export/shutdown work. Still never use the Shopify MCP `switch-shop`.

## Guardrails for the build session
- Ryan's standing rule: restate GOAL / DELIVERABLE / SCOPE / ASSUMPTIONS / UNKNOWNS / FIRST MOVE and wait for "go" before building.
- Build only on the B.E.A.S.T. site. Never publish, never connect a domain, never cancel Shopify or Apntly without Ryan's explicit go — those are the irreversible parts.
- Merch section: not shoppable in Webflow (no e-commerce) — reproduce as a static "coming soon"/showcase unless Ryan says otherwise.
- Contact form → Webflow native form (free plan allows it; submissions go to the site's form notifications, set Bastian's email later).
- Keep the copy verbatim from the Liquid/static sources; do not rewrite.
