// Prove the Pages preview and that public DNS is unchanged (still the GoDaddy forward).
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fetchFromPages, PAGES_IP } from "./pages-route.mjs";

const root = new URL("../", import.meta.url).pathname;
const sha = buf => createHash("sha256").update(buf).digest("hex");
const fails = [];
const ok = (c, m) => { console.log((c ? "PASS " : "FAIL ") + m); if (!c) fails.push(m); };

const local = readFileSync(root + "index.html");
const preview = await fetchFromPages("/");
ok(preview.status === 200, `Pages IP ${PAGES_IP} Host liveworkconsume.com / -> ${preview.status}`);
ok((preview.headers["server"] || "").toLowerCase().includes("github"), "server looks like GitHub Pages: " + preview.headers["server"]);
const body = preview.body.toString("utf8");
ok(body.includes("Google Business Profile suspended? The six common reasons"), "preview has the required title");
ok(body.includes("Tell me when the appeal kit opens ($49 planned)"), "preview has the CTA");
const priceSents = body.replace(/<[^>]+>/g, " ").split(/(?<=[.!?])\s+/).filter(s => /\$49|planned price/.test(s));
ok(priceSents.length >= 2 && priceSents.every(s => !/reinstatement/i.test(s)), "preview price sentences have no 'reinstatement' (" + priceSents.length + ")");
ok(sha(preview.body) === sha(local) || body.includes("<h1>Google Business Profile suspended? The six common reasons</h1>"), "preview body matches local index or at least the same H1 (GitHub may inject a comment)");
console.log("local sha256 ", sha(local));
console.log("pages sha256 ", sha(preview.body));
console.log("pages server ", preview.headers["server"]);
console.log("pages length ", preview.body.length, "local", local.length);

// Blast-radius safety fact: the real hostname still forwards to thisisaustininc.com.
for (const ip of ["15.197.225.128", "3.33.251.168"]) {
  const out = execFileSync("curl", ["-sS", "--noproxy", "*", "-m", "15", "-D", "-", "-o", "/dev/null", "-X", "GET", "-H", "Host: liveworkconsume.com", `http://${ip}/`], { encoding: "utf8" });
  const status = (/^HTTP\/[\d.]+ (\d+)/m.exec(out) || [])[1];
  const loc = (/^Location: (.*)$/im.exec(out) || [])[1] || "";
  ok(status === "301" && /thisisaustininc\.com/i.test(loc), `forwarder ${ip} still 301 -> ${loc || status}`);
}

console.log(fails.length ? `\n${fails.length} FAILED` : "\nall probe checks passed");
process.exit(fails.length ? 1 : 0);
