import { MetadataRoute } from 'next'
import { getAllBlogPosts } from './lib/contentful'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  const baseUrl = 'https://dashing-website-2.vercel.app/'
  const blogPosts = await getAllBlogPosts().catch(() => [])

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.7
    },
    {
      url: `${baseUrl}/your-data`,
      lastModified: new Date(),
      priority: 0.7
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.3
    }
  ]

  const blogEntries = blogPosts.map(post => {
    const slug = post.fields.slug
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(post.fields.publishDate || Date.now()),
      priority: 0.6
    }
  })

  return [...routes, ...blogEntries]
}