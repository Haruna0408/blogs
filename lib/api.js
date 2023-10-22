import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "le45f7v20t-cube-blog",
  apiKey: process.env.API_KEY,
});

//記事ページに必要なデータを取得する関数
export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("~~ getPostBySlug ~~");
    console.log(err);
  }
}

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishDate", limit: limit },
    });
    return slugs.contents;
  } catch (err) {
    console, log("~~ getAllSlugs ~~");
    console.log(err);
  }
}
