import type { MetadataRoute } from 'next';
import { seoContent } from '@/content/siteContent';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${seoContent.siteUrl}/sitemap.xml`,
    host: seoContent.siteUrl
  };
}
