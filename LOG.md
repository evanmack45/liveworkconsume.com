# liveworkconsume.com — free page build log

Deadline: Thu 26 Nov 2026, 2:00 PM America/Chicago. Built Tue 24 Nov 2026, evening, America/Chicago.

## What this is

One free page on liveworkconsume.com: "Google Business Profile suspended? The six common reasons." This is Foil's cheapest demand test, step 2 (FIX idea 5), assigned by Dash. Step 1 already passed (Scout demand writeup; the public page does not repeat those counts).

The 21-day demand window starts the day this page is live on the real domain over HTTPS. Barker removed the thisisaustininc.com forward and pointed DNS at GitHub Pages on Tue 24 Nov 2026, about 9:03 PM America/Chicago. HTTPS was enforced at 10:05 PM America/Chicago that same day, so the window starts Tuesday 24 Nov 2026 and ends Tuesday 15 Dec 2026. Pass = 5 or more answered emails from strangers. Kill = 2 or fewer. Extend once, to 30 Dec, only if the count is 3 or 4 and at least one email asked about price or timing. Count only emails that answer "What reason did Google give?".

## pstack

Architect first (shapes below). Interrogate of the copy and the tree. Blast-radius before going live, with a safety fact proved by running a command. Prove-it-works (local checks, source GETs, Pages preview via Host header). Unslop on the copy (no em or en dashes, sentence-case headings, one unquoted "may", no banned AI vocabulary, no invented stats).

## Architect (before code)

Job: one static public page, no payment, no Stripe, no satire, hosted later on GitHub Pages, with a mailto waitlist for a planned $49 appeal drafting kit.

Inbox already exists: liveworkconsume@agentmail.to, created by Barker on Tue 24 Nov 2026 at 8:38 PM America/Chicago. Do not create another inbox.

Domain listing: /workspace/dash/domains/portfolio-2026-11-24.md says liveworkconsume.com is "Not listed on solstice" and is in the "Do not list / Keep." group. No for-sale footer.

Four shapes:

- Shape A: six separate reason URLs plus a hub. Rejected. The demand test is one free page, not six SEO pages. (Foil FIX 3.)
- Shape B: one static index.html with six anchored reason sections, a "before you appeal" section, a kit waitlist, and a sources list. Chosen.
- Shape C: a JS questionnaire that branches to a reason. Rejected. It would look like a diagnosis, and the test does not need it.
- Shape D: a waitlist only, with no reasons. Rejected. The brief requires the six reasons on the free page.

Copy owner: the HTML. No client JavaScript. Mailto is a plain href.

Hard rules encoded in scripts/check-site.mjs: the word "reinstatement" must not appear in any price line (CTA text, mailto subject or body, or any sentence that names $49 or the planned price). Product language is "appeal drafting kit, no outcome promised." No satire cues. No payment words. No invented stats. Each of the six reasons cites a Google help URL that returns 200 on GET and actually contains the quoted claim.

## Sources (verified Tue 24 Nov 2026, America/Chicago)

HTTP GET, not HEAD (HEAD was 204 or 404). Each URL below returned 200 and the title shown. Quoted claims are in sources/quotes.md and on the page.

1. https://support.google.com/business/answer/3038177 — Guidelines for representing your business on Google
2. https://support.google.com/business/answer/4569145 — Fix suspended or disabled profiles
3. https://support.google.com/business/answer/13763036 — Business eligibility and ownership guidelines
4. https://support.google.com/business/answer/9157481 — Manage your service areas for service-area & hybrid businesses
5. https://support.google.com/business/workflow/13569690 — Manage appeals for your Google Business Profiles
6. https://support.google.com/business/contact/local_appeals — Request additional review of a denied appeal

https://support.google.com/business/answer/13762416 (Overview of Google Business Profile policies) was fetched earlier but later returned 429. It is not cited on the page. The `?p=manage_appeals` short link resolves to the workflow URL above, sometimes with a visit_id query we do not use.

Reason 6 mentions categories only with Google's own wording ("choose the fewest number of categories it takes to describe your overall core business"). Google does not, on these pages, name a wrong category as a stand-alone suspension trigger, so the page does not either.

## Interrogate

- Satire: none. No Austin, Inc. voice, no performance-review gag, no forward to thisisaustininc.com in the new tree.
- Price line: CTA and mailto subject are exactly "Tell me when the appeal kit opens ($49 planned)". Mailto body is exactly "What reason did Google give?". The word "reinstatement" appears only when quoting Google's appeal article, never in a price line.
- Payment: no form, no Stripe, no checkout, no pay button.
- Footer: no for-sale line, because the domain is not listed.
- Claims: every reason cites a 200 URL that contains the quoted text.
- Stats: no 179-thread count, no agency prices, no invented wait times.
- Unslop: one unquoted "may" ("This page may not list the exact reason Google sent you."). Other "may"s are inside Google quotes.

## Blast-radius (proved by running)

Safety fact to prove: creating evanmack45/liveworkconsume.com and setting a Pages CNAME does not change public DNS, and does not change thisisaustininc.com.

Baseline, Tue 24 Nov 2026, 8:51 PM America/Chicago, before the repo existed:

- DNS (Cloudflare DoH): A liveworkconsume.com -> 15.197.225.128 and 3.33.251.168 (GoDaddy forwarding). NS ns67.domaincontrol.com / ns68.domaincontrol.com. www CNAME to liveworkconsume.com. No AAAA, no apex TXT.
- GET http://15.197.225.128 and http://3.33.251.168 with Host: liveworkconsume.com returned 301 Location: https://thisisaustininc.com. The same for Host: www.liveworkconsume.com.
- A GET of https://thisisaustininc.com/ was 200 (Netlify). That site was not edited.
- A GET of https://liveworkconsume.com/ from this box (canonical URL, used only as a read) returned the Austin, Inc. title, which confirms the name still forwards.

After the Pages custom domain is set, scripts/probe-pages.mjs curls those same forwarder IPs again and requires the same 301. We do not touch thisisaustininc.com, and we do not change DNS.

The usual "HTTPS on the real domain" done-item will fail until Barker points DNS. That is expected, same pattern as netsanctuary.com.

## DNS records for Barker

Remove the GoDaddy name forward (the A records to 15.197.225.128 and 3.33.251.168, and the www CNAME that currently points at the apex). Then set:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | evanmack45.github.io |

GitHub verification TXT: recorded below if GitHub asks for one when the custom domain is set. If none is requested, do not add a TXT yet. If the Pages settings later show a challenge, add:

    TXT  _github-pages-challenge-evanmack45  <value shown in the Pages settings>

Do not start the 21-day demand window until https://liveworkconsume.com/ serves this page over HTTPS. That condition was met at 10:05 PM America/Chicago on Tue 24 Nov 2026. See the go-live section.


## Repo and preview (filled after publish)

- Repo: https://github.com/evanmack45/liveworkconsume.com (public)
- Page commit (the HTML that GitHub Pages is serving): `b68eaa3b42deaf885600018ef5786680ce4746a5`
- Pages: legacy, `main`, `/`. Custom domain `liveworkconsume.com` was picked up from the CNAME file. `https_enforced` is false. Putting `https_enforced=true` failed with "The certificate does not exist yet", which is expected until DNS points here.
- GitHub verification TXT: GitHub did not ask for one. `protected_domain_state` is null and `pending_domain_unverified_at` is null. Do not add a TXT unless the Pages settings later show a challenge. If they do, the host is `_github-pages-challenge-evanmack45` and the value is the one shown there.
- Preview, Tue 24 Nov 2026, 8:57 PM America/Chicago: `curl -sk --noproxy '*' -H 'Host: liveworkconsume.com' https://185.199.108.153/` returned HTTP 200, `server: GitHub.com`. Body is byte-identical to `index.html`. SHA-256: `c3ac2c2fd1adcb7ccefcccd14f5d77258079727a618202331739b0397f7fea6d`.
- Blast-radius after the custom domain was set (proved by running `scripts/probe-pages.mjs`): GET http://15.197.225.128 and http://3.33.251.168 with `Host: liveworkconsume.com` still return 301 Location: https://thisisaustininc.com. thisisaustininc.com was not edited. DNS was not edited.
- `node scripts/probe-pages.mjs`: all passed (after a fix to the price-line "reinstatement" check; first published HTML was already correct).
- Screenshots of the Pages preview, viewed: `/workspace/mason/liveworkconsume-1280.jpg` and `/workspace/mason/liveworkconsume-390.jpg`. Both 200, title correct, served by GitHub.com, no horizontal overflow. The 390 CTA wraps onto two lines and stays inside the measure.
- The 21-day demand window had not started at preview time. It started later the same evening, when HTTPS was enforced. See the go-live section below.

## DNS records for Barker (copy this)

Remove the current GoDaddy name forward first (A records to 15.197.225.128 and 3.33.251.168, and the www CNAME that currently points at the apex). Then set:

```
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
AAAA   @      2606:50c0:8000::153
AAAA   @      2606:50c0:8001::153
AAAA   @      2606:50c0:8002::153
AAAA   @      2606:50c0:8003::153
CNAME  www    evanmack45.github.io
```

No TXT is needed right now. If GitHub later shows a domain-verification challenge, add:

```
TXT    _github-pages-challenge-evanmack45    <value from the GitHub Pages settings>
```


## Checks

- `node scripts/check-site.mjs` and `--links`: all passed after a copy fix (removed the word "checkout" from a negative sentence; the canonical self-link is skipped in `--links` so the still-forwarding public name is not treated as a source).
- `node scripts/e2e.mjs`: all passed at 1280 and 390 (no horizontal overflow, mailto subject and body decode exactly, no payment copy).
- Pages preview: `curl` to 185.199.108.153 with `Host: liveworkconsume.com` (box egress intercepts the real name).
- Screenshots: /workspace/mason/liveworkconsume-1280.jpg and /workspace/mason/liveworkconsume-390.jpg, taken from the Pages preview and viewed.

## Money rule

No payment button. No Stripe objects created. The kit does not exist yet. The mailto is a waitlist only.

## HTTPS go-live (Tue 24 Nov 2026, 10:05 PM America/Chicago)

Barker moved DNS (GoDaddy NS unchanged, four GitHub A, four AAAA, www CNAME to evanmack45.github.io, forward to thisisaustininc.com removed) around 9:03 PM America/Chicago. File: /workspace/barker/liveworkconsume-dns.md. This log does not change DNS. No messages were sent.

Google DoH and Cloudflare DoH already showed the GitHub A/AAAA records and the www CNAME at 9:05 PM America/Chicago, and still did at 9:55 PM. GitHub pages/health lagged, the same way netsanctuary.com did earlier tonight.

- 9:05-9:53 PM: Pages API `https_certificate` stayed null. `PUT https_enforced=true` returned "The certificate does not exist yet" (404). openssl to 185.199.108.153 with SNI liveworkconsume.com still served the `*.github.io` Let's Encrypt certificate.
- `GET /repos/evanmack45/liveworkconsume.com/pages/health` sometimes returns HTTP 202 with a body of `{}` while the check is running. A later GET that returns HTTP 200 has the real document. `gh api` of this endpoint can print `{}` in that 202 case; curl with the status code is the reliable read.
- 9:37-9:38 PM, cname cycle 1 of 2 (too early): health was still `is_https_eligible=false`, `is_non_github_pages_ip_present=true`, reason NotServedByPagesError (apex) / InvalidCNAMEError (www). GitHub wrote commits `d5c351d` (Delete CNAME, build errored) and `ee32096` (Create CNAME, built). index.html was unchanged.
- 10:04 PM: health HTTP 200 showed apex and www `is_https_eligible=true`, `is_served_by_pages=true`, `is_valid=true`, reason=null. Apex `is_pointed_to_github_pages_ip=true`. www `is_cname_to_github_user_domain=true`. `https_error` was `peer_failed_verification` (expected; the `*.github.io` cert was still being served).
- 10:04:15-10:04:23 PM, cname cycle 2 of 2 (the allowed reset after eligibility): same PUT cname=null then cname=liveworkconsume.com. GitHub wrote `b05763a` (Delete CNAME, build errored) and `b2bf710` (Create CNAME). By 10:04:43 PM the Pages API showed `https_certificate.state=approved`, domains `liveworkconsume.com` and `www.liveworkconsume.com`, `expires_at=2027-02-22`. After the create-CNAME build reached `status=built` (10:05:01 PM), `gh api -X PUT repos/evanmack45/liveworkconsume.com/pages -F https_enforced=true` succeeded at 10:05:02 PM.

Pages API after enforce: `status=built`, `cname=liveworkconsume.com`, `https_enforced=true`, `html_url=https://liveworkconsume.com/`, certificate approved for both names.

Leaf cert from `openssl s_client -connect 185.199.108.153:443 -servername liveworkconsume.com -verify_hostname liveworkconsume.com`: CN=liveworkconsume.com, SAN=liveworkconsume.com and www.liveworkconsume.com, issuer Let's Encrypt YR1, notBefore=Nov 25 03:06:04 2026 GMT, notAfter=Feb 23 03:06:03 2027 GMT. Verification: OK. Verify return code: 0 (ok).

Live checks, 10:05 PM America/Chicago:

- `curl --noproxy '*' https://liveworkconsume.com/` returned HTTP 200, `server: GitHub.com`, TLS verify ok (`ssl_verify_result=0`), body 12081 bytes, SHA-256 `c3ac2c2fd1adcb7ccefcccd14f5d77258079727a618202331739b0397f7fea6d`, byte-identical to `index.html` at `b68eaa3`. The same body and hash came back with `--resolve liveworkconsume.com:443:185.199.108.153` and with a Host header to 185.199.108.153. Method used for the 200+cert check: `curl --noproxy '*' https://liveworkconsume.com/`.
- `curl --noproxy '*' http://liveworkconsume.com/` is still intercepted by the box proxy (HTTP 500, Server: Pingora). The HTTP-to-HTTPS check used a Host header to 185.199.108.153: HTTP 301, Location: `https://liveworkconsume.com/`, Server: GitHub.com.
- Mailto (two CTAs): `liveworkconsume@agentmail.to`, subject `Tell me when the appeal kit opens ($49 planned)`, body `What reason did Google give?`.
- No payment button, no Stripe, no form, no checkout. The word "payment" appears only in negative copy ("There is no payment on this page", "This page does not take payment").
- All six Google help source URLs returned HTTP 200 on GET.

Live screenshots, taken via `scripts/shots.mjs` (curl to 185.199.108.153 with Host: liveworkconsume.com, served into Playwright), viewed at 1280 and 390: `/workspace/mason/liveworkconsume-live-1280.jpg` and `/workspace/mason/liveworkconsume-live-390.jpg`. Both 200, title correct, served by GitHub.com, no horizontal overflow. The 390 CTA wraps onto two lines and stays inside the measure. Viewport crops used while viewing: `/workspace/mason/lwc-live-crops/`.

Repo HEAD is `b2bf710` (GitHub "Create CNAME" after the second re-add). The published HTML is still `b68eaa3`. No spend, no messages, no DNS edits. Cname cycles used: 2 of 2.

## 21-day demand window

Starts: Tuesday 24 Nov 2026, the day HTTPS went live on the real domain (enforced at 10:05 PM America/Chicago).
Ends: Tuesday 15 Dec 2026.
Pass = 5 or more answered emails from strangers. Kill = 2 or fewer. Extend once, to 30 Dec, only if the count is 3 or 4 and at least one email asked about price or timing. Count only emails that answer "What reason did Google give?". Inbox: liveworkconsume@agentmail.to (Barker owns it).

## Done checklist after go-live (10:05 PM America/Chicago)

1. HTTPS on the real domain: **PASS.** Certificate approved and HTTPS enforced. http://liveworkconsume.com/ (Host header to the Pages IP) 301s to https://liveworkconsume.com/. openssl to 185.199.108.153:443 with SNI shows a valid Let's Encrypt cert for liveworkconsume.com and www.liveworkconsume.com. From this box, `curl --noproxy '*' https://liveworkconsume.com/` also returns the live page with a valid cert. HTTP by hostname is still intercepted (Pingora 500).
2. Screenshots at 1280 and 390, viewed: **PASS.** Paths above.
3. The page and mailto work end to end: **PASS.** Body hash matches `index.html` at `b68eaa3`. Mailto address, subject, and body are exact.
4. The pay button is live only if the money rule is met: **PASS.** No pay button. The kit does not exist yet. Mailto is a waitlist only.
5. Every claim is sourced: **PASS.** All six cited Google help URLs returned 200.


## 2026-11-25 (CT) SEO pass (MSB-7)
- Added 8 answer pages at /appeal-denied/, /approved-but-still-disabled/, /suspended-again/, /deceptive-content/, /address-rules/, /service-area-business/, /account-restricted/, /appeal-evidence-checklist/. Content owner: content/answers.mjs. Builder: scripts/build-answers.mjs. Output committed in 4151e79 (00:29 CT).
- Page 8 is the evidence checklist, not "reviews missing after reinstatement." No Google help article covers reviews after reinstatement; the only wording is a user-posted support-email line, quoted and labeled as such on /approved-but-still-disabled/.
- Every quote is checked against a saved copy of its source (sources/text/, scripts/check-quotes.mjs: 63 quotes, 104 absence checks). The Community thread was read with WebFetch because curl is blocked or the page is JavaScript-rendered.
- Added sitemap.xml (9 URLs), robots.txt with a Sitemap line, unique titles and meta descriptions, canonical, Open Graph and Twitter tags, and JSON-LD: Article + WebSite on home, Article + BreadcrumbList on answer pages. No FAQPage or HowTo (Google limits FAQ rich results to well-known government and health sites and has deprecated How-to). JSON-LD checked against the schema.org vocabulary file: 52 typed nodes, 0 problems.
- Home: added a "More questions" list. Kept the existing paper/serif look so the 21-day demand window (to 15 Dec) is not confounded by a redesign. The waitlist mailto and kit block are unchanged. No pay button. No for-sale footer (the domain is not listed).
- Checks: check-site, check-seo, check-quotes all pass. This commit adds scripts/verify-live.mjs. Live check at 01:07 CT: all pass (9 sitemap URLs 200 with a valid certificate, bodies equal the repo files, canonicals, JSON-LD, robots Sitemap line, http 301, www 301s to the apex).
- visual-qa-gate on the live home and at least two answer pages (phone and desktop) is queued until the box transcription (round 6, transcribe.py) finishes. Do not run a headless browser while it is running. Shots will be saved to /workspace/mason/seo-liveworkconsume-*.jpg.
- visual-qa-gate on the live home, /appeal-denied/, and /appeal-evidence-checklist/, phone and desktop, with Lighthouse: /workspace/mason/seo-pass/qa-live. PASS (no P0, no P1). P2 no og:image accepted (no images by design). Lighthouse mobile performance 99-100, a11y/best-practices/seo 100, CLS 0. I looked at every fold and scroll shot. Shots: /workspace/mason/seo-liveworkconsume-*.jpg. No code change in this step. DONE 02:43 AM America/Chicago.
- Round 2 (Wed 25 Nov 2026): added 4 sourced answer pages: /how-long-does-reinstatement-take/ (4916803), /video-verification-failed/ (39490e4), /create-new-profile-after-suspension/ (b93e2de), /reviews-after-suspension/ (c9c0a8a). Quotes come from Google Business Profile Help pages, plus labeled user threads (Reddit, Google Community) where Google gives no number. check-quotes gained `ours: true` for notSaid lines about our own work. Sitemap is 13 URLs. verify-live passes. visual-qa-gate on the 4 live pages (phone and desktop, I looked at the fold and scroll shots): PASS, no P0 or P1, Lighthouse mobile 100/100/100/100, CLS 0. Output: /workspace/mason/seo-pass/qa-live-round2. Evidence per page: /workspace/mason/seo-pass/STATUS.md. No pay button, waitlist mailto and kit block unchanged.
- Art wiring (Wed 25 Nov 2026): added a 16:9 WebP header (responsive srcset, width and height set, alt from the incoming manifest) and a 1200×630 og.webp card to all 12 answer pages. Files at /img/answers/<slug>/. Builders only include art when meta.json is present. Pushed one page at a time (template 1500fca, then one commit per slug, through 16009b4). visual-qa-gate on the 12 live pages: PASS, no P0 or P1, Lighthouse mobile performance 96–100, CLS 0. Combined gate report: /workspace/mason/seo-pass/qa-live-art-all. Folds: /workspace/mason/seo-art-lwc-*-{phone,desktop}-fold.jpg.
- Round 3 (Wed 25 Nov 2026): added 4 sourced answer pages: /postcard-verification-not-arrived/ (1de8599), /someone-else-owns-my-profile/ (a8ad1d0, link to the duplicate page added in c57df23), /duplicate-business-profile/ (c57df23), /marked-permanently-closed/ (0d17d6e, a6767eb). New sources are Google help articles 4566671, 12756178, 4669092, 15300571, 15300196, the Business Redressal form, two Community threads and four Reddit threads, each saved under sources/text/. Excerpt-only snapshots are labeled in their headers. Not used: Google article 12755979 redirects to 12756178, so its "72 hours" merge line is not on the page. check-quotes now accepts a source snapshot of 300 characters or more (was 500) because two Reddit posts are short. 149 quotes checked, 171 absence checks.
- Round 3 art: header and og.webp added from Dash's incoming folders (e86eed6, b8562ec, 042924d, eb23523). The og.webp for someone-else-owns-my-profile, duplicate-business-profile and marked-permanently-closed is Dash's centre crop of the header. Gate: /workspace/mason/seo-pass/qa-live-r3, Lighthouse mobile performance 99 to 100, CLS 0.
- Round 4 (Wed 25 Nov 2026): added 4 sourced answer pages and a hub. /map-pin-wrong-place/ (1a6e742), /transfer-profile-ownership/ (3d348e5, link to the name page added in 2f3c4ee), /change-business-name/ (94ac33b), /photos-rejected/ (f235d66). Hub /business-profile-questions/ (1971e0c) lists all 20 answers by topic and is linked from the home page and every answer page. Art wired from Dash's 1280x720 sources (1280 master, 640 and 960 derivatives, og.webp 1200x630 native): 08bf948, fdfd780, ccf9cc4, cec9ba4, 8ceeda7. Every push ran the gated release (build, quotes, SEO, site, unslop) first. Gate on 7 lwc URLs: Lighthouse mobile performance 100, CLS 0, output /workspace/mason/seo-pass/qa-live-r4. Mailto and CTA checks now skip the hub page, which has no CTA.
- Round 5 (Wed 25 Nov 2026): added 4 sourced answer pages. /fake-reviews/ (038bcfc; Google help 4596773, 14114287, plus three Reddit posts), /profile-not-showing/ (8125216; edit profile, verify, duplicates, ranking tips), /moving-the-business/ (27e76ad; "do not create a new Business Profile", verify again after a move), /hours-keep-changing/ (27cb5b4; Google updates page, 4-day suggested-edit window, automated calls). Art wired in r4 sizes (1280 master, 640 and 960, og.webp 1200x630) in the same commits. For /profile-not-showing/ the header is mostly a blank sheet on a window, and for /moving-the-business/ the board on the crate reads as a lid; alt text describes only what is visible, and the copy carries the meaning. Hub gained a "Reviews" group and a "Visibility and hours" group; sitemap is 25 URLs (24 answers plus the hub). Every push ran the gated release first. Gate on the 4 live pages and the hub: Lighthouse mobile performance 100, CLS 0, output /workspace/mason/gate-r5-lwc. Folds: /workspace/mason/seo-art-lwc-<slug>-{phone,desktop}-fold.jpg. I looked at every fold. No pay button, waitlist mailto and kit block unchanged.

## 2026-11-26 (CT) Recut of all 26 CUT pages
- Applied Shears 11/25 cuts and Dash's overlapping slop order. Shared CSS: white background, 1px line borders, no left accent, `main p, li` 65ch. Home rebuilt visual-first: kept H1, one 11-word line, one mailto CTA, reused address-rules header art (no fal), six reason tiles. Footer keeps the existing kit, $49, and disclaimer claims. "This is not a Google website." once, in the header.
- 24 answers cut in `content/answers.mjs`: `notSaid` and the planned-kit heading removed; kit is one price line plus the CTA. Hanging colons closed with "Read it in:" pointers to existing Google sources. No new claims. Template broken on `/how-long-does-reinstatement-take/`, `/appeal-evidence-checklist/`, and `/video-verification-failed/` (different short-answer and related headings).
- measure.js after: home 116 words, fold 66/89, prose 35. All 24 answers ≤450 (max 389) and fold at 390 ≤100 (max 99). Reinstatement 361, fold 88. First-answer shorts 41–58 words.
- Gated release `bdcabd1`. check-quotes, check-seo, check-site, e2e.mjs, unslop, verify-live all passed. e2e probed the home and Reinstatement mailto at 390 and 1280 without sending. A real send would go to liveworkconsume@agentmail.to (team inbox).
- visual-qa-gate on all 26 live URLs: PASS, no P0, Lighthouse mobile performance 99–100, CLS 0. Impeccable 0/0 at 390 and 1280 on all 26. Logs: `/workspace/mason/recut-2026-11-27.md` section 2, `/workspace/mason/slop-fix-lwc.md`. Shots I viewed: `/workspace/mason/recut-shots/lwc-{home,how-long-does-reinstatement-take,appeal-evidence-checklist,video-verification-failed}-{390,1280}.png`.
- Remaining QUALITY-BAR misses (not cut further): fold-prose 35 and headline 8 on kept H1s; words/screen at 390 is 111–116 on 9 answers; Vale often above 1/100 on answers. Home fold 66 is inside the work-order cap of 100 (Shears tighter pass test wanted 60).

## 2026-11-26 (CT) Compass rows (Mason)
- LWC-1: PASS. og:title, og:description, og:image (1200x630) and twitter:card=summary_large_image already on home and every answer page. Live curl shows og:image (200). Lighthouse SEO 100. No new commit (ea0150e / recut bdcabd1).
- LWC-2: PASS (already met). First 60 words under the H1 already answer L1, L2, and L3. No copy added (recut caps kept). Reran L1–L3; our domain was not cited (`/workspace/compass/ai-visibility.md`). No new commit.
- LWC-3: PASS. Sitemap has 26 URLs, each with lastmod. GSC sitemap report: 0 errors, 26 submitted. No new commit.

## 2026-11-27 (CT) Scannability pass (Dash order due 28 Nov 2:00 PM)

- Used Ansel's liveworkconsume brand kit (landed early). Header lockup: `img/brand/lockup-transparent.svg` from `/workspace/ansel/lwc-brand/logo/lockup-transparent.svg`. Favicon set from `/workspace/ansel/lwc-brand/favicon/`.
- Newsreader is self-hosted (`fonts/newsreader/newsreader-latin-{400,600,700}.woff2` from fontsource/jsDelivr, upstream https://github.com/productiontype/Newsreader) under SIL OFL 1.1 (`fonts/OFL-Newsreader.txt` from `/workspace/ansel/lwc-brand/fonts/OFL-Newsreader.txt`). `font-display: optional`; no preload unless a live Lighthouse run stays at 99–100 with CLS 0.
- Google mark at `img/logos/google.svg` from Simple Icons (CC0, https://github.com/simple-icons/simple-icons/blob/develop/icons/google.svg), used only to identify Google next to "This is not a Google website."
- Home hero was not swapped: the current address-rules photo stays, and current og images stay. Ansel's storefront hero was compared at 390 and 1280 (`/workspace/mason/scan-pass-shots/compare-lwc-ansel-hero-*.png`) and was not better, so those files were not shipped.
- Fold-prose at 390 is ≤40 on all 26 URLs (home 12→0); fold words ≤100; tap targets 48px; visible words still ≤450. Full table, shot paths, and asset log: `/workspace/mason/scan-pass-2026-11-28.md`.
- Gated ship `01a451c`. Live body equals repo. visual-qa-gate on the live home: PASS (no P0), Lighthouse mobile 100, CLS 0. Newsreader loaded with `font-display: optional` and no preload. `e2e.mjs` passed on live after go-live.

## 2026-11-27 (CT) Visual sweep follow-up (Shears 2026-11-27, Mason pages)

- Answer pages already had the Ansel lockup, first-sentence shorts, and 48px nav from the scan pass. Moving "Checked against Google's pages…" out of the short box pulled body copy into the 390 fold and broke the 40-word cap on 4 pages, so that line stayed put. Caps rechecked and held.
- CSS follow-up: secondary links inside disclosures are 24px; nav, CTAs, tiles, and summaries stay 48px.
