import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the sales-sample LP with safe metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /スターバックス コーヒー ジャパン｜季節のおすすめと定番メニュー（営業用サンプル）/);
  assert.match(html, /name="robots" content="noindex, nofollow"/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /今日は、/);
  assert.match(html, /どんな一杯/);
  assert.match(html, /本ページは営業提案用サンプルです。/);
});

test("includes the confirmed seasonal products and conversion path", async () => {
  const html = await (await render()).text();

  assert.match(html, /ぎゅぎゅっと オレンジ ＆ マンゴー フラペチーノ®/);
  assert.match(html, /チラックス ソーダ オレンジ ＆ マンゴー/);
  assert.match(html, /クラフト ジューシー オレンジ ＆ マンゴー ティー/);
  assert.ok((html.match(/https:\/\/store\.starbucks\.co\.jp\//g) ?? []).length >= 4);
  assert.match(html, /https:\/\/menu\.starbucks\.co\.jp\//);
  assert.match(html, /https:\/\/www\.instagram\.com\/starbucks_j\//);
  assert.doesNotMatch(html, /人気No\.1|売切必至|口コミ|ユーザーレビュー|ジョイフル カプセル|LocalBusiness|¥|￥/);
});

test("keeps links and product content in data modules", async () => {
  const [page, links, seasonal, classics, gitignore] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data/links.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/data/seasonal-products.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/data/classic-products.ts", import.meta.url), "utf8"),
    readFile(new URL("../.gitignore", import.meta.url), "utf8"),
  ]);

  assert.match(page, /LINKS\.storeSearch/);
  assert.match(page, /seasonalProducts\.map/);
  assert.match(page, /classicProducts\.map/);
  assert.match(links, /export const LINKS/);
  assert.match(seasonal, /export const seasonalProducts/);
  assert.match(classics, /export const classicProducts/);
  assert.match(gitignore, /Codex starbucks\.jp\.lp\.png/);
});

test("publishes only confirmed imagery with accessible motion and focus styles", async () => {
  const [page, moodItems, layout, styles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data/mood-items.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /images\/generated|演出イメージ/);
  assert.doesNotMatch(moodItems, /\bimage\b|\balt\b|images\/generated/);
  assert.doesNotMatch(layout, /og\.png/);
  assert.match(layout, /images\/orange-mango-hero\.jpg/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);
  await assert.rejects(access(new URL("../public/images/generated", import.meta.url)));
  await assert.rejects(access(new URL("../public/og.png", import.meta.url)));
});
