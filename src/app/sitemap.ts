import { MetadataRoute } from 'next'

const baseUrl = 'https://www.dashingdisty.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/our-product', priority: 0.9 },
    { path: '/for-sales-leaders', priority: 0.8 },
    { path: '/for-finance-leaders', priority: 0.8 },
    { path: '/for-ceos', priority: 0.8 },
    { path: '/resources', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/about', priority: 0.6 },
    { path: '/our-story', priority: 0.6 },
    { path: '/your-data', priority: 0.5 },
    { path: '/privacy-policy', priority: 0.3 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    priority,
  }))
}
