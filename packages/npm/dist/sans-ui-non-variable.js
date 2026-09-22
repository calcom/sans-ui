import localFont from "next/font/local";

export const CalSansUINonVariable = localFont({
  src: [
    { path: "./fonts/CalSansTextUI-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/CalSansTextUI-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/CalSansTextUI-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/CalSansTextUI-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/CalSansTextUI-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/CalSansTextUI-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/CalSansTextUI-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/CalSansTextUI-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-cal-sans-ui",
  display: "swap",
});
