import type { MetadataRoute } from 'next';
import { seoContent } from '@/content/siteContent';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seoContent.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ];
}
