import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;

if (!space || !accessToken) {
  // eslint-disable-next-line no-console
  console.warn("Contentful environment variables are not set. Blog section will render empty.");
}

export const contentfulClient = createClient({
  space: space ?? "",
  accessToken: accessToken ?? "",
});

export type ContentfulBlogPostFields = {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
};

export async function fetchBlogPostSummaries(limit = 6) {
  if (!space || !accessToken) return [];

  const res = await contentfulClient.getEntries<ContentfulBlogPostFields>({
    content_type: "blogPost",
    order: ["-fields.publishedDate"],
    limit,
  });

  return res.items.map((item) => ({
    slug: item.fields.slug,
    title: item.fields.title,
    excerpt: item.fields.excerpt,
    publishedDate: item.fields.publishedDate,
  }));
}
