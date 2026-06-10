# Managing Reviews on the B.E.A.S.T. Website

The testimonials on the homepage are **theme blocks** — no code needed. Anyone with access to the
Shopify admin can add, edit, remove, or reorder them in a couple of minutes.

## Add / edit / remove a review

1. Shopify admin → **Online Store → Themes** → click **Customize** on the live theme.
2. In the left sidebar, scroll to the **B.E.A.S.T. Testimonials** section and click it.
3. You'll see one **Review** block per testimonial:
   - **Add:** click **⊕ Add Review**, paste the quote in *Text* and the credit in *Author*
     (match the style: `— First L., Parent of …`).
   - **Edit:** click any Review block and change its text.
   - **Remove:** click the block → **Remove block** at the bottom.
   - **Reorder:** drag the ⋮⋮ handle next to a block.
4. Click **Save** (top right). Changes are live immediately.

The same pattern works for the **Stories** (athlete success stories) and **FAQ** sections — they're
all blocks in the same editor.

## House style for review cards

- Keep cards to **2–4 sentences** — pull the strongest verbatim lines from the full review.
- Credit format: `— Gabrielle J., Parent of Two Baseball Players` (first name + last initial; no
  full last names or emails on the site).
- The full, unedited reviews are archived in `beast_testimonials.json` in this project (kept out of
  GitHub because it contains emails/PII).

## Giving Bastian access (one-time)

So Bastian can do this himself without touching anything else:

1. Shopify admin → **Settings → Users** → **Add staff**.
2. Enter his email (borowikseliteathletics@gmail.com), and under permissions select only
   **Online Store → Themes** (optionally also Blog posts/Pages).
3. He accepts the email invite, logs in, and follows the steps above.

> Note: staff seats depend on the Shopify plan (Basic includes 2). If the seat limit is an issue,
> the simplest alternative is he emails the review to Ryan — the archive + site get updated in one pass.

## Want it even easier later?

If editing in the theme customizer ever feels clunky, the upgrade path is Shopify **metaobjects**
(Content → Metaobjects): a "Testimonial" entry type that Bastian edits like simple form rows, with
the section reading them automatically. Ask Claude to wire it — roughly an hour of theme work.
