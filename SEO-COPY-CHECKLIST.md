# SEO Changes — Waiting on Final Copy

These changes depend on finalized website copy. Once copy is locked, work through each item below.

---

## 1. Update Meta Title

**File:** `src/app/layout.tsx` — `metadata.title`

Replace the current title with one that includes the primary keyword. The title appears in:
- Browser tab
- Search engine results page
- `og:title` and `twitter:title` (also in this file — update all three)

**Current:** `红牛 | 中国企业的 AI 营销顾问`

**Recommended format:** `[Brand] - [Primary Keyword] | [Value Prop]`
Example: `红牛 - 中国小微企业AI营销平台 | 智能广告投放`

Keep it under ~30 Chinese characters.

---

## 2. Update Meta Description

**File:** `src/app/layout.tsx` — `metadata.description`

Update all three locations: `description`, `openGraph.description`, `twitter.description`.

**Current:** `为中国小微企业量身定制的广告方案。您的本地市场，您的语言，您的计划。`

**Requirements:**
- Include keywords: AI, 免费, platform names (微信/抖音/百度)
- Include a call-to-action
- Keep under ~80 Chinese characters

Example: `红牛是为中国小微企业打造的AI营销平台。免费生成广告策略，覆盖微信、抖音、百度等主流平台。立即开始。`

---

## 3. Optimize H1 for Keywords

**File:** `src/app/page.tsx` — `HeroHeadline` component (line ~41)

The H1 is the most important on-page SEO element. Currently it's a lifestyle tagline.

**Current:** `广告，从未如此简单`

**Options:**
- A) Keep the tagline as H1 but add the brand + keyword as a visually hidden `<span className="sr-only">` inside it
- B) Change the H1 to be keyword-rich: `红牛 AI 营销平台 — 广告，从未如此简单`
- C) Make the badge text above the H1 into the H1, and make the big tagline a styled `<p>`

Whichever approach, the H1 should contain "红牛" + "AI" + "营销" at minimum.

---

## 4. Enrich Image Alt Text

**File:** `src/app/page.tsx` — all `<Image>` components

Replace generic alt text with keyword-rich descriptions that match the final positioning:

| Current Alt | Suggested Alt |
|-------------|---------------|
| `红牛 Logo` (nav) | `红牛AI营销平台 Logo` |
| `红牛 Logo` (footer) | `红牛AI营销平台 Logo` |
| `红牛吉祥物` (hero) | `红牛AI营销吉祥物 - 小微企业智能广告助手` |
| `红牛吉祥物` (about) | `红牛AI营销顾问 - 智能广告投放平台` |

Adjust wording to match whatever the final brand positioning language is.

---

## 5. Add FAQ Structured Data (JSON-LD)

**File:** `src/app/page.tsx` — add a `<script>` tag inside the component

Once FAQ copy is finalized, add this JSON-LD block. The text **must exactly match** what's displayed on the page.

Add this before the closing `</>` in the component return:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "QUESTION TEXT HERE",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ANSWER TEXT HERE",
          },
        },
        // Repeat for each FAQ item
      ],
    }),
  }}
/>
```

Copy the exact Q&A strings from `src/components/FaqAccordion.tsx` to keep them in sync.

---

## 6. Add Organization Structured Data (JSON-LD)

**File:** `src/app/layout.tsx` — add a `<script>` tag in `<head>`

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "FINAL BRAND NAME",
      url: "https://hongniu-cn.vercel.app",
      logo: "https://hongniu-cn.vercel.app/assets/hongniu-logo.png",
      description: "FINAL BRAND DESCRIPTION",
    }),
  }}
/>
```

---

## 7. Create OG Image (1200x630)

**Location:** Save to `public/assets/og-image.png`

Then update `src/app/layout.tsx`:
- `openGraph.images[0].url` → `/assets/og-image.png`
- `twitter.images[0]` → `/assets/og-image.png`

**Requirements:**
- 1200x630px
- Feature the mascot, brand name, and final tagline
- High contrast — it needs to look good as a thumbnail
- This is what appears when the link is shared on WeChat, LinkedIn, etc.

---

## 8. Fix Dead Footer Links

**File:** `src/app/page.tsx` — footer section (lines ~318-320)

Three links currently point to `href="#"`:
- 隐私政策 (Privacy Policy)
- 服务条款 (Terms of Service)
- 联系我们 (Contact Us)

**Options:**
- A) Create actual pages (`/privacy`, `/terms`, `/contact`) and link to them
- B) Remove the links entirely until the pages exist
- C) Link to external hosted versions if they exist elsewhere

Dead links hurt SEO and E-E-A-T trust signals. Don't ship to production with `href="#"`.

---

## Verification After All Changes

Run these checks after implementing:

```bash
# Build
npm run build

# Check robots.txt serves correctly
curl https://hongniu-cn.vercel.app/robots.txt

# Check sitemap serves correctly
curl https://hongniu-cn.vercel.app/sitemap.xml

# Validate structured data
# Paste URL into: https://search.google.com/test/rich-results

# Validate OG tags
# Paste URL into: https://www.opengraph.xyz/

# Check heading hierarchy
# Use browser DevTools: document.querySelectorAll('h1,h2,h3,h4,h5,h6')
```
