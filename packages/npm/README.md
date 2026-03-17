# @calcom/cal-sans-ui

Cal Sans UI, Cal Sans Text, and Cal Sans Geo typefaces for [Cal.com](https://cal.com).

## Installation

```bash
npm install @calcom/cal-sans-ui
```

**Next.js:** peer dependency Next.js 13.2+

## Using with Next.js

### Next.js config (required for Next.js < 15)

Add `transpilePackages` to `next.config.js` or `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@calcom/cal-sans-ui"],
};

export default nextConfig;
```

### App Router

In `app/layout.js` or `app/layout.tsx`:

```jsx
import { CalSansUI } from "@calcom/cal-sans-ui/ui";
import { CalSansText } from "@calcom/cal-sans-ui/text";
import { CalSansGeo } from "@calcom/cal-sans-ui/geo";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${CalSansUI.variable} ${CalSansText.variable} ${CalSansGeo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### Pages Router

In `pages/_app.js`:

```jsx
import { CalSansUI } from "@calcom/cal-sans-ui/ui";

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={CalSansUI.className}>
      <Component {...pageProps} />
    </main>
  );
}
```

## With Tailwind CSS

Map Cal Sans to Tailwind's theme variables so you can use `font-sans` (body), `font-heading` (headings), and `font-display` (geo):

**Tailwind v4** – `tailwind.css`:

```css
@theme {
  --font-sans: var(--font-cal-sans-ui), ui-sans-serif, sans-serif;
  --font-heading: var(--font-cal-sans-text), ui-sans-serif, sans-serif;
  --font-display: var(--font-cal-sans-geo), ui-sans-serif, sans-serif;
}
```

**Tailwind v3** – `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cal-sans-ui)", "sans-serif"],
        heading: ["var(--font-cal-sans-text)", "sans-serif"],
        display: ["var(--font-cal-sans-geo)", "sans-serif"],
      },
    },
  },
};
```

Usage in components:

```tsx
<p className="font-sans">Body text uses Cal Sans UI</p>
<h1 className="font-heading">Headings use Cal Sans Text</h1>
<h1 className="font-display">Display text uses Cal Sans Geo</h1>
```

For the GEOM axis (e.g. subheadings):

```tsx
<h2 className="font-heading" style={{ fontVariationSettings: '"GEOM" 50' }}>
  Subheading
</h2>
```

## Non-Next.js (Vite, CRA, etc.)

```ts
import "@calcom/cal-sans-ui/ui.css";
import "@calcom/cal-sans-ui/text.css";
import "@calcom/cal-sans-ui/geo.css";
```

```css
h1 {
  font-family: "Cal Sans Text", sans-serif;
  font-variation-settings: "GEOM" 50;
}

p {
  font-family: "Cal Sans UI", sans-serif;
  font-variation-settings: "GEOM" 0;
}
```

For browsers that don't support variable fonts: `import "@calcom/cal-sans-ui/ui-non-variable.css"`

## Exports

| Import | Description |
|--------|-------------|
| `@calcom/cal-sans-ui` | Next: `CalSansUI`, `CalSansUINonVariable`, `CalSansText`, `CalSansGeo` (all in one). **Preferred.** |
| `@calcom/cal-sans-ui/ui` | Next: `CalSansUI` (variable). |
| `@calcom/cal-sans-ui/ui-non-variable` | Next: `CalSansUINonVariable` (static UI). |
| `@calcom/cal-sans-ui/text` | Next: `CalSansText` (variable subheadings). |
| `@calcom/cal-sans-ui/geo` | Next: `CalSansGeo` (variable). |
| `@calcom/cal-sans-ui/ui.css` | CSS: variable font. |
| `@calcom/cal-sans-ui/ui-non-variable.css` | CSS: static UI weights. |
| `@calcom/cal-sans-ui/text.css` | CSS: Cal Sans Text. |
| `@calcom/cal-sans-ui/geo.css` | CSS: Cal Sans Geo. |

## License

SIL Open Font License 1.1. See [OFL.txt](./OFL.txt).
