# B.E.A.S.T. — Launch Checklist

**Updated June 10, 2026 — most of this is DONE and verified.** Store: `mt1rnf-e1.myshopify.com`.

## ✅ Done & verified (don't redo)
- All 6 products imported, **Active**, and published to the **Online Store** channel (this was the hidden blocker — products were Active but not on the Online Store channel until June 10).
- All 4 bookable sessions configured in Apntly (correct durations, payment required at booking).
- Booking flow verified end-to-end: homepage pricing card → product page → **"Schedule Your Time"** → calendar modal with real time slots (timezone America/Chicago) → checkout.
- Homepage pricing buttons link to the right products by handle (60-min / 45-min / 30-min / consult / 4-pack / 10-pack).
- Apntly team member renamed **"Coach Bastian"** (was "Default" — visible to clients in the booking widget).
- Availability Mon–Thu set to **10 AM – 9 PM** (site hours are the source of truth).

## 🔲 Remaining (in order of importance)

### 1. Finish weekly hours (~30 seconds)
Apntly app → **Team** → **Coach Bastian** → Weekly Hours:
- **Friday:** change "To" from 07:00 PM → **09:00 PM**
- **Saturday:** click **Add Slot** → set **07:00 AM – 03:00 PM**
- Click **Save** (top bar).

### 2. Connect Google Calendar (before launch — prevents double-booking)
Same page (Team → Coach Bastian), scroll to **Calendar Integration** → **Connect your Google Calendar** → sign in with Bastian's Google account.
- Until this is connected, **Apntly cannot see his existing calendar** and will happily book clients over anything already scheduled.
- Once connected it's two-way: busy events in Google block those Apntly slots; Apntly bookings appear on his Google Calendar. (Cancel/reschedule must be done in Apntly, not by editing the Google event.)

### 3. Know the billing
Apntly is on the **Pro plan — free trial converts to $9/month around June 12, 2026**. Pro is the right plan: the Free tier allows only 1 service (you have 4) and no calendar integration.

### 4. Before launch
- Switch the Apntly team-member **email** from Ryan's to `borowikseliteathletics@gmail.com` (Team → Coach Bastian) so Bastian gets booking notifications. Optionally use **Send Account Link** to give him his own bookings dashboard.
- Remove the storefront **password** (Online Store → Preferences) when ready to go live.

## How packs work (by design)
The **4-Session and 10-Session packs are prepaid** — normal checkout, no time picker. Buyers pay once, then set their weekly schedule directly with Bastian (matches the "schedules are formed weekly" policy). Bastian can log those sessions manually in Apntly (Bookings) so they sync to his calendar.
- Optional later: Apntly Pro lists a **"Multiple Timeslot Selection"** feature that may let pack buyers pick several slots at purchase — needs testing before relying on it.
- Optional copy fix: pack descriptions currently say "book your sessions online," which overpromises — reword to "schedule your sessions directly with Coach Bastian."

## Optional polish (send the bits and it gets wired)
- Liability Waiver / Athlete Intake / Medical Info **PDFs** for the Contact section.
- **Social links** (Instagram/Facebook) for the footer.
- **Merch** products (sizes + prices + photos) if it should be shoppable.
