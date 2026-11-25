// Screenshots of the GitHub Pages build (via scripts/pages-route.mjs). Usage: node scripts/shots.mjs <outDir>
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { routeToPages } from "./pages-route.mjs";
const { chromium } = createRequire("/workspace/repos/austin-council-tracker/node_modules/")("playwright-core");
const out = process.argv[2];
if (!out) { console.error("usage: node scripts/shots.mjs <outDir>"); process.exit(1); }
mkdirSync(out, { recursive: true });
const b = await chromium.launch({ headless: true, args: [] });
for (const [w, h] of [[1280, 900], [390, 844]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, ignoreHTTPSErrors: true, deviceScaleFactor: 1 });
  await routeToPages(ctx);
  const p = await ctx.newPage();
  const r = await p.goto("https://liveworkconsume.com/", { waitUntil: "load" });
  const title = await p.title();
  const hdr = await r.allHeaders();
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  console.log(w, "status=" + r.status(), "served-by=" + hdr["x-served-by"], "title=" + title, "overflow=" + overflow);
  await p.screenshot({ path: `${out}/liveworkconsume-${w}.jpg`, type: "jpeg", quality: 85, fullPage: true });
  await ctx.close();
}
await b.close();
