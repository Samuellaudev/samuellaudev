const backendUrl = process.env.BACKEND_URL;
const frontendUrl = process.env.FRONTEND_URL;

export const revalidate = 3600;

export default async function sitemap() {
  const fetchPosts = async () => {
    try {
      let apiUrl = `${backendUrl}/api/posts`;

      const res = await fetch(apiUrl);
      const data = await res.json();
      const { posts } = data;

      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // const posts = await fetchPosts();

  // const result = posts?.map((item) => ({
  //   url: `${frontendUrl}/blog/${item._id}`,
  //   lastModified: item.updatedAt,
  //   changeFrequency: 'monthly',
  //   priority: 1,
  // }));

  return [
    {
      url: `${frontendUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${frontendUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${frontendUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${frontendUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // ...result,
  ];
}
