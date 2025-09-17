import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ayuc5zw2", // your Sanity project ID
  dataset: "production", // your dataset name
  apiVersion: "2025-09-15", // fixed API date
  useCdn: true, // `false` if you need real-time data
});
