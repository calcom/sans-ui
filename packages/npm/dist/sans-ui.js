import localFont from "next/font/local";

export const CalSansUI = localFont({
  src: [
    { path: "./fonts/CalSansTextUI[wght].woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/CalSansTextUI-Italic[wght].woff2", weight: "400 700", style: "italic" },
  ],
  variable: "--font-cal-sans-ui",
  display: "swap",
});
