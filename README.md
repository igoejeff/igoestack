# The Igoe Stack — Website

**Goal:** A premium, high-end single-page marketing website for The Igoe Stack — a proven, diversified revenue model for medical practices built by Jeff Igoe / Conscious Health Connections.

---

## 🎨 Design
- Black-background, dark-luxury theme (`#0A0A0A` base)
- Teal/cyan accent (`#00D4D4`) — Insurance-Based
- Gold accent (`#D4A017`) — Cash-Pay
- Fonts: Barlow Condensed (headings) + Inter (body)
- Fully responsive — mobile, tablet, desktop

---

## ✅ Completed Features

### Hero
- Full-screen hero with background image, stats bar, CTAs
- "Conscious Health Connections" badge, scroll indicator

### About Jeff Igoe
- Two-column grid: text + headshot image
- Trust indicators (12 yrs exp, $270M+, 300+ practices, 50 states)

### The Problem
- Video embed with custom thumbnail (`images/video-thumbnail.jpg`)
- 4 problem cards (Single Revenue, Compliance Risk, Acquisition Plateau, No Scalable System)
- Callout CTA → "See the Solution"

### The Solution (Stack Visualization)
- Full-width dark card (`#solution`)
- Logo centered at top
- Insurance-Based Services (HRV Testing, Vein Care, Wound Care, IV Therapy) — teal rows with "Stable Foundation" badge
- Cash-Pay Services (Regenerative Medicine, Peptides, Hormones, Weight Loss, Supplements) — gold rows with "Profit Accelerator" badge
- Legend + CTA buttons (Explore Each Layer / Book a Strategy Call)

### Gateway — How Things Get Into The Igoe Stack
- Section ID: `#gateway`
- **Hybrid Clinic Model white card** — Igoe Score logo (150px), tagline, gold divider, badge trio (Avoid / Approved / Caution) using `images/badge-*.png` with `mix-blend-mode: multiply`
- **Filter Funnel** — "I Filter Out What Doesn't Work" headline, 5-step bubble pipeline (Market Chaos → Initial Screening → Real Testing → Validation → The Igoe Stack), 3-column outcome grid
- **Only the Best Make It In** — 3 gateway badge cards using transparent PNG images with `mix-blend-mode: screen` on dark `#050505` cards:
  - Igoe Avoid (5.2) — red border, REJECTED label
  - Igoe Caution (6.5) — gold border, RISKY/UNPROVEN label
  - Igoe Approved (9.5) — teal border, THE STANDARD tag, larger image (200px)
- **IgoeScore.com link card** — links to https://www.igoescore.com

### The Six Layers / Pillars
- Section ID: `#pillars`
- "Select a layer to explore" animated hint with down-pointing hand icon
- 6 card-style clickable tabs with shimmer hover, active teal glow, TAP micro-badge
- Each tab reveals a content panel with: icon, title, description, bullet points
- Layers: 01 Healthcare Strategy · 02 Patient Acquisition · 03 Revenue Diversification · 04 Content & Branding · 05 Technology Integration · 06 Compliance & Legal

### Results / Social Proof
- 5 animated counters: $270M+, 300+, 18, 50, 12yrs
- **Full-width photo** (`images/results-photo.jpg`) with dark gradient overlay and pull-quote caption
- 3 testimonial cards (Dr. Mendes, Dr. Patel — featured, Dr. Thompson)

### Process (How It Works)
- 5-step zigzag timeline:
  1. Discovery & Assessment
  2. Igoe Score Vetting
  3. Stack Build & Integration
  4. Launch & Optimization
  5. Scale & Expand

### Why The Igoe Stack
- 6-feature grid (Compliance Built-In, Diversified Revenue, Proven Track Record, Turn-Key System, Ongoing Support, Scalable Framework)

### Contact / Get Started
- Contact form (name, email, phone, practice type, message)
- Office/consultation info sidebar
- Form submit handler with success state

### Footer
- Logo, description, quick links, services list, contact info
- "Built on The Igoe Score Standard" badge

---

## 🗂 File Structure

```
index.html              — Main single-page site
css/style.css           — All styles (2,400+ lines)
js/main.js              — Navigation, tabs, counters, animations, form
images/
  logo.png              — Igoe Stack logo
  hero-presentation.jpg — Hero background
  jeff-igoe-consulting.jpg — About section headshot
  igoe-score-logo.png   — Igoe Score logo (used in gateway white card)
  igoe-score-diagram.png — Igoe Score scoring diagram
  badge-avoid.png       — Igoe Avoid badge (transparent PNG)
  badge-caution.png     — Igoe Caution badge (transparent PNG)
  badge-approved.png    — Igoe Approved badge (transparent PNG)
  video-thumbnail.jpg   — Video section poster image
  results-photo.jpg     — Results section full-width photo
```

---

## 🔗 Navigation Links
| Label | Anchor |
|---|---|
| About | #about |
| The Problem | #problem |
| The Solution | #solution |
| The Igoe Score | #gateway |
| The Stack | #pillars |
| Results | #results |
| Process | #process |
| Get Started | #contact |

---

## 📌 Key CSS Variables
```css
--teal:    #00D4D4   /* Insurance-based / primary accent */
--gold:    #D4A017   /* Cash-pay accent */
--black:   #0A0A0A
--dark:    #0D0D0D
--dark-2:  #161616
--dark-3:  #1C1C1C
--white:   #FFFFFF
--off-white: #F5F5F5
--gray:    #888888
--gray-light: #AAAAAA
```

---

## 🚀 Next Steps / Not Yet Implemented
- Replace placeholder video URL with actual embedded video file
- Replace placeholder testimonial names with real client testimonials (with permission)
- Add real contact form backend (email submission endpoint)
- Add Open Graph / social sharing meta tags
- Add favicon

---

## 📤 Deployment
To make the site live, go to the **Publish tab** and click Publish. The site is fully static — no backend required.
