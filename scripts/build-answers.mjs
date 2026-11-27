// Builds /<slug>/index.html for each answer page, sitemap.xml, and the "Related questions" block on the home page.
// Run: node scripts/build-answers.mjs. The output is committed. Content owner: content/answers.mjs.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { PAGES, SOURCES, CHECKED, DATE, HUB } from "../content/answers.mjs";
import { esc, inline, renderBlocks, stripMarkup } from "./lib/answers-lib.mjs";
const root = new URL("../", import.meta.url).pathname;
const SITE = "https://liveworkconsume.com";
const MAILTO = "mailto:liveworkconsume@agentmail.to?subject=Tell%20me%20when%20the%20appeal%20kit%20opens%20(%2449%20planned)&amp;body=What%20reason%20did%20Google%20give%3F";
const CTA = "Tell me when the appeal kit opens ($49 planned)";
const bySlug = Object.fromEntries(PAGES.map(p => [p.slug, p]));
// Break the repeated 4-section template on 3 pages (Dash slop order).
const SKIN = {
  "how-long-does-reinstatement-take": { label: "The official number", related: "Read next" },
  "appeal-evidence-checklist": { label: "What to gather", related: "More on this site" },
  "video-verification-failed": { label: "If the video failed", related: "Other questions" },
};


function artFor(slug) {
  const f = root + "img/answers/" + slug + "/meta.json";
  if (!existsSync(f)) return null;
  return JSON.parse(readFileSync(f, "utf8"));
}

function artHead(p, art) {
  if (!art) return `  <meta name="twitter:card" content="summary">`;
  const og = `${SITE}/img/answers/${p.slug}/og.webp`;
  return `  <meta property="og:image" content="${og}">
  <meta property="og:image:width" content="${art.ogWidth}">
  <meta property="og:image:height" content="${art.ogHeight}">
  <meta property="og:image:type" content="image/webp">
  <meta property="og:image:alt" content="${esc(art.ogAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="${og}">
  <meta name="twitter:image:alt" content="${esc(art.ogAlt)}">`;
}

function artFigure(p, art) {
  if (!art) return "";
  const base = `/img/answers/${p.slug}`;
  // Round 4 art ships a 1280 master (header.webp) with 640 and 960 derivatives, listed in meta.srcset. Older art has a 2048 master.
  const imgSet = art.srcset ? art.srcset.map(([w, f]) => `${base}/${f} ${w}w`).join(", ") : `${base}/header-640.webp 640w, ${base}/header-960.webp 960w, ${base}/header-1280.webp 1280w, ${base}/header.webp 2048w`;
  const imgSrc = art.srcset ? `${base}/${art.srcset.at(-1)[1]}` : `${base}/header-1280.webp`;
  return `    <figure class="page-art">
      <img src="${imgSrc}" srcset="${imgSet}" sizes="(max-width: 42rem) calc(100vw - 2rem), 40rem" width="${art.width}" height="${art.height}" alt="${esc(art.alt)}" fetchpriority="high" decoding="async">
    </figure>
`;
}



function wordCount(s) {
  return (String(s).trim().match(/\S+/g) || []).length;
}
function proseWords(s) {
  const n = wordCount(s);
  return n >= 12 ? n : 0;
}
function shortLead(h1, short, leadOverride) {
  const s = String(short).trim();
  if (leadOverride) return { lead: String(leadOverride).trim(), full: s };
  const budget = Math.max(0, 40 - proseWords(h1));
  const m = s.match(/^([\s\S]*?[.!?])(?:\s+([\s\S]+))?$/);
  const first = m ? m[1].trim() : s;
  const rest = m && m[2] ? m[2].trim() : "";
  if (proseWords(first) <= budget) return { lead: first, full: rest ? s : "" };
  const bits = first.split(/(?<=[,;:])\s+/);
  let lead = bits[0] || first;
  if (lead.endsWith(",")) lead = lead.slice(0, -1);
  if (proseWords(lead) <= budget) return { lead, full: s };
  return { lead: first, full: s };
}

function sourcesFor(p) {
  const keys = new Set();
  for (const s of p.sections) for (const b of s.blocks) if (b.src) keys.add(b.src);
  for (const n of (p.notSaid || [])) for (const f of n.files || []) keys.add(f);
  for (const k of p.cite || []) keys.add(k);
  return [...keys];
}

function jsonLd(p) {
  const url = `${SITE}/${p.slug}/`;
  const art = artFor(p.slug);
  const org = { "@type": "Organization", name: "liveworkconsume.com", url: SITE + "/" };
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "@id": url + "#article", headline: p.h1, description: p.description, ...(art ? { image: [`${SITE}/img/answers/${p.slug}/og.webp`, `${SITE}/img/answers/${p.slug}/header.webp`] } : {}), url, mainEntityOfPage: url, inLanguage: "en", datePublished: DATE, dateModified: DATE, author: org, publisher: org, isPartOf: { "@id": SITE + "/#article" }, citation: sourcesFor(p).map(k => SOURCES[k].url) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Google Business Profile suspended? The six common reasons", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: p.title, item: url },
      ] },
    ],
  }, null, 2);
}

function page(p) {
  const url = `${SITE}/${p.slug}/`;
  const src = sourcesFor(p);
  const related = p.related.map(s => `<li><a href="/${s}/">${esc(bySlug[s].title)}</a></li>`).join("");
  const notSaidHtml = (p.notSaid && p.notSaid.length) ? `
    <section class="not-said">
      <h2>What these pages do not say</h2>
      <ul>${p.notSaid.map(n => `<li>${inline(n.t)}</li>`).join("")}</ul>
      <p>We cannot see your profile and we cannot tell you why Google made its decision. The appeals tool shows the reason for each decision.</p>
    </section>` : "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(p.title)}</title>
  <meta name="description" content="${esc(p.description)}">
  <link rel="canonical" href="${url}">
  <meta name="theme-color" content="#8A3418">
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="/apple-touch-icon-180.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="liveworkconsume.com">
  <meta property="og:title" content="${esc(p.title)}">
  <meta property="og:description" content="${esc(p.description)}">
  <meta property="og:url" content="${url}">
${artHead(p, artFor(p.slug))}
  <meta name="twitter:title" content="${esc(p.title)}">
  <meta name="twitter:description" content="${esc(p.description)}">
  <script type="application/ld+json">
${jsonLd(p)}
  </script>
  <link rel="stylesheet" href="/css/site.css">
</head>
<body>
  <a class="skip" href="#main">Skip to the content</a>
  <header class="site">
    <p class="wordmark"><a href="/"><img src="/img/brand/lockup-transparent.svg" width="284" height="48" alt="liveworkconsume.com"></a></p>
    <p class="not-google"><img class="company-logo" src="/img/logos/google.svg" width="16" height="16" alt="" aria-hidden="true"> This is not a Google website.</p>
  </header>
  <main id="main">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> &middot; <a href="/${HUB.slug}/">Questions</a></nav>
${artFigure(p, artFor(p.slug))}    <h1>${esc(p.h1)}</h1>
    ${(() => { const { lead, full } = shortLead(p.h1, p.short, p.lead); return `<div class="answer" role="note">
      <p class="answer-lead">${esc(lead)}</p>${full ? `
      <details class="short-more">
        <summary>Full short answer</summary>
        <p>${esc(full)}</p>
      </details>` : ""}
    </div>`; })()}
${p.sections.map(s => `
    <section>
      <h2>${esc(s.h)}</h2>
      ${renderBlocks(s.blocks, SOURCES)}
    </section>`).join("\n")}

${notSaidHtml}

    <p class="kit-line">The planned price is $49. No outcome is promised.</p>
    <a class="cta" href="${MAILTO}">${CTA}</a>
    <p class="kit-ask">In your email, answer: What reason did Google give?</p>

    <section id="related">
      <h2>${(SKIN[p.slug] && SKIN[p.slug].related) || "Related questions"}</h2>
      <ul class="links">${related}</ul>
      <p><a href="/${HUB.slug}/">See all ${PAGES.length} questions by topic</a></p>
    </section>

    <section id="sources">
      <h2>Sources</h2>
      <p class="checked">Checked against Google's pages, ${CHECKED}. Not legal advice.</p>
      <p>Pages retrieved on ${CHECKED}. Each quote above appears in the page it links to.</p>
      <ol>${src.map(k => `<li><a href="${esc(SOURCES[k].url)}">${esc(SOURCES[k].title)}</a>${SOURCES[k].note.startsWith("a user") ? ", " + esc(SOURCES[k].note) : ""}</li>`).join("")}</ol>
    </section>
  </main>
  <footer class="site">
    <p>Not affiliated with Google. Not legal advice.</p>
  </footer>
</body>
</html>
`;
}

for (const p of PAGES) {
  mkdirSync(root + p.slug, { recursive: true });
  writeFileSync(root + p.slug + "/index.html", page(p));
}

// Hub page: every answer, grouped by topic. Content owner: HUB in content/answers.mjs.
function hubPage() {
  const h = HUB, url = `${SITE}/${h.slug}/`, art = artFor(h.slug);
  const seen = h.groups.flatMap(g => g.slugs);
  for (const p of PAGES) if (seen.filter(s => s === p.slug).length !== 1) throw new Error("hub must list each answer exactly once: " + p.slug);
  for (const s of seen) if (!bySlug[s]) throw new Error("hub lists unknown slug " + s);
  const org = { "@type": "Organization", name: "liveworkconsume.com", url: SITE + "/" };
  const ld = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": url + "#page", name: h.h1, description: h.description, url, inLanguage: "en", dateModified: DATE, ...(art ? { image: [`${SITE}/img/answers/${h.slug}/og.webp`, `${SITE}/img/answers/${h.slug}/header.webp`] } : {}), isPartOf: { "@type": "WebSite", name: "liveworkconsume.com", url: SITE + "/" }, publisher: org,
        mainEntity: { "@type": "ItemList", numberOfItems: seen.length, itemListElement: seen.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/${s}/`, name: bySlug[s].title })) } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Google Business Profile suspended? The six common reasons", item: SITE + "/" },
        { "@type": "ListItem", position: 2, name: h.title, item: url },
      ] },
    ],
  }, null, 2);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(h.title)}</title>
  <meta name="description" content="${esc(h.description)}">
  <link rel="canonical" href="${url}">
  <meta name="theme-color" content="#8A3418">
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="/apple-touch-icon-180.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="liveworkconsume.com">
  <meta property="og:title" content="${esc(h.title)}">
  <meta property="og:description" content="${esc(h.description)}">
  <meta property="og:url" content="${url}">
${artHead({ slug: h.slug }, art)}
  <meta name="twitter:title" content="${esc(h.title)}">
  <meta name="twitter:description" content="${esc(h.description)}">
  <script type="application/ld+json">
${ld}
  </script>
  <link rel="stylesheet" href="/css/site.css">
</head>
<body>
  <a class="skip" href="#main">Skip to the content</a>
  <header class="site">
    <p class="wordmark"><a href="/"><img src="/img/brand/lockup-transparent.svg" width="284" height="48" alt="liveworkconsume.com"></a></p>
    <p class="not-google"><img class="company-logo" src="/img/logos/google.svg" width="16" height="16" alt="" aria-hidden="true"> This is not a Google website.</p>
  </header>
  <main id="main">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Back to the six common reasons</a></nav>
${artFigure({ slug: h.slug }, art)}    <h1>${esc(h.h1)}</h1>
${h.intro.map(t => `    <p>${inline(t)}</p>`).join("\n")}
${h.groups.map(g => `
    <section>
      <h2>${esc(g.h)}</h2>
      <ul class="links">${g.slugs.map(s => `<li><a href="/${s}/">${esc(bySlug[s].title)}</a></li>`).join("")}</ul>
    </section>`).join("\n")}
  </main>
  <footer class="site">
    <p>Not affiliated with Google. Not legal advice.</p>
  </footer>
</body>
</html>
`;
}
mkdirSync(root + HUB.slug, { recursive: true });
writeFileSync(root + HUB.slug + "/index.html", hubPage());

// Home questions list is not re-injected (Shears recut).


// sitemap.xml
const urls = [["/", DATE], [`/${HUB.slug}/`, DATE], ...PAGES.map(p => [`/${p.slug}/`, DATE])];
writeFileSync(root + "sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(([u, d]) => `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${d}</lastmod>\n  </url>`).join("\n")}\n</urlset>\n`);
writeFileSync(root + "robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`built ${PAGES.length} pages, sitemap.xml, robots.txt`);
