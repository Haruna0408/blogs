import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "le45f7v20t-cube-blog",
  apiKey: process.env.API_KEY,
});
