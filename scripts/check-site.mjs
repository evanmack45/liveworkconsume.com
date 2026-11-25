// Static rules for liveworkconsume.com. Run: node scripts/check-site.mjs [--links]
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { execFileSync } from "node:child_process";
const root = new URL("../", import.meta.url).pathname;
const walk = d => readdirSync(d).flatMap(f => [".git", "node_modules", "shots"].includes(f) ? [] : (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = walk(root);
const text = f => readFileSync(f, "utf8");
const html = files.filter(f => f.endsWith(".html"));
const publicHtml = html.filter(f => !f.includes("/sources/"));
const fails = [];
const ok = (c, m) => { console.log((c ? "PASS " : "FAIL ") + m); if (!c) fails.push(m); };

const ADDR = "liveworkconsume@agentmail.to";
const SUBJECT = "Tell me when the appeal kit opens ($49 planned)";
const BODY = "What reason did Google give?";
const CTA = "Tell me when the appeal kit opens ($49 planned)";

const mailtos = publicHtml.flatMap(f => [...text(f).matchAll(/href="(mailto:[^"]+)"/g)].map(m => [relative(root, f), m[1].replace(/&amp;/g, "&")]));
const ANSWER_SLUGS = readdirSync(root).filter(d => statSync(join(root, d)).isDirectory() && existsSync(join(root, d, "index.html")) && !["sources", "content", "scripts", "css", "img", "business-profile-questions"].includes(d)); // the hub carries no CTA, so it is not an answer page
ok(existsSync(join(root, "business-profile-questions", "index.html")), "hub page /business-profile-questions/ exists");
ok(mailtos.length === 2 + ANSWER_SLUGS.length, `two mailto links on the home page plus one on each of ${ANSWER_SLUGS.length} answer pages (found ${mailtos.length})`);
for (const [f, href] of mailtos) {
  const u = new URL(href);
  ok(u.pathname === ADDR, `${f} mailto address is ${ADDR}`);
  ok(u.searchParams.get("subject") === SUBJECT, `${f} mailto subject decodes exactly`);
  ok(u.searchParams.get("body") === BODY, `${f} mailto body decodes exactly`);
}

ok(publicHtml.every(f => !/<form[\s>]/i.test(text(f))), "no <form> on any page");
ok(files.filter(f => f.endsWith(".js") && !f.includes("/scripts/")).length === 0, "no client JavaScript");
const third = publicHtml.flatMap(f => [...text(f).matchAll(/<(script|link|img|iframe)([^>]*)>/gi)]).filter(([, attrs]) => {
  if (/rel=["']canonical["']/i.test(attrs) || /rel=["']icon["']/i.test(attrs)) return false;
  const url = (attrs.match(/(?:src|href)="([^"]+)"/i) || [])[1] || "";
  return /^(https?:)?\/\//.test(url);
});
ok(third.length === 0, "no third-party script, iframe, image, or stylesheet (" + third.length + ")");

const all = publicHtml.map(text).join("\n");
const allLower = all.toLowerCase();
for (const w of ["stripe", "checkout", "buy now", "add to cart", "paypal", "pay now", "order now", "subscribe now"]) {
  ok(!allLower.includes(w), `no "${w}" in public html`);
}
ok(!/\$\s?\d/.test(all.replaceAll("$49 planned", "").replaceAll("planned price is $49", "")), "no dollar amounts except the planned $49 kit price");
ok(!/for sale|afternic|sedo|dan\.com/i.test(all), "no for-sale footer (domain is not listed)");
for (const w of ["thisisaustininc", "austin, inc", "annual performance review", "satire"]) {
  ok(!allLower.includes(w), `no satire cue "${w}"`);
}
ok(!/179 threads|3-6 week|\$\s?1[0-9]{2,}/i.test(all), "no unsourced demand-test stats or unverified agency prices");

ok((all.match(/Tell me when the appeal kit opens \(\$49 planned\)/g) || []).length === 2 + ANSWER_SLUGS.length, "CTA text appears twice on home and once on each answer page, exact wording");
ok(/<h1>Google Business Profile suspended\? The six common reasons<\/h1>/.test(text(root + "index.html")), "required H1");
for (const id of ["reason-1", "reason-2", "reason-3", "reason-4", "reason-5", "reason-6", "appeal", "kit", "sources"]) {
  ok(text(root + "index.html").includes(`id="${id}"`), `section #${id} exists`);
}

// "reinstatement" must not appear in any price line (CTA, mailto, or a sentence that names $49 / planned price).
const plain = all.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&");
ok(!/mailto:[^"]*reinstatement/i.test(all), "mailto href does not contain reinstatement");
ok(!new RegExp(CTA.replace(/[()*?]/g, "\\$&") + ".*reinstatement|reinstatement.*" + CTA.replace(/[()*?]/g, "\\$&"), "i").test(plain), "CTA line does not contain reinstatement");
for (const sent of plain.split(/(?<=[.!?])\s+/)) {
  if (/\$49|planned price|\$\s?49/.test(sent)) ok(!/reinstatement/i.test(sent), "price sentence has no 'reinstatement': " + sent.trim().slice(0, 120));
}

const slop = /\b(delve|crucial|pivotal|showcase|testament|vibrant|foster|landscape|leverage|utilize|seamless|robust|empower)\b/i;
ok(!publicHtml.some(f => slop.test(text(f).replace(/<[^>]+>/g, " "))), "no banned AI vocabulary");
ok(!publicHtml.some(f => /[—–]/.test(text(f))) && !text(root + "css/site.css").includes("—") && !text(root + "css/site.css").includes("–"), "no em or en dashes in public html/css");
ok(readFileSync(root + "CNAME", "utf8").trim() === "liveworkconsume.com", "CNAME is liveworkconsume.com");
ok(/not legal advice/i.test(text(root + "index.html")) && /not a Google website/i.test(text(root + "index.html")), "disclaimer: not legal advice, not a Google website");
ok(/appeal drafting kit/.test(text(root + "index.html")), "product is described as an appeal drafting kit");
ok(/No outcome is promised/.test(text(root + "index.html")), "no outcome promised");

// One unquoted hedge "may" is allowed. Quoted Google "may" does not count.
const visible = text(root + "index.html").replace(/<[^>]+>/g, " ");
const unquoted = visible.replace(/"[^"]*"/g, '""');
const mays = [...unquoted.matchAll(/\bmay\b/g)];
ok(mays.length === 1, `exactly one unquoted "may" (found ${mays.length})`);
for (const slug of ANSWER_SLUGS) {
  const body = text(root + slug + "/index.html").replace(/<blockquote[\s\S]*?<\/blockquote>/g, " ").replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ");
  const m = [...body.matchAll(/\bmay\b/gi)];
  ok(m.length <= 1, `${slug}: at most one unquoted "may" outside quotes (found ${m.length})`);
}

const required = [
  "https://support.google.com/business/answer/3038177",
  "https://support.google.com/business/answer/4569145",
  "https://support.google.com/business/answer/13763036",
  "https://support.google.com/business/answer/9157481",
  "https://support.google.com/business/workflow/13569690",
  "https://support.google.com/business/contact/local_appeals",
];
for (const u of required) ok(text(root + "index.html").includes(u), "page links " + u);

if (process.argv.includes("--links")) {
  const urls = [...new Set(publicHtml.flatMap(f => [...text(f).matchAll(/href="(https:\/\/[^"#]+)/g)].map(m => m[1].replace(/&amp;/g, "&"))))].filter(u => !/^https:\/\/([a-z0-9-]+\.)?liveworkconsume\.com\//i.test(u + "/"));
  for (const u of urls) {
    let status = 0, title = "";
    try {
      const out = execFileSync("curl", ["-sS", "--noproxy", "*", "-m", "25", "-A", "Mozilla/5.0 (compatible; source-check/1.0)", "-o", "/tmp/lwc-link-body", "-w", "%{http_code}", "-L", u], { encoding: "utf8" });
      status = +out;
      const body = readFileSync("/tmp/lwc-link-body", "utf8");
      title = (body.match(/<title>([^<]+)/i) || [, ""])[1];
      if (status === 429) {
        // one retry after a short wait
        execFileSync("sleep", ["3"]);
        const out2 = execFileSync("curl", ["-sS", "--noproxy", "*", "-m", "25", "-A", "Mozilla/5.0 (compatible; source-check/1.0)", "-o", "/tmp/lwc-link-body", "-w", "%{http_code}", "-L", u], { encoding: "utf8" });
        status = +out2;
        title = (readFileSync("/tmp/lwc-link-body", "utf8").match(/<title>([^<]+)/i) || [, ""])[1];
      }
    } catch (e) { status = "ERR " + e.message; }
    ok(status === 200, `link ${status} ${u}  title=${title.slice(0, 80)}`);
  }
}

console.log(fails.length ? `\n${fails.length} FAILED` : "\nall checks passed");
process.exit(fails.length ? 1 : 0);
