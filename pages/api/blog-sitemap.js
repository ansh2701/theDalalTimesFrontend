import { fetchAPI } from "../../lib/api";
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  try {
    const articles = await fetchAPI(`/articles`);
    // An array with your links
    const links = [];
    articles.map((post) => {
      links.push({
        url: `/blog/${post.slug}`,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // Add other pages
    const pages = ["/news", "/tweet"];
    pages.map((url) => {
      links.push({
        url,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
