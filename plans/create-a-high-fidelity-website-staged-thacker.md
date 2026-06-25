# Plan: WorkXD.com WorkXD

## Context

Build a full multi-page website for WorkXD.com — a platform that connects MBA students with real business projects from in-house brands. The site should feel premium and conversion-focused, inspired by Coursera and LinkedIn Learning. The app currently has an empty `App.tsx`. There are no @make-kits packages; shadcn/ui components in `src/app/components/ui/` are the primary UI library.

---

## Architecture

- **Routing**: React Router v6 (already installed) for 14 pages
- **Font**: Plus Jakarta Sans via Google Fonts in `src/styles/fonts.css`
- **Colors**: Add WorkXD brand tokens to `src/styles/theme.css` as CSS custom properties
- **State**: Local React state only (no backend needed — pure frontend mockup)

---

## Brand Tokens to Add (theme.css)

```css
--workxd-blue: #0056D2;
--workxd-dark: #1F1F1F;
--workxd-bg: #F8F9FB;
--workxd-card: #FFFFFF;
--workxd-border: #E5E7EB;
--workxd-green: #22C55E;
--workxd-orange: #F97316;
```

---

## File Structure

```
src/app/
├── App.tsx                          ← Router setup + font application
├── components/
│   ├── ui/                          ← Existing shadcn components (Button, Card, etc.)
│   ├── Navbar.tsx                   ← Header with dropdowns
│   ├── Footer.tsx                   ← Site footer
│   ├── ProjectCard.tsx              ← Reusable project card
│   ├── DomainCard.tsx               ← Domain category card
│   ├── TestimonialCard.tsx          ← Student testimonial
│   ├── PricingCard.tsx              ← Pricing tier card
│   ├── FAQAccordion.tsx             ← Accordion FAQ item
│   ├── CertificateMockup.tsx        ← Certificate visual
│   ├── OutcomeCard.tsx              ← What-you-get card
│   ├── BlogCard.tsx                 ← Blog article card
│   └── SectionWrapper.tsx          ← Consistent section padding
└── pages/
    ├── HomePage.tsx
    ├── ProjectsCatalogue.tsx
    ├── DomainPage.tsx               ← Template using Marketing as example
    ├── ProjectPage.tsx              ← Template with mock Go-to-Market project
    ├── HowItWorks.tsx
    ├── PricingPage.tsx
    ├── StudentOutcomes.tsx
    ├── CertificatePage.tsx
    ├── CVPointersPage.tsx
    ├── BlogPage.tsx
    ├── FAQPage.tsx
    ├── AboutPage.tsx
    ├── ContactPage.tsx
    └── BrandsPage.tsx
```

---

## Pages — Content Outline

### 1. HomePage.tsx
- **Hero**: Headline "Get Real MBA Experience Before You Graduate", subheadline, two CTAs (Browse Projects / View Sample Certificate), right-side dashboard mockup using styled divs
- **Trusted By**: Logo strip (6 brand placeholders: MarketSpark, FinEdge, PeopleFirst, OpsFlow, InsightIQ, StratLab), 4 credibility metrics (200+ projects, 6 domains, 5000+ enrolled, 3000+ certificates)
- **Featured Projects**: 6 ProjectCard components in a 3-col grid
- **Explore By Domain**: 6 DomainCard components
- **How WorkXD Works**: 5-step timeline
- **What You'll Get**: 4 OutcomeCard components (Certificate, CV Points, Portfolio, Interview Stories)
- **Student Success Stories**: 3 TestimonialCard components
- **Partner Brands**: Logo showcase
- **Pricing Preview**: 3 PricingCard components (Starter/Pro/Institutional)
- **Final CTA**: "Build Experience Before Recruiters Ask For It"

### 2. ProjectsCatalogue.tsx
- Search bar
- Sidebar filters (Domain, Difficulty, Duration, Skills, Certificate)
- Project grid (12 cards) with filter state

### 3. DomainPage.tsx (Marketing template)
- Domain hero with MarketSpark branding
- What You'll Learn section
- Skills chips grid
- Featured 4 project cards
- Student outcomes stats
- Certificate preview
- Testimonials
- CTA

### 4. ProjectPage.tsx (Go-to-Market Strategy template)
- Left column: project details sticky sidebar (title, badges, CTA, price)
- Right content: Problem Statement, Objective, Deliverables, Skills, Tools, CV Bullets, Sample Deliverables, Certificate mockup, About Brand, Reviews, FAQ, Final CTA

### 5. HowItWorks.tsx
- Visual step-by-step timeline (5 steps)
- Screenshots/mockups per step
- Benefits below

### 6. PricingPage.tsx
- 3 pricing cards (Starter: ₹999, Pro: ₹2499, Institutional: Custom)
- Feature comparison table
- FAQ section
- CTA

### 7. StudentOutcomes.tsx
- Hero + 4 outcome overview cards
- Before/After resume comparison
- Sample CV bullets by domain (tabbed)
- LinkedIn showcase mockup
- Portfolio deliverables gallery
- Certificate showcase
- Interview readiness Q&A
- Testimonials
- CTA

### 8. CertificatePage.tsx
- Certificate hero
- Large certificate mockup (styled HTML)
- Co-branding explanation
- Verification process steps
- FAQ
- CTA

### 9. CVPointersPage.tsx
- Hero
- Why Recruiters Care section
- Sample CV bullets (domain tabs)
- Before/After comparison
- Downloadable layout CTA
- CTA

### 10. BlogPage.tsx
- Featured article (large card)
- Category filter tabs
- 6 blog article cards grid
- Newsletter signup

### 11. FAQPage.tsx
- Hero
- Accordion FAQ grouped by category (Projects, Certificates, Pricing, Refunds, Eligibility, Resume Points, Support)

### 12. AboutPage.tsx
- Mission & vision
- Why WorkXD Exists narrative
- Team section (4 placeholder members)
- Roadmap timeline
- CTA

### 13. ContactPage.tsx
- Contact form (name, email, message, subject)
- Email/phone/WhatsApp info
- Partnership inquiry form

### 14. BrandsPage.tsx
- Hero
- 6 in-house brand cards (MarketSpark, FinEdge, PeopleFirst, OpsFlow, InsightIQ, StratLab)
- Co-branded certificate examples
- How Co-Branding Works steps
- Partner benefits
- CTA

---

## Shared Components Detail

### Navbar.tsx
- Logo "WorkXD" in primary blue
- Links: Explore ▼ (dropdown), How It Works, Outcomes ▼ (dropdown), Blog
- Right: Login (ghost), Sign Up (outline), Browse Projects (primary orange CTA)
- Explore dropdown: 6 domain links + View All
- Outcomes dropdown: Certificates, CV Pointers, Student Outcomes
- Mobile: hamburger menu

### Footer.tsx
- 5-column layout: Explore, Outcomes, Company, Partnerships, Legal
- Bottom: copyright + social icons

### ProjectCard.tsx
- White card with domain color badge, title, brand logo, duration, difficulty badge, skills chips, certificate badge, "View Project" button

### DomainCard.tsx
- Icon + domain name + description + project count + "Explore →" link
- Hover: blue border

### PricingCard.tsx
- Card with plan name, price, features list (checkmarks), CTA button
- Pro card highlighted with blue border and "Most Popular" badge

---

## Implementation Order

1. `src/styles/fonts.css` — add Plus Jakarta Sans import
2. `src/styles/theme.css` — add WorkXD brand color tokens
3. `src/app/App.tsx` — React Router BrowserRouter setup with all 14 routes
4. Shared: `Navbar.tsx`, `Footer.tsx`, `SectionWrapper.tsx`
5. Atomic components: `ProjectCard`, `DomainCard`, `TestimonialCard`, `PricingCard`, `FAQAccordion`, `CertificateMockup`, `OutcomeCard`, `BlogCard`
6. Pages in order: `HomePage` → `ProjectsCatalogue` → `DomainPage` → `ProjectPage` → remaining 10 pages

---

## Reusable Shadcn Components to Use

- `src/app/components/ui/button.tsx` — all CTAs and links
- `src/app/components/ui/card.tsx` — project cards, domain cards, pricing cards
- `src/app/components/ui/badge.tsx` — domain badges, difficulty badges, skill chips
- `src/app/components/ui/accordion.tsx` — FAQ sections
- `src/app/components/ui/input.tsx`, `textarea.tsx` — forms
- `src/app/components/ui/tabs.tsx` — domain filters, CV section tabs
- `src/app/components/ui/separator.tsx` — section dividers
- `src/app/components/ui/avatar.tsx` — testimonial photos

---

## Styling Notes

- Apply `font-family: 'Plus Jakarta Sans', sans-serif` globally via theme.css or body style
- Use `bg-[#F8F9FB]` for page backgrounds, `bg-white` for cards
- Primary blue `#0056D2` for links, headings, badges
- Orange `#F97316` only for primary CTA buttons
- Section padding: `py-16 md:py-24`
- Max container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- No dark mode, no flashy gradients — clean white/light gray aesthetic

---

## Verification

After implementation:
1. Click through all 14 nav links and verify routing
2. Check Navbar dropdown menus open/close correctly
3. Verify mobile responsive layout (hamburger menu, stacked cards)
4. Confirm brand colors render correctly (blue CTAs, orange primary CTA, green success badges)
5. Test filter interactions on Projects Catalogue page
6. Check FAQ accordion open/close behavior
7. Verify contact form renders (no submission needed — mockup)
