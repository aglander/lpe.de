// scripts/prewarm.js
import fetch from "node-fetch";
import xml2js from "xml2js";

const SITEMAP_URL = "https://www.lpe.de/sitemap.xml";

(async () => {
  try {
    console.log(`🔄  Lade Sitemap von ${SITEMAP_URL}`);
    const res = await fetch(SITEMAP_URL);
    const xml = await res.text();

    const parsed = await xml2js.parseStringPromise(xml);
    const urls =
      parsed.urlset?.url?.map((u) => u.loc[0]) ||
      parsed.sitemapindex?.sitemap?.map((s) => s.loc[0]) ||
      [];

    console.log(`✅  ${urls.length} URLs gefunden – Cache wird vorgewärmt…`);

    let success = 0;
    for (const url of urls) {
      const r = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 12; Pixel 6 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        },
      });
      if (r.ok) success++;
      console.log(`${r.status} → ${url}`);
    }

    console.log(`🚀  Cache-Warm-up abgeschlossen (${success}/${urls.length} OK).`);
    process.exit(0);
  } catch (err) {
    console.error("❌  Fehler beim Cache-Warm-up:", err);
    process.exit(1);
  }
})();