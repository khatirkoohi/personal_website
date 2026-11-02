import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { site } from "../site";

export async function GET(context: APIContext) {
  const posts = (await getCollection("writing", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
  );
  return rss({
    title: `${site.name}: Writing`,
    description: "Technical articles about building and measuring backend and AI systems.",
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.published,
      link: `/writing/${p.id}/`,
    })),
  });
}
