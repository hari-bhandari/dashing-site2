import { createClient } from 'contentful';

// Use environment variables as defined in .env.local
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

console.log("Environment variables:", {
  spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  allEnvVars: process.env
});

// Check if environment variables are available
if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful environment variables are missing. Please check your .env.local file.'
  );
}

// Initialize Contentful client with your space ID and access token
export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Type definitions for blog post
export interface BlogPost {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    publishDate: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
          details?: {
            image?: {
              width: number;
              height: number;
            };
          };
        };
        title?: string;
      };
    };
    excerpt?: string;
    content: Document; // Rich text content
    author?: {
      fields: {
        name: string;
        picture?: {
          fields: {
            file: {
              url: string;
            };
          };
        };
      };
    };
  };
}

// Function to fetch all blog posts
// This only runs on the server
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishDate',
    });
    
    return response.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Function to fetch a single blog post by slug
// This only runs on the server
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    console.log("Fetching blog post with slug:", slug);
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2, // Include 2 levels of linked entries (for author and other references)
    });
    
    if (response.items.length === 0) {
      return null;
    }
    
    return response.items[0] as unknown as BlogPost;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}