import { createClient } from 'contentful';

// Initialize Contentful client with your space ID and access token
// This will only run on the server
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
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
    content: any; // Rich text content
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
    const entries = await contentfulClient.getEntries<BlogPost>({
      content_type: 'blogPost',
      order: '-fields.publishDate',
      include: 2, // Include linked entries (like authors)
    });
    
    return entries.items as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Function to fetch a single blog post by slug
// This only runs on the server
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const entries = await contentfulClient.getEntries<BlogPost>({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2,
      limit: 1,
    });
    
    return entries.items.length > 0 
      ? (entries.items[0] as unknown as BlogPost) 
      : null;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}