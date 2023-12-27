'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import styles from './blogStyles.module.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container md:mt-20 mx-auto px-12">
        <h1 className={styles.articles__heading}>Latest Posts</h1>
        <ul className={styles.article_ul}>
          {posts.map((post) => {
            return (
              <li key={post._id}>
                <Link href={`/blog/${post._id}`}>
                  <span className={styles.article_list__title}>
                    {post.title}
                  </span>
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
    </main>
  );
};

export default Blog;
