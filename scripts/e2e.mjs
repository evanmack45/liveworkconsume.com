// Local layout + mailto probes against a static file server (not the live hostname).
import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { createRequire } from "node:module";
const root = new URL("../", import.meta.url).pathname;
const { chromium } = createRequire("/workspace/repos/austin-council-tracker/node_modules/")("playwright-core");
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".svg": "image/svg+xml", ".txt": "text/plain", ".md": "text/plain" };
const server = createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://127.0.0.1").pathname);
  if (p.endsWith("/")) p += "index.html";
  const file = normalize(join(root, p.replace(/^\//, "")));
  if (!file.startsWith(root) || !existsSync(file)) { res.writeHead(404); res.end("not found"); return; }
  res.writeHead(200, { "content-type": types[extname(file)] || "application/octet-stream" });
  res.end(readFileSync(file));
});
await new Promise(r => server.listen(0, "127.0.0.1", r));
const port = server.address().port;
const base = `http://127.0.0.1:${port}/`;
const b = await chromium.launch({ headless: true, args: [] });
const fails = [];
const ok = (c, m) => { console.log((c ? "PASS " : "FAIL ") + m); if (!c) fails.push(m); };
try {
  for (const [w, h] of [[1280, 900], [390, 844]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const p = await ctx.newPage();
    const r = await p.goto(base, { waitUntil: "load" });
    ok(r.ok(), `${w} home 200`);
    const title = await p.title();
    ok(title === "Google Business Profile suspended? The six common reasons", `${w} title`);
    const overflow = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    ok(!overflow, `${w} no horizontal overflow (scrollWidth)`);
    const hrefs = await p.$$eval("a.cta", els => els.map(a => a.getAttribute("href")));
    ok(hrefs.length === 2, `${w} two CTA links`);
    for (const href of hrefs) {
      const u = new URL(href.replace(/&amp;/g, "&"));
      ok(u.protocol === "mailto:" && u.pathname === "liveworkconsume@agentmail.to", `${w} CTA address`);
      ok(u.searchParams.get("subject") === "Tell me when the appeal kit opens ($49 planned)", `${w} CTA subject`);
      ok(u.searchParams.get("body") === "What reason did Google give?", `${w} CTA body`);
    }
    const pay = await p.locator("text=/stripe|pay now|checkout|buy now/i").count();
    ok(pay === 0, `${w} no payment copy visible`);
    await ctx.close();
  }
} finally {
  await b.close();
  server.close();
}
console.log(fails.length ? `\n${fails.length} FAILED` : "\nall e2e checks passed");
process.exit(fails.length ? 1 : 0);
