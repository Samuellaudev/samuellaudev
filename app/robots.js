const frontendUrl = process.env.FRONTEND_URL;

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/emails/', '/edit-post/', '/new-post/'],
    },
    sitemap: `${frontendUrl}/sitemap.xml`,
  };
}
