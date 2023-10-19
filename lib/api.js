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
