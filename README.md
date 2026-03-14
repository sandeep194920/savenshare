# SaveNShare — Landing Page

Marketing and info website for the **SaveNShare** mobile app. Built with Next.js 14, Tailwind CSS, and TypeScript.

Live site: _coming soon (Vercel)_

---

## What's in here

| Section | Description |
|---|---|
| Hero | Headline + feature bullets + dual phone mockup |
| Demo | YouTube embed (placeholder until video is recorded) |
| App Features | 5 feature sections with real app screenshots |
| Platforms | Supported platforms grid + Facebook oEmbed explanation |
| Get in Touch | Contact form (opens Gmail compose) |
| Privacy Policy | `/privacy` — required for Meta App Review |

---

## Tech stack

- [Next.js 14](https://nextjs.org/) — App Router
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [TypeScript](https://www.typescriptlang.org/)
- [react-icons](https://react-icons.github.io/react-icons/) — platform + UI icons
- Deployed on [Vercel](https://vercel.com/)

---

## Getting started

```bash
# Install dependencies
npm install

# Run locally
npm run dev
# → http://localhost:3000

# Production build
npm run build
```

---

## Project structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout + metadata
│   ├── globals.css       # CSS variables (app theme colours)
│   └── privacy/
│       └── page.tsx      # Privacy Policy page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Demo.tsx
│   ├── AppFeatures.tsx
│   ├── Platforms.tsx
│   ├── GetInTouch.tsx
│   ├── Footer.tsx
│   ├── Button/Button.tsx
│   └── Text/
│       ├── Heading.tsx
│       └── Paragraph.tsx
├── data/
│   └── data.ts           # All site content in one place — edit here
└── utils/
    └── scrollUtil.ts     # Smooth scroll helper
public/                   # App screenshots (copied from AppImages/)
AppImages/                # Source screenshots from the app
```

---

## Updating content

All text content lives in [`src/data/data.ts`](src/data/data.ts). No need to touch component files for copy changes — just edit the data file.

---

## Swapping in the demo video

Once the demo is recorded and uploaded to YouTube, open [`src/components/Demo.tsx`](src/components/Demo.tsx) and replace the placeholder with:

```tsx
<iframe
  className="absolute inset-0 w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="SaveNShare Demo"
  allowFullScreen
/>
```

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com/) → New Project → Import repo
3. Framework: **Next.js** (auto-detected)
4. Click Deploy — done

No environment variables needed.

---

## Colour palette (matches the app)

| Token | Value | Use |
|---|---|---|
| `--primary` | `#F0C229` | Gold — CTAs, accents, highlights |
| `--bg-default` | `#031019` | Page background |
| `--bg-card` | `#0D1F2D` | Card / section backgrounds |
| `--text-primary` | `#ffffff` | Headings |
| `--text-secondary` | `#8A97A8` | Body text, descriptions |
| `--border-default` | `#1A3347` | Card borders, dividers |

---

## Related

- [SaveNShare app repo](https://github.com/sandeepamarnath/savenshare) — the React Native mobile app
- [Cash Transaction Tracker site](http://cash-transaction-tracker-info-website.vercel.app/) — sister project, same pattern
