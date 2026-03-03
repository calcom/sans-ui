# @calcom/cal-sans-ui

Cal Sans UI, Cal Sans Text, and Cal Sans Geo typefaces for [Cal.com](https://cal.com), as an npm package for Next.js and any app that can import CSS.

## Install

```bash
npm i @calcom/cal-sans-ui
```

**Next.js:** peer dependency Next.js 13.2+

## How to import

**Next.js (App Router):**

```tsx
import { CalSansUI } from "@calcom/cal-sans-ui/ui";
import { CalSansText } from "@calcom/cal-sans-ui/text";
import { CalSansGeo } from "@calcom/cal-sans-ui/geo";
// or: import { CalSansUI, CalSansText, CalSansGeo } from "@calcom/cal-sans-ui";
```

**Any other app (Vite, CRA, etc.):**

```tsx
import "@calcom/cal-sans-ui/ui.css";
import "@calcom/cal-sans-ui/text.css";
import "@calcom/cal-sans-ui/geo.css";
```

Then use `font-family: "Cal Sans UI"`, `"Cal Sans Text"`, or `"Cal Sans Geo"` in your CSS.

## Usage (Next.js App Router)

Next.js requires font loaders to be called at module scope, so you use the exported font objects directly:

```tsx
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

Use the CSS variables and variation settings in Tailwind or CSS:

```css
h1 {
  font-family: var(--font-cal-sans-text), sans-serif;
  font-variation-settings: "GEOM" 50;
}

p {
  font-family: var(--font-cal-sans-ui), sans-serif;
  font-variation-settings: "GEOM" 0;
}

.geo h1, .geo p {
  font-family: var(--font-cal-sans-geo), sans-serif;
  font-variation-settings: "GEOM" 100;
}
```

Or apply the font class directly.

Example 1 (Cal product-style):

```tsx
<h1 className={CalSansUI.className}>Heading</h1>
<p className={CalSansText.className}>Body text</p>
<h1 className={CalSansText.className} style={{ fontVariationSettings: '"GEOM" 50' }}>Heading</h1>
<p className={CalSansUI.className} style={{ fontVariationSettings: '"GEOM" 0' }}>Body text</p>
```

Example 2 (all 3):

```tsx
<h1 className={CalSansGeo.className}>Heading</h1>
<h2 className={CalSansText.className}>Subheadings</h2>
<p className={CalSansUI.className}>Body text</p>
<h1 className={CalSansGeo.className} style={{ fontVariationSettings: '"GEOM" 100', fontSize: '3em', letterSpacing: '-0.05em' }}>Big Spicy Head</h1>
<h2 className={CalSansText.className} style={{ fontVariationSettings: '"GEOM" 50' }}>Subheadings</h2>
<p className={CalSansUI.className} style={{ fontVariationSettings: '"GEOM" 0' }}>Body text</p>
```

Example 3 (Brutalist while Bauhaus):

```tsx
<h1 className={CalSansGeo.className}>Heading</h1>
<p className={CalSansGeo.className}>Body text</p>
<h1 className={CalSansGeo.className} style={{ fontVariationSettings: '"GEOM" 100' }}>Überschrift</h1>
<p className={CalSansUI.className} style={{ fontVariationSettings: '"GEOM" 100' }}>Fließtext</p>
```

## Non-Next.js (Vite, CRA, etc.)

Import the CSS and use the font family names:

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

.geo h1, .geo p {
  font-family: "Cal Sans Geo", sans-serif;
  font-variation-settings: "GEOM" 100;
}
```

For browsers that don’t support variable fonts, use the static UI CSS instead:

```ts
import "@calcom/cal-sans-ui/ui-non-variable.css";
```

## Exports

| Import | Description      |
|--------|------------------|
| `@calcom/cal-sans-ui` | Next: `CalSansUI`, `CalSansUINonVariable`, `CalSansText`, `CalSansGeo` (all in one). **Preferred.** |
| `@calcom/cal-sans-ui/ui` | Next: `CalSansUI` (variable). |
| `@calcom/cal-sans-ui/ui-non-variable` | Next: `CalSansUINonVariable` (static UI). |
| `@calcom/cal-sans-ui/text` | Next: `CalSansText` (variable subheadings). |
| `@calcom/cal-sans-ui/geo` | Next: `CalSansGeo` (variable). |
| `@calcom/cal-sans-ui/ui.css` | CSS: variable font, use `font-family: "Cal Sans UI"`. |
| `@calcom/cal-sans-ui/ui-non-variable.css` | CSS: static UI weights. |
| `@calcom/cal-sans-ui/text.css` | CSS: use `font-family: "Cal Sans Text"`. |
| `@calcom/cal-sans-ui/geo.css` | CSS: use `font-family: "Cal Sans Geo"`. |

## License

SIL Open Font License 1.1. See [OFL.txt](./OFL.txt).
