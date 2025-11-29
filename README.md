This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

================================================================================
LiveHindustan News Portal Clone – Project Documentation
================================================================================

## PART A: REQUIREMENTS IMPLEMENTATION

### 1. Layout & UI
I built a complete clone of LiveHindustan.com with these main sections:
- **Header:** TopBar with logo and links, Navbar with categories
- **Main content:** Trending topics, top stories, category sections
- **Sidebar:** Viral news
- **Footer:** Multi-section with links and social media

All components are fully responsive for mobile & desktop.

### 2. Data Source
I used mock JSON data (mockNews.json). Each article includes:
- Title, slug, image URL
- Category, date, summary
- Horoscope objects (predictions, lucky numbers)

**Total:** 50+ articles across 9 categories.

### 3. Next.js Features

**a) Dynamic Routing:**
- Homepage: `/`
- Category pages: `/cricket`, `/entertainment`
- Article pages: `/cricket/article-slug`

**b) Image Optimization:**
- Next.js Image component with lazy loading + WebP

**c) Styling:**
- CSS Modules for accurate UI control

### 4. Responsiveness
Two-breakpoint mobile-first system:
- Desktop grid → Mobile column layout
- Horizontal scroll navbar on mobile
- Sidebar moves below on mobile screens

### 5. SEO
- Dynamic metadata
- Semantic HTML
- Proper alt text
- Clean URL structure

---

## PART B: DESIGN & CODE EXPLANATION

### 1. Design Decisions
- Main content uses flexible space
- Sidebar fixed width (320px)
- Modular architecture with folders per feature

### 2. Components Created

**Layout Components:**
- TopBar
- Navbar
- MobileMenu
- Sidebar
- Footer

**Home Components:**
- TrendingTopics
- TopStories
- CategorySection
- HoroscopeWidget

**Card Components:**
- FeaturedCard
- NewsCard
- SmallCard
- VideoCard

### 3. Challenges & Solutions

**Challenge 1: Navbar active state**  
Solution: usePathname() for live highlighting

**Challenge 2: Scroll buttons**  
Solution: useRef + scroll tracking

**Challenge 3: Dynamic routes**  
Solution: Awaiting params under Next.js 15 rules

**Challenge 4: Hindi text**  
Solution: Proper Devanagari font stack

**Challenge 5: Dual image card layouts**  
Solution: Conditional rendering

### 4. Future Improvements
- Real API integration
- Search system
- Dark mode
- Comments
- Social share system
- Analytics upgrades

---

## PART C: TESTING & EDGE CASES

### 1. Missing Images
Used fallback: `/images/placeholder.jpg`

### 2. No Articles
Show nothing instead of breaking UI

### 3. Long Titles
Used 3-line clamp with ellipsis

### 4. Error Handling
"खबर नहीं मिली" screen with homepage link

### 5. Loading States
Next.js ISR handles fast refresh; optional loading.js for better UX

---

## PART D: AI USE & REFLECTION

### 1. What AI Helped With
AI helped with:
- Mock Hindi content (~70%)
- Debugging CSS + responsive issues
- Suggestions for routing & structure

### 2. What I Built Myself
~60% of total work:
- Component logic
- Page architecture
- Routing + SEO
- Styling structure
- Data fetching

### 3. Where AI Was Wrong
- Suggested Tailwind → I chose CSS Modules
- Suggested SSR → I used ISR
- Suggested complex breakpoints → I used simple responsive setup

### 4. Verification of AI Code
- Tested everything manually
- Checked Next.js docs
- Style & logic refactoring

### 5. Extra Note
This README layout + styling improvements were enhanced using AI.

---

## CONCLUSION

This project shows my capability to:
- Build production-level Next.js apps
- Implement clean component architecture
- Write responsive designs
- Manage SEO, routing, and mock APIs

**Project Stats:**
- 1500+ lines of code
- 50+ articles
- 10+ sections/components
- Fully responsive
- SEO-ready
- Production-level structure
