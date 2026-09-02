# B.E.A.S.T. — Webflow build plan (for the session that has `webflow-beast-v2` authorized)

Site id `6a988ff4622d7065ea2aa7fd` · Home page id `6a988ff7622d7065ea2aa86c` · never publish.
Tools: the remote server `webflow-beast-v2` (mcp.webflow.com, v2.0.1) — headless `data_*` tools,
no Designer needed. Call `webflow_guide_tool` once first.

## Already done (2026-09-02, via REST with the site token)
All 9 images are in the site's asset library — ids in `assets.json` here. Nothing else exists on
the site: Home page has 0 nodes, 0 styles, 0 variables, 0 collections.

## Decisions (Ryan "go", 2026-09-02)
- LIGHT theme (matches the live Shopify theme + `_design-reference`). Brand-guide dark palette not used.
- Copy verbatim from `templates/index.json` + section schema defaults (7 testimonials incl. Gabrielle J.).
- Nav/hero/band CTAs → `#pricing` (as live). Pricing-card CTAs → `#schedule` (the booking embed) until a
  booking tool is chosen. Packs stay "contact Bastian" unless Acuity is chosen.
- Booking embed section = the theme's unused `beast-schedule` section, inserted before the CTA band,
  with a clearly labelled placeholder. Contact = native Webflow form. Merch + PDF links = static placeholders.
- Scroll/typing animations dropped. Ticker keeps its CSS scroll via site head code (keyframes are not
  allowed in whtml css).

## Order of operations
1. `data_scripts_tool > set_site_freeform_code` (head) with `site-head.html` — Google Fonts link + the
   ticker keyframes. (Fonts can't be added to Webflow site settings via API; the link tag is the fallback.)
2. `data_variable_tool`: collection "B.E.A.S.T. Brand" — colors bg #f5f6f7, card #ffffff, accent #8AB9E3,
   accent-dark #6C9DC6, text #111111, muted #666666, border #dde3ea; fonts display "Rubik Dirt",
   label "Barlow Condensed", body "Barlow". (Nice-to-have; the CSS below uses literal values so the
   build works without them.)
3. For each file pair `NN-*.html` / `NN-*.css` in order, call `data_whtml_builder > insert_whtml` with
   `parent_element_id` = the page Body root (get it from `data_element_tool > get_all_elements`, depth 0),
   `creation_position: append`, `html` = the .html file, `css` = the .css file. One root element per file.
   `00-base.css` goes with the first insert (nav) — it holds the shared classes.
4. Contact form: `12-contact.html` contains a plain `<form>`. If whtml does not produce a native Webflow
   FormWrapper (check with `data_element_tool > query_elements`), delete it and rebuild that block with
   `data_element_builder` (FormWrapper → FormForm → labels, TextInput ×3, Textarea, FormButton) and
   set the form name "B.E.A.S.T. Contact". Success/error text: see the html comment in the file.
5. Images: whtml `<img src>` points at the CDN `hostedUrl`; afterwards bind each Image element to its
   asset with `data_element_tool > set_image_asset` using `assets.json` ids, so they show in the Asset panel.
6. Map + booking placeholder are `<iframe>`/div. If whtml rejects `<iframe>`, create an HtmlEmbed via
   `data_element_builder` and put the iframe in `data_element_settings_tool > set_settings`.
7. Page settings (`data_pages_tool > update_page_settings`): title
   "B.E.A.S.T. — Borowik's Elite Athletic & Strength Training", SEO description = hero sub copy.
8. Verify with `data_element_tool > get_all_elements` (depth 2) — 17 top-level blocks in order:
   nav, hero, ticker, programs, stats, about, gallery, why, stories, spotlight, testimonials, pricing,
   merch, faq, location, schedule, book-band, contact, footer.
9. Publish to the **Webflow subdomain only** (`data_sites_tool > publish_site` with
   `publishToWebflowSubdomain: true`, no custom domains). Ryan approved this 2026-09-02: "push it to
   Webflow, leave it on that webflow domain." Never add a custom domain. Report the b-e-a-s-t.webflow.io URL.

## whtml rules (from the v2 guide)
- html: exactly one root element, no `<style>`. css: raw rules, no `@keyframes`, only these media
  queries: `(max-width: 991px)` tablet, `(max-width: 767px)` mobile landscape, `(max-width: 479px)` portrait.
- The design's 768px/480px/1024px breakpoints were mapped to 767/479/991.
