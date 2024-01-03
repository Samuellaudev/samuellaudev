'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Loading from './Loading';
import styles from './postsStyles.module.css';

const Posts = ({ pageHeading }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/posts');
      const { data } = response;

      setPosts(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAddNewPost = () => router.push('/new-post');

  const handleEditPost = (id) => router.push(`/edit-post/${id}`);

  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`);

      fetchPosts();
      toast.success('Deleted post successfully');
    } catch (error) {
      console.log('Delete error:', error);
      toast.success('Fail to delete post');
    }
  };

  return (
    <div className="container md:mt-20 mx-auto px-12 text-[#565b5f] dark:text-white dark:bg-black">
      <div className="section__heading flex flex-row items-baseline justify-between">
        <h1 className={`${styles.articles__heading} text-[#ADB7BE]`}>
          {pageHeading}
        </h1>
        {pageHeading === 'Dashboard' && (
          <button
            type="button"
            onClick={handleAddNewPost}
            className={`${styles.light_theme_add_new_btn} dark:hover:bg-white dark:hover:text-black`}
          >
            + Add new
          </button>
        )}
      </div>
      {isLoading ? (
        <Loading pageHeading={pageHeading} />
      ) : (
        <>
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
                      onClick={() => handleEditPost(post._id)}
                      className={`${styles.light_theme_btn} bg-cyan-700 hover:text-cyan-700 hover:ring-cyan-700 dark:hover:ring-0`}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeletePost(post._id)}
                      className={`${styles.light_theme_btn} bg-red-500 hover:text-red-500 hover:ring-red-500 dark:hover:ring-0`}
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
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default Posts;
