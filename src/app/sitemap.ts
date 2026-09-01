import { MetadataRoute } from 'next'
import { fetchBlogFeedEntries } from './lib/hubspotBlog'

const baseUrl = 'https://www.dashingdisty.com'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/our-product', priority: 0.9 },
    { path: '/for-sales-leaders', priority: 0.8 },
    { path: '/for-finance-leaders', priority: 0.8 },
    { path: '/for-ceos', priority: 0.8 },
    { path: '/resources', priority: 0.7 },
    { path: '/blog', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/book-a-demo', priority: 0.7 },
    { path: '/about', priority: 0.6 },
    { path: '/our-story', priority: 0.6 },
    { path: '/your-data', priority: 0.5 },
    { path: '/privacy-policy', priority: 0.3 },
  ]

  const now = new Date()

  const staticEntries = routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    priority,
  }))

  // Individual blog posts live in HubSpot; the RSS feed is the list of published slugs.
  // If HubSpot is unreachable the helper returns [] so the sitemap still builds.
  const postEntries = (await fetchBlogFeedEntries()).map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastModified ?? now,
    priority: 0.6,
  }))

  return [...staticEntries, ...postEntries]
}
