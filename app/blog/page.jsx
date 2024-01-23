import Posts from '@/components/Posts';
import { revalidatePath } from 'next/cache';

const Blog = () => {
  revalidatePath('/blog', 'page');

  return (
    <main className="flex min-h-screen flex-col">
      <Posts pageHeading="Latest Posts" />
    </main>
  );
};

export default Blog;
