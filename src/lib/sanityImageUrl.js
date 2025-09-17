import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ayuc5zw2", // your project ID
  dataset: "production", // your dataset
  useCdn: true,
  apiVersion: "2025-08-26", // valid date
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
