'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from './postsStyles.module.css';

const Posts = ({ pageHeading }) => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const getPostsData = async () => {
    try {
      const response = await axios.get('/api/posts');
      const { data, currentPage, nextPage } = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  const handleAddNewPost = () => router.push('/new-post');

  return (
    <div className="container md:mt-20 mx-auto px-12">
      <div className="section__heading flex flex-row items-baseline justify-between">
        <h1 className={styles.articles__heading}>{pageHeading}</h1>
        <button onClick={handleAddNewPost}>+ Add new</button>
      </div>
      <ul className={styles.article_ul}>
        {posts.map((post) => {
          return (
            <li key={post._id}>
              <Link href={`/blog/${post._id}`}>
                <span className={styles.article_list__title}>{post.title}</span>
                <span className={styles.article_list__date}>
                  {new Date(post.createdAt).toDateString()}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* <% if (nextPage !== null) { %>
            <a href="/?page=<%= nextPage %>" className="pagination">&lt; View Older Posts</a>
          <% } %> */}
    </div>
  );
};

export default Posts;
