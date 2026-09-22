import localFont from "next/font/local";

// Every axis except opsz, which is baked at 10. ital is a live axis, so use
// font-variation-settings: "ital" 1 rather than font-style: italic.
export const CalSansUI = localFont({
  src: "./fonts/CalSansTextUI[GEOM,SHRP,YTAS,ital,wght].woff2",
  variable: "--font-cal-sans-ui",
  weight: "400 700",
  display: "swap",
});
