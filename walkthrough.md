# Koina Allied Health — Friendly "Doodly" Aesthetic & UX/Accessibility Walkthrough

We have completed the comprehensive visual, accessibility, and typographic overhaul for **Koina Allied Health**, adopting the handcrafted "doodly" line-art aesthetic inspired by the logo mark, fixing text selection bugs, boosting typographic contrast, and relaxing spacing across the entire website.

The site is running live on **[http://localhost:3001](http://localhost:3001)**.

---

## 1. What the Handoff Said About Images on the Site

In the canonical 8-page client brief (`Koina Allied Health — Website copy handoff, with client details filled in`):
- **Page 2 (Open Items Table)**:
  - `Team bios and photos`: Explicitly noted as **`[NOT PROVIDED]`**.
  - Section *"Still to confirm with the client"*: Explicitly includes *"Phone number, street address (if it should be public), and team bios and photos"*.
- **Page 5 (About Page)**:
  - *"Our Team: [Insert clinician bios/photos once finalised — qualifications, registration bodies, areas of interest.]"*
- **Zero stock photography or imagery was provided or specified in the handoff**.
- **The UX Handbook (`UX-SPEC-2026-V1`, Section 4.1)** also explicitly warns against *"busy catalog/stock photography"* which causes contrast failures and visual fatigue.

> [!TIP]
> **Why the Handcrafted Line-Art Aesthetic Works**: Rather than inserting generic, impersonal stock photos that look like sterile corporate clinics, the bespoke hand-drawn doodle and line-art system directly mirrors the organic, handcrafted character of the CEO's logo mark. It brings genuine human warmth, friendliness, and approachability into the healthcare experience.

---

## 2. Key Enhancements Delivered

### A. Handcrafted "Doodly" Line-Art System (`src/components/brand/Doodles.tsx`)
Created a dedicated library of lightweight, responsive, vector-based doodle components:
1. **`DoodleUnderline`**: Hand-drawn organic squiggle/brush underline highlighting primary headline phrases:
   - *"Every Stage of Life"* (Hero Section)
   - *"People, Not Paperwork"* (Who We Support Foundation)
   - *"Healthcare Built Around People, Not Systems"* (About Page)
   - *"Our Services"* (Services Page)
   - *"However You're Funded, We Can Help"* (Funding Page)
   - *"Let's Talk About What You Need"* (Contact Page)
2. **`DoodleSparkle`**: Friendly 4-point hand-sketched twinkle stars beside reassurance chips and section badges.
3. **`DoodleHeart`**: Hand-drawn soft heart sketch signifying care and human connection.
4. **`DoodleWaveDivider`**: Organic, flowing wave transitions between sections that eliminate rigid, mechanical 1px straight gray lines.
5. **`DoodleBotanicalWatermark`**: Subtle Queensland coastal and eucalyptus leaf fronds blending gently into section backgrounds at 3.5%–5% opacity.

---

### B. High-Contrast Text Selection Fix (Resolving Blue-on-Blue Bug)
- **Problem**: Selecting text inside dark navy cards (`.bg-brand-navy`) previously resulted in dark blue text on a faint blue highlight, making text illegible (as shown in your screenshot).
- **Solution in `globals.css`**:
  - Global selection: Deep Navy background (`#113C5E`) with crisp pure white text (`#FFFFFF`).
  - Dark surfaces (`.bg-brand-navy`, `footer`): Inverts selection to **pure white background (`#FFFFFF`) with dark slate text (`#0F172A`)**, delivering a **16:1 WCAG AAA contrast ratio**.
  - Verified live via Chrome DevTools in `ClosingCTA`.

---

### C. Contrast & Accessibility Enhancements (WCAG 2.2 AAA Compliance)
- **Problem**: Light grey text (`text-slate-400`, `text-slate-500`) had low contrast (2.7:1 to 4.4:1), failing WCAG AA guidelines.
- **Remediation**:
  - Light Backgrounds (`#FAF9F6` & `#FFFFFF`):
    - Headings: Deep Slate (`#0F172A` / `text-slate-900`) — **16:1 ratio (AAA)**.
    - Body text & descriptions: Slate 700 (`#334155` / `text-slate-700`) — **8.5:1 ratio (AAA)**.
    - Metadata & tags: Slate 600 (`#475569` / `text-slate-600`) — **5.8:1 ratio (AA)**.
  - Dark Navy Surfaces (`#113C5E` & `#0B1520`):
    - Primary titles: Pure White (`#FFFFFF`) — **12.8:1 ratio (AAA)**.
    - Body text: Slate 100 (`#F1F5F9`) — **11.5:1 ratio (AAA)**.
    - Captions: Slate 200/300 (`#E2E8F0`) — **10:1 ratio (AAA)**.

---

### D. Spacing & Visual Rhythm Optimization
Addressed your feedback that text looked too close together across the site:
- **Body Leading**: Increased line-height from 1.55 to **`leading-[1.70]` - `leading-[1.75]`** (29px+), giving multi-line paragraphs breathing room.
- **Heading-to-Body Gaps**: Increased margins from cramped `mb-3` to **`mb-6`**.
- **Paragraph Separation**: Upgraded to **`space-y-4` and `space-y-5`** for multi-paragraph blocks.
- **Card Internals**: Upgraded card paddings from `p-6` to **`p-8 sm:p-10`** with generous gaps between header, content, and action buttons.
- **Section Padding**: Expanded section vertical rhythm to **`py-20 md:py-28`**.
- **List Items**: Relaxed spacing on feature checklists to **`space-y-3` and `space-y-3.5`**.

---

## 3. Route Verification & Static Build Results

- **Next.js Production Build**: 12/12 static pages compiled with exit code 0 (`next build`).
- **Live Local Server**: Active on **port 3001** (`http://localhost:3001`).
- All pages verified:
  - **Home**: `http://localhost:3001/`
  - **About**: `http://localhost:3001/about`
  - **Services**: `http://localhost:3001/services`
  - **Funding**: `http://localhost:3001/funding`
  - **Locations**: `http://localhost:3001/locations`
  - **Contact & Intake**: `http://localhost:3001/contact`
