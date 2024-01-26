import Posts from '@/components/Posts';
import { revalidatePath } from 'next/cache';

const Blog = () => {
  revalidatePath('/blog', 'page');

  return (
    <div className="flex min-h-screen flex-col md:px-24">
      <Posts pageHeading="Latest Posts" />
    </div>
  );
};

export default Blog;
