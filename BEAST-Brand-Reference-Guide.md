# B.E.A.S.T. — Brand Reference Guide

**Borowik's Elite Athletic & Strength Training**
Prepared April 2026 | Confidential — For Internal Use

---

## Brand Overview

**Brand Name:** B.E.A.S.T. — Borowik's Elite Athletic & Strength Training

**Founder:** Bastian Borowik — Personal Trainer & Youth Athletic Coach

**Brand Promise:** Elite-level strength, speed, and sport-specific coaching that builds confident, capable athletes — from youth players to adults chasing real results.

### Target Audiences

- **Youth Athletes (ages 8–18):** Baseball, softball, basketball, football
- **Parents / Guardians:** Decision-makers booking and paying for youth sessions
- **Adults:** Personal training, strength & conditioning clients

### Core Sports & Services

- **Baseball & Softball (primary youth focus)** — hitting, fielding, throwing mechanics, position-specific training
- **Basketball** — footwork, shooting form, athleticism development
- **Football** — speed, agility, sport-specific strength for skill positions
- **Personal Training** — 1-on-1 adult strength and conditioning
- **Speed & Agility** — explosive quickness, lateral movement, conditioning (all ages)

### Brand Personality

The B.E.A.S.T. brand walks a deliberate line: dark, intense, and athletic enough to fire up competitive athletes — but trustworthy, professional, and approachable enough that parents feel confident booking their kids. Think predator energy with a coach's heart.

---

## Color Palette

The B.E.A.S.T. color system is built directly from the Carolina Blue logo. All digital and print materials should adhere to these exact values.

| Swatch | Color | Hex | Usage |
|--------|-------|-----|-------|
| ⬛ | **Near Black** | `#0A0A0A` | Primary background, base layer for all dark layouts |
| 🩶 | **Steel Gray** | `#8A8F94` | Claw marks, metallic elements, secondary text, borders, dividers |
| 🔵 | **Carolina Blue (Primary)** | `#7EB8E8` | Primary accent: CTAs, headings, highlights, logo text, glowing eyes. The signature brand color. |
| 🔷 | **Deep Carolina Blue** | `#4A90C4` | Secondary accent for depth: hover states, secondary borders, gradient endpoints, card accents |
| ⬜ | **Ice White** | `#E8F2FA` | Primary body text on dark backgrounds, headings, labels. Slightly cool-tinted white. |

### Color Usage Rules

✅ Always use `#0A0A0A` as the base background for web and digital
✅ Carolina Blue (`#7EB8E8`) is the primary accent — use for CTAs, active nav states, highlighted text, and section accents
✅ Deep Blue (`#4A90C4`) is for depth only — hover states, secondary borders, alternating card accents
✅ On Carolina Blue backgrounds, use dark text (`#0A0A0A`) for contrast

❌ Never use Carolina Blue as a background fill for large areas — reserve it for accents, CTAs, and ticker bands
❌ Never place light text on Carolina Blue without testing contrast
❌ Do not introduce new accent colors without updating this guide

---

## Typography

The B.E.A.S.T. type system uses three fonts chosen to match the aggressive, brushstroke energy of the logo while maintaining readability. All are available free via Google Fonts.

### Logo Font Match

The B.E.A.S.T. wordmark in the logo uses a bold, distressed brushstroke style with ragged, torn edges. The closest identified match is the **Beast font by Tugcu Design** (paid, ~$15–20, available on [Creative Market](https://creativemarket.com/MehmetRehaTugcu/352147-Beast-Brush-Font) and [Fontspring](https://www.fontspring.com/fonts/tugcu-design-co/beast)). For the website, we use **Rubik Dirt** — a free Google Font with a distressed, gritty texture that echoes the logo's raw, weathered energy.

### Font Stack

| Font | Role | Weights | Usage |
|------|------|---------|-------|
| **Rubik Dirt** | Display / Headlines | 400 (Regular only) | Hero headlines, section titles, stat numbers. Distressed, gritty texture that matches the logo energy. Always uppercase. |
| **Barlow Condensed** | Labels / Navigation | 400, 600, 700 | Nav links, CTAs, section labels, eyebrows, card titles. Uppercase with letter-spacing 2–5px. |
| **Barlow** | Body Text | 400, 500 | Body copy, descriptions, form inputs. Sentence case. Line-height 1.6–1.8. |

### Alternative Display Fonts (Google Fonts, Free)

If Road Rage doesn't feel right for a specific use case, these are the next-closest free options:

- **[Road Rage](https://fonts.google.com/specimen/Road+Rage)** — bold brushstroke, grunge energy, aggressive
- **[Protest Guerrilla](https://fonts.google.com/specimen/Protest+Guerrilla)** — rough, hand-painted brush strokes with raw edge
- **[Knewave](https://fonts.google.com/specimen/Knewave)** — bold, organic, hand-drawn feel (slightly softer)

### Type Scale (Web)

- **Hero Headline:** Rubik Dirt, 5.5–7rem, uppercase, color `#FFFFFF` or `#7EB8E8`
- **Section Title:** Rubik Dirt, 2.5–3rem, uppercase, color `#FFFFFF`
- **Eyebrow / Label:** Barlow Condensed 600, 0.7–0.85rem, uppercase, letter-spacing 3–5px, color `#7EB8E8`
- **Nav Links:** Barlow Condensed 600, 0.85rem, uppercase, letter-spacing 2px, color `#AAAAAA` (inactive) / `#7EB8E8` (active)
- **Body:** Barlow 400, 0.9–1.05rem, sentence case, line-height 1.6–1.8, color `#888888` (on dark) or `#555555` (on cards)
- **CTA Button:** Barlow Condensed 700, 0.85–0.9rem, uppercase, letter-spacing 3px

### Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@400;500&display=swap" rel="stylesheet">
```

### CSS Variables

```css
:root {
  --color-bg: #0a0a0a;
  --color-steel: #8a8f94;
  --color-blue: #7eb8e8;
  --color-blue-deep: #4a90c4;
  --color-text: #e8f2fa;
  --color-muted: #888888;
  --font-display: 'Rubik Dirt', system-ui;
  --font-label: 'Barlow Condensed', sans-serif;
  --font-body: 'Barlow', sans-serif;
}
```

---

## Logo Usage

### Primary Logo

The **Carolina Blue** version on a black (`#0A0A0A`) background is the primary logo. This is the version used across the website, social media, and all primary brand touchpoints.

**File:** `Logos/carolina_blue.jpg`

The logo features: steel gray claw marks ripping diagonally across the composition, two glowing Carolina Blue eyes peering through the tears, the B.E.A.S.T. wordmark in a brushstroke style, and the full name "Borowik's Elite Athletic & Strength Training" on a Carolina Blue banner beneath.

### Logo Colorways Available

All variants share the same claw-mark composition with different accent colors:

| Variant | Accent Color | Background | File |
|---------|-------------|------------|------|
| **Carolina Blue (PRIMARY)** | `#7EB8E8` | Black | `carolina_blue.jpg` |
| Green | Lime/neon green | Black | `1000000564.jpg` |
| Red | Red | White | `1000000589.jpg` |
| Gold | Gold/black | White | `1000000590.jpg` |
| Purple | Purple | White | `1000000591.jpg` |
| Pink | Pink | White | `1000000592.png` |

**Apparel photos:** `1000001452.jpg` (green), `1000001453.jpg` (purple), `1000001454.jpg` (pink), `1000001456.jpg` (Carolina blue), `1000001458.jpg` (gold/orange)

Alternate colorways can be used for team-specific merchandise, seasonal promotions, or event branding — but the Carolina Blue version is always the default for the website and primary marketing.

### Clear Space & Minimum Size

Maintain clear space equal to the height of the "B" character on all sides of the logo. Minimum display size: 120px wide for digital, 1.5 inches wide for print.

### Logo Don'ts

❌ Do not stretch, rotate, or distort the logo
❌ Do not place the dark-background logo on a light background (use white-background variants instead)
❌ Do not add drop shadows, outlines, or effects to the logo
❌ Do not recreate or redraw the claw marks — always use the original artwork
❌ Do not separate the eyes from the claw marks or use them independently

---

## Tone & Voice

### Brand Voice Summary

B.E.A.S.T. speaks like a coach who's been there: direct, confident, motivating — never arrogant. The tone is intense enough to get athletes fired up, but grounded enough that parents trust Bastian with their kids.

### Voice Attributes

- **Direct & Confident:** Short, punchy sentences. No fluff. "Train Like A Beast." not "We offer comprehensive athletic training solutions."
- **Motivating, Not Intimidating:** Push athletes to be their best without gatekeeping. Every skill level is welcome.
- **Parent-Trustworthy:** Professional enough that a parent sees safety, structure, and real coaching — not just hype.
- **Athletic & Real:** Speak the language of the sport. Mechanics, reps, footwork — not corporate buzzwords.

### Example Copy

- **Hero headline:** "Train Like A Beast."
- **Sub-headline:** "Elite strength, speed, and sports performance coaching for youth athletes and adults."
- **CTA band:** "Ready to unlock your potential?"
- **Service description:** "Youth skills development — hitting, fielding, throwing mechanics, and position-specific training."

---

## Web Design System

### Layout Framework

Dark-mode-first design built on a 1440px desktop canvas with 80px horizontal padding. Content is structured in clearly defined horizontal sections with subtle borders (`rgba(100, 160, 220, 0.1)`) separating them.

### Key UI Patterns

- **Sport Cards:** Dark card (`#111`) with a 3px left border in Carolina Blue, containing sport name and meta tags
- **CTA Buttons — Primary:** Carolina Blue fill with dark text (`#0A0A0A`)
- **CTA Buttons — Outline:** Transparent with Carolina Blue border and text
- **Accent Bands:** Full-width Carolina Blue background strips with dark text for tickers and CTA sections
- **Stat Blocks:** Large Rubik Dirt numbers in Carolina Blue with small uppercase labels beneath
- **Grid Overlay:** Subtle repeating grid lines at very low opacity (`rgba(100, 160, 220, 0.04)`) for texture on hero sections
- **Section Labels:** Small uppercase eyebrow text in Carolina Blue (0.72rem, letter-spacing 5px) above section titles

### Website Sections

Navigation → Hero (with sport cards sidebar) → Ticker Strip → Programs/Services Grid → Stats Bar → About → Booking/CTA → Footer/Contact

### Booking Integration

Embed Cal.com, Acuity Scheduling, or similar. Bastian sets his availability; clients select a program, pick a time slot, and pay online. The booking CTA should be prominent and accessible from multiple touchpoints (nav button, hero CTA, dedicated booking section, footer CTA band).

### Technical Stack

Pure HTML / CSS / JS — no frameworks. Hosted on Netlify or similar static hosting. Fast, clean, zero dependencies. Bastian will rarely edit the site himself, so maintainability is secondary to performance and design fidelity.

---

## Website Concepts on File

| Concept | Type System | Key Features |
|---------|------------|--------------|
| **Concept A** (dark/light) | Bebas Neue + Barlow Condensed + Barlow | Grid-overlay hero, sport cards sidebar, ticker strip. Closest to brand direction. **Note:** Update Bebas Neue → Road Rage for production. |
| **Concept B** (dark/light) | Anton + DM Sans | Hexagonal badge, numbered program grid, inline booking form. |
| **Concept C** (dark/light) | Oswald + Inter | Outlined text hero, minimal sidebar, strong grid structure. |

---

*End of Brand Reference Guide*
