# B.E.A.S.T. — Finish Setup Checklist

Everything in the theme is wired. This is the ~10 minutes of clicks in your Shopify admin to take it live.
The homepage pricing buttons auto-link to the products below **by handle** — once a product is **published**, its
button becomes a real booking page. Until then, the button safely points to your Contact section (never a dead link).

The booking engine is **Apntly** (already installed). Each session is a Shopify product; Apntly adds the date/time
picker + payment to its product page. Packs are prepaid and scheduled afterward.

---

## The 6 products (handles must match exactly)

| Handle | Title | Price | Apntly booking? |
|---|---|---|---|
| `60-minute-training-session` | 60-Minute Training Session | $65 | ✅ Yes — 60 min |
| `45-minute-training-session` | 45-Minute Training Session | $55 | ✅ Yes — 45 min |
| `30-minute-training-session` | 30-Minute Training Session | $40 | ✅ Yes — 30 min |
| `goal-setting-consultation`  | Goal-Setting Consultation  | $50 | ✅ Yes — 45 min |
| `4-session-pack`             | 4-Session Training Pack    | $220 | ❌ No (prepaid) |
| `10-session-pack`            | 10-Session Training Pack   | $500 | ❌ No (prepaid) |

---

## Step 1 — Reconcile the products you already created
You said some session/package products already exist. Pick **one** path so nothing duplicates:

- **Cleanest:** If your existing ones were experiments with no real orders, delete them (Products → select → Delete),
  then do Step 2 with a clean slate.
- **Keep them:** Open each existing product → *Search engine listing* → **Edit** → set the **URL handle** to match the
  table above (e.g. `60-minute-training-session`). Then the homepage links to your existing product. You can skip
  importing that row.

> Tip: Shopify's import matches on **handle**. Same handle = it updates that product. Different handle = it creates a
> new one (a duplicate). So matching handles is the whole game.

## Step 2 — Import the products
1. Admin → **Products → Import**.
2. Upload `setup/beast-products-import.csv`.
3. Check **“Overwrite products with the same handle.”**
4. Import. All 6 are created as **Draft** (so nothing goes live half-finished).

## Step 3 — Configure Apntly (the 4 session products only)
1. Open the **Apntly** app.
2. Enable booking on: 60-Minute, 45-Minute, 30-Minute Training Sessions, and Goal-Setting Consultation.
3. Set each one’s **duration** (60 / 45 / 30 / 45 min).
4. Set **availability** — the days/times Bastian actually coaches, a buffer between sessions, and how far out clients
   can book.
5. Leave the **4-Session** and **10-Session** packs OFF in Apntly (they’re prepaid, not time-slot bookings).

## Step 4 — Connect a calendar (recommended)
In Apntly, connect Bastian’s **Google Calendar** so booked sessions sync both ways and block double-bookings.

## Step 5 — Publish
Set all 6 products to **Active** and published to the **Online Store**. The homepage buttons light up automatically.

## Step 6 — Test the flow
1. Open the live site → **Pricing** → click **Book Single Session**.
2. On the 60-Minute product page, confirm the **Apntly calendar shows**, you can pick a time, and check out.
3. **If the calendar does NOT appear:** Online Store → Themes → Customize → switch the template dropdown to
   **Products** → Add block → add the **Apntly “Booking”** app block under the price → Save. (The global app embed is
   already on; some setups also need this per-template block.)

---

## Optional polish (needs a file or detail from you — tell me and I’ll wire it)
- **Forms & Documents** (Liability Waiver, Athlete Intake, Medical Info) in the Contact section are placeholders with
  no files attached. Send me the 3 PDFs and I’ll upload + link them.
- **Social links** in the footer (Instagram / Facebook / Twitter) are empty. Send the URLs.
- **Merch** (tee / hoodie / cap / bag) currently says “Contact Bastian to purchase.” If you want it shoppable, send
  sizes + prices + photos and I’ll build those products too.
- **Team Training** correctly routes to the Contact form (custom pricing) — no checkout product needed.

## How pack-buyers schedule
The 4- and 10-pack descriptions already tell buyers to **book sessions online after purchase or set a recurring weekly
time with Coach Bastian** — matching your “schedules formed weekly” approach. If you’d rather Apntly track pack
“credits” automatically, check whether your Apntly plan includes a Packages/Memberships feature and I’ll adapt the
wording.
