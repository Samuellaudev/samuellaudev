import Posts from '@/components/Posts';

const Blog = () => {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Posts pageHeading="Latest Posts" />
    </main>
  );
};

export default Blog;
