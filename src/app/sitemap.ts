import { MetadataRoute } from 'next'


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  const baseUrl = 'https://dashing-website-2.vercel.app/'

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

  return [...routes]
}