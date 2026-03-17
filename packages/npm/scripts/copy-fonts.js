#!/usr/bin/env node
import { cpSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "../../..");
const webfonts = join(repoRoot, "fonts", "webfonts");
const destFonts = join(__dirname, "..", "dist", "fonts");
const oflSrc = join(repoRoot, "OFL.txt");
const oflDest = join(__dirname, "..", "OFL.txt");

const variableFont = "CalSansUI[wght,GEOM].woff2";
const staticUIFonts = [
  "CalSansUI-Light.woff2",
  "CalSansUI-Regular.woff2",
  "CalSansUI-Medium.woff2",
  "CalSansUI-SemiBold.woff2",
  "CalSansUI-Bold.woff2",
];
// Source in webfonts is CalSansUI-Text*, we copy to CalSansText-* for the package
const textFonts = [
  { src: "CalSansUI-TextLight.woff2", dest: "CalSansText-Light.woff2" },
  { src: "CalSansUI-TextRegular.woff2", dest: "CalSansText-Regular.woff2" },
  { src: "CalSansUI-TextMedium.woff2", dest: "CalSansText-Medium.woff2" },
  { src: "CalSansUI-TextSemiBold.woff2", dest: "CalSansText-SemiBold.woff2" },
  { src: "CalSansUI-TextBold.woff2", dest: "CalSansText-Bold.woff2" },
];
const geoFonts = [
  "CalSansUI-GeoLight.woff2",
  "CalSansUI-GeoRegular.woff2",
  "CalSansUI-GeoMedium.woff2",
  "CalSansUI-GeoSemiBold.woff2",
  "CalSansUI-GeoBold.woff2",
];
if (existsSync(webfonts)) {
  mkdirSync(destFonts, { recursive: true });
  cpSync(join(webfonts, variableFont), join(destFonts, variableFont));
  for (const f of staticUIFonts) {
    cpSync(join(webfonts, f), join(destFonts, f));
  }
  for (const { src, dest } of textFonts) {
    cpSync(join(webfonts, src), join(destFonts, dest));
  }
  for (const f of geoFonts) {
    cpSync(join(webfonts, f), join(destFonts, f));
  }
  console.log("cal-sans-ui: copied fonts to dist/fonts");
}

if (existsSync(oflSrc)) {
  cpSync(oflSrc, oflDest);
  console.log("cal-sans-ui: copied OFL.txt from root");
}
