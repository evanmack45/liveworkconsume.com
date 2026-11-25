# liveworkconsume.com — free page build log

Deadline: Thu 26 Nov 2026, 2:00 PM America/Chicago. Built Tue 24 Nov 2026, evening, America/Chicago.

## What this is

One free page on liveworkconsume.com: "Google Business Profile suspended? The six common reasons." This is Foil's cheapest demand test, step 2 (FIX idea 5), assigned by Dash. Step 1 already passed (Scout demand writeup; the public page does not repeat those counts).

The 21-day demand window starts the day this page is live on the real domain, after Barker removes the thisisaustininc.com forward and points DNS at GitHub Pages. The clock does not start while the name still forwards. If the page is live on the real name on Wednesday 25 Nov, the window ends Wednesday 16 Dec 2026. Pass = 5 or more answered emails from strangers. Kill = 2 or fewer. Extend once, to 30 Dec, only if the count is 3 or 4 and at least one email asked about price or timing. Count only emails that answer "What reason did Google give?".

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

Do not start the 21-day demand window until https://liveworkconsume.com/ serves this page over HTTPS.

## Repo and preview

Filled in after publish.

## Checks

- `node scripts/check-site.mjs` and `--links`: all passed after a copy fix (removed the word "checkout" from a negative sentence; the canonical self-link is skipped in `--links` so the still-forwarding public name is not treated as a source).
- `node scripts/e2e.mjs`: all passed at 1280 and 390 (no horizontal overflow, mailto subject and body decode exactly, no payment copy).
- Pages preview: `curl` to 185.199.108.153 with `Host: liveworkconsume.com` (box egress intercepts the real name).
- Screenshots: /workspace/mason/liveworkconsume-1280.jpg and /workspace/mason/liveworkconsume-390.jpg, taken from the Pages preview and viewed.

## Money rule

No payment button. No Stripe objects created. The kit does not exist yet. The mailto is a waitlist only.
