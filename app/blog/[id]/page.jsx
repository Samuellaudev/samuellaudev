'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MarkdownPreview from '@/components/Markdown/MarkdownPreview';
import styles from './postStyles.module.css';

const Post = ({ params }) => {
  const [post, setPost] = useState({ title: '', body: '', createdAt: '' });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${params.id}`);
        const postData = response.data;
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [params.id]);

  const formatDate = (date) => new Date(date).toDateString();

  return (
    <div className={`container mt-16 md:mt-28 mx-auto px-12 ${styles.post}`}>
      <h1 className={styles.post__title}>{post.title}</h1>
      <p className={styles.post__date}>{formatDate(post.createdAt)}</p>
      <div className={styles.post__body}>
        <MarkdownPreview post={post.body} isEdit={false} />
      </div>
    </div>
  );
};

export default Post;
