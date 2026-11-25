// Builds /<slug>/index.html for each answer page, sitemap.xml, and the "Related questions" block on the home page.
// Run: node scripts/build-answers.mjs. The output is committed. Content owner: content/answers.mjs.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { PAGES, SOURCES, CHECKED, DATE } from "../content/answers.mjs";
import { esc, inline, renderBlocks, stripMarkup } from "./lib/answers-lib.mjs";
const root = new URL("../", import.meta.url).pathname;
const SITE = "https://liveworkconsume.com";
const MAILTO = "mailto:liveworkconsume@agentmail.to?subject=Tell%20me%20when%20the%20appeal%20kit%20opens%20(%2449%20planned)&amp;body=What%20reason%20did%20Google%20give%3F";
const CTA = "Tell me when the appeal kit opens ($49 planned)";
const bySlug = Object.fromEntries(PAGES.map(p => [p.slug, p]));

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
  return `    <figure class="page-art">
      <img src="${base}/header-1280.webp" srcset="${base}/header-640.webp 640w, ${base}/header-960.webp 960w, ${base}/header-1280.webp 1280w, ${base}/header.webp 2048w" sizes="(max-width: 42rem) calc(100vw - 2rem), 40rem" width="${art.width}" height="${art.height}" alt="${esc(art.alt)}" fetchpriority="high" decoding="async">
    </figure>
`;
}


function sourcesFor(p) {
  const keys = new Set();
  for (const s of p.sections) for (const b of s.blocks) if (b.q) keys.add(b.src);
  for (const n of p.notSaid) for (const f of n.files) keys.add(f);
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
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(p.title)}</title>
  <meta name="description" content="${esc(p.description)}">
  <link rel="canonical" href="${url}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
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
    <p class="wordmark"><a href="/">liveworkconsume.com</a></p>
    <p class="not-google">This is not a Google website.</p>
  </header>
  <main id="main">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Back to the six common reasons</a></nav>
${artFigure(p, artFor(p.slug))}    <h1>${esc(p.h1)}</h1>
    <div class="answer" role="note">
      <h2 class="answer-label">Short answer</h2>
      <p>${esc(p.short)}</p>
      <p class="checked">Checked against Google's pages on ${CHECKED}. This is a reading guide, not legal advice, and we do not file appeals.</p>
    </div>
${p.sections.map(s => `
    <section>
      <h2>${esc(s.h)}</h2>
      ${renderBlocks(s.blocks, SOURCES)}
    </section>`).join("\n")}

    <section class="not-said">
      <h2>What these pages do not say</h2>
      <ul>${p.notSaid.map(n => `<li>${inline(n.t)}</li>`).join("")}</ul>
      <p>We cannot see your profile and we cannot tell you why Google made its decision. The appeals tool shows the reason for each decision.</p>
    </section>

    <section id="kit">
      <h2>The planned appeal kit</h2>
      <p>We are testing demand for a paid appeal drafting kit. The planned price is $49. No outcome is promised. This page does not take payment.</p>
      <a class="cta" href="${MAILTO}">${CTA}</a>
      <p>In your email, answer: What reason did Google give?</p>
    </section>

    <section id="related">
      <h2>Related questions</h2>
      <ul class="links">${related}</ul>
    </section>

    <section id="sources">
      <h2>Sources</h2>
      <p>Pages retrieved on ${CHECKED}. Each quote above appears in the page it links to.</p>
      <ol>${src.map(k => `<li><a href="${esc(SOURCES[k].url)}">${esc(SOURCES[k].title)}</a>${SOURCES[k].note.startsWith("a user") ? ", " + esc(SOURCES[k].note) : ""}</li>`).join("")}</ol>
    </section>
  </main>
  <footer class="site">
    <p>liveworkconsume.com. This is not a Google website and is not affiliated with Google. This page is not legal advice.</p>
  </footer>
</body>
</html>
`;
}

for (const p of PAGES) {
  mkdirSync(root + p.slug, { recursive: true });
  writeFileSync(root + p.slug + "/index.html", page(p));
}

// Home page: related questions block between markers.
const home = readFileSync(root + "index.html", "utf8");
const block = `<!-- answers:start -->
    <section id="questions">
      <h2>More questions, answered from Google's pages</h2>
      <p>Each page below quotes Google's help pages, says what they do not cover, and lists its sources.</p>
      <ul class="links">${PAGES.map(p => `<li><a href="/${p.slug}/">${esc(p.title)}</a></li>`).join("")}</ul>
    </section>
    <!-- answers:end -->`;
let out;
if (home.includes("<!-- answers:start -->")) out = home.replace(/<!-- answers:start -->[\s\S]*?<!-- answers:end -->/, block);
else out = home.replace('<section id="sources">', block + '\n\n    <section id="sources">');
writeFileSync(root + "index.html", out);

// sitemap.xml
const urls = [["/", DATE], ...PAGES.map(p => [`/${p.slug}/`, DATE])];
writeFileSync(root + "sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(([u, d]) => `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${d}</lastmod>\n  </url>`).join("\n")}\n</urlset>\n`);
writeFileSync(root + "robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`built ${PAGES.length} pages, sitemap.xml, robots.txt`);
