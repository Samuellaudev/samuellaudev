import Posts from '@/components/Posts';

export const dynamic = 'force-dynamic';

const Blog = () => {
  return (
    <div className="flex min-h-screen flex-col md:px-24">
      <Posts pageHeading="Latest Posts" />
    </div>
  );
};

export default Blog;
