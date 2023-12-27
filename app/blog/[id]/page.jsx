'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './postStyles.module.css';

const Post = ({ params }) => {
  const [post, setPost] = useState([]);

  const getPostData = async () => {
    try {
      const response = await axios.get(`/api/posts/${params.id}`);
      const data = response.data;
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="container md:mt-20 mx-auto px-12">
      <h1 className={styles.post__title}>{post.title}</h1>
      <p className={styles.post__date}>
        {new Date(post.createdAt).toDateString()}
      </p>
      <p className={styles.post__body}>{post.body}</p>
    </div>
  );
};

export default Post;
