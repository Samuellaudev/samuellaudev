'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import MarkdownPreview from '@/components/Markdown/MarkdownPreview';
import Loading from './Loading';
import styles from './postStyles.module.css';

const Post = ({ params }) => {
  const [post, setPost] = useState({ title: '', body: '', createdAt: '' });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/posts/${params.id}`);
        const postData = response.data;

        setPost(postData);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [params.id]);

  const formatDate = (date) => new Date(date).toDateString();

  return (
    <div className={`${styles.light_theme_post} dark:text-white dark:bg-black`}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-row justify-between items-end">
            <h1 className={styles.post__title}>{post.title}</h1>
            <button
              onClick={() => router.back()}
              className={`${styles.light_theme_back_btn} dark:hover:bg-white dark:hover:text-black`}
            >
              <span className="hidden md:inline">&larr; </span>Back
            </button>
          </div>
          <p className={styles.post__date}>{formatDate(post?.createdAt)}</p>
          <div className={styles.post__body}>
            <MarkdownPreview post={post.body} isEdit={false} />
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
