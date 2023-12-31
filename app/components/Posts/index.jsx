'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from './postsStyles.module.css';

const Posts = ({ pageHeading }) => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts');
      const { data } = response;
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAddNewPost = () => router.push('/new-post');
  const handleEditPost = () => alert('edit');
  const handleDeletePost = () => alert('delete');

  return (
    <div className="container md:mt-20 mx-auto px-12">
      <div className="section__heading flex flex-row items-baseline justify-between">
        <h1 className={styles.articles__heading}>{pageHeading}</h1>
        {pageHeading === 'Dashboard' && (
          <button
            type="button"
            onClick={handleAddNewPost}
            className="border p-2 px-6 hover:bg-white hover:text-black transition duration-250"
          >
            + Add new
          </button>
        )}
      </div>
      <ul className={styles.article_ul}>
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              href={`/blog/${post._id}`}
              className="flex flex-row justify-between "
            >
              <p className={styles.article_list__title}>{post.title}</p>
              {pageHeading === 'Latest Posts' && (
                <p className={styles.article_list__date}>
                  {new Date(post.updatedAt).toDateString()}
                </p>
              )}
              {pageHeading === 'Dashboard' && (
                <div className="flex flex-col">
                  <p className={styles.article_list__date}>
                    Updated at: {new Date(post.updatedAt).toDateString()}
                  </p>
                  <p className={styles.article_list__date}>
                    Created at: {new Date(post.createdAt).toDateString()}
                  </p>
                </div>
              )}
            </Link>
            {pageHeading === 'Dashboard' && (
              <div className="flex flex-row justify-end">
                <button
                  type="button"
                  onClick={handleEditPost}
                  className="text-base p-2 px-4 mb-4 font-sans text-white bg-cyan-700 hover:bg-white hover:text-cyan-700 transition duration-250"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={handleDeletePost}
                  className="text-base p-2 px-4 mb-4 font-sans text-white bg-red-500 hover:bg-white hover:text-red-500 transition duration-250"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* <% if (nextPage !== null) { %>
            <a href="/?page=<%= nextPage %>" className="pagination">&lt; View Older Posts</a>
          <% } %> */}
    </div>
  );
};

export default Posts;
