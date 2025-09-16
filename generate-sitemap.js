import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Always use www version for SEO consistency
const siteUrl = "https://www.bluestarsurgicalhouse.com.np";

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: siteUrl });

  // Add your pages
  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
  sitemap.write({ url: "/categories", changefreq: "weekly", priority: 0.9 });
  sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.7 });
  sitemap.write({ url: "/products", changefreq: "weekly", priority: 0.9 });
  sitemap.write({ url: "/order", changefreq: "weekly", priority: 0.8 });
  sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.8 });

  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);
  const sitemapPath = path.resolve(__dirname, "public", "sitemap.xml");
  createWriteStream(sitemapPath).write(sitemapData);
  console.log("✅ Sitemap generated at:", sitemapPath);
}

generateSitemap().catch(console.error);
