# Powerhouse Title, LLC — Marketing Website PRD

## Original Problem Statement
Build a professional, single-page scrolling website for "Powerhouse Title, LLC" — a Texas title company — using the supplied JSON for all copy. Highly trustworthy, corporate aesthetic.

## Design Tokens (user-confirmed)
- Typography: Libre Baskerville (headings), Public Sans (body)
- Colors:
  - Backgrounds: white `#ffffff`, deep navy `#131e3d`
  - Header & footer: corporate blue `#063462`
  - Primary CTAs ONLY: copper `#9f6c5c` (hover `#8b5c4d`)
- Sticky top navigation
- Hero: split layout (navy left + real-estate image right)
- Services: CSS grid with subtle card borders
- Awards: dedicated section with gold/copper accent
- Modals: "Submit a deal" (placeholder form) + "Leave Us A Review" (Google/Yelp links)

## User Personas
- Prospective real-estate clients (buyers, sellers, refinancers)
- Real-estate agents / lenders looking to submit a deal
- Existing clients wanting to leave a review

## Architecture
- Single-page React app (no backend used) — pure static marketing site
- Components: Header, Hero, Services, Team, Awards, Reviews, Contact, Footer + 2 modals
- Content centralized in `src/lib/content.js`
- Shadcn `Dialog` for modals; lucide-react for icons

## What's Implemented (initial release)
- Sticky header w/ smooth-scroll anchor nav + mobile drawer
- Split hero (navy left, image right) with credential card overlay
- 5-card services grid + 6th CTA cell on lg screens
- Team section (3 members, headshots, copper title accents)
- Awards section (RED News Real Estate Award, navy bg, copper rule, badge)
- Reviews grid (Yelp, Google, General) + "Leave Us A Review" CTA
- Contact section (address / phone / email cards)
- Footer (corporate blue, sitemap, contact, copyright)
- Submit Deal modal — form → loading → success animation (purely simulated, MOCKED)
- Leave Review modal — Google + Yelp external links
- Full data-testid coverage; 100% frontend test pass rate

## Prioritized Backlog
### P1
- Wire Submit Deal form to a real backend endpoint (FastAPI + MongoDB) so leads are captured
- Social links in footer (Facebook / LinkedIn / Instagram)
- Real map embed in Contact section

### P2
- Blog / Resources section (title-101 articles)
- Client-portal log-in flow for active transactions
- Multi-language support (English / Spanish)

## Notes
- Submit Deal form is intentionally MOCKED client-side per user request (design samples for client review)
