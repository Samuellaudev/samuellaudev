'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { readingTime, formatDate } from '@/utils/helpers';
import Pagination from '@/components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Loading from './Loading';
import styles from './postsStyles.module.css';

const Posts = ({ pageHeading }) => {
  const [postsData, setPostsData] = useState({ page: 1, pages: 1, posts: [] });
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    // const pageNumber = parseInt(searchParams.get('pageNumber')) || 1;
    // const search = searchParams.get('search') || '';
    setPageNumber(parseInt(searchParams.get('pageNumber')) || 1);
    setSearch(searchParams.get('search') || '');
  }, []);

  const router = useRouter();

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/api/posts?search=${search}&pageNumber=${pageNumber}`,
      );
      const postsData = response.data;

      setPostsData(postsData);
    } catch (error) {
      toast.error('Failed to fetch posts');
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  }, [search, pageNumber]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleAddNewPost = () => router.push('/new-post');

  const handleEditPost = (id) => router.push(`/edit-post/${id}`);

  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`);

      fetchPosts();
      toast.success('Deleted post successfully');
    } catch (error) {
      console.log('Delete error:', error);
      toast.error('Fail to delete post');
    }
  };

  return (
    <div className="container md:mt-20 mx-auto px-6 text-[#565b5f] dark:text-white dark:bg-black">
      <div className="section__heading flex flex-row items-baseline justify-between">
        <h1 className="mt-16 font-normal text-3xl md:mt-12 md:mb-4 text-[#ADB7BE]">
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
        {pageHeading === 'Latest Posts' && search && search.length > 0 && (
          <button
            onClick={() => router.push('/blog?search=&pageNumber=1')}
            className={`${styles.light_theme_back_btn} dark:border dark:border-white dark:hover:bg-white dark:hover:text-black`}
          >
            <span className="hidden md:inline">&larr; </span>Back
          </button>
        )}
      </div>
      {isLoading ? (
        <Loading pageHeading={pageHeading} />
      ) : (
        <>
          <ul className={styles.article_ul}>
            {postsData?.posts?.map((post) => (
              <li key={post._id}>
                <Link
                  href={`/blog/${post._id}`}
                  className="flex flex-row justify-between "
                >
                  <div className="post-title">
                    <p className={styles.article_list__title}>{post.title}</p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {post?.description}
                    </p>
                  </div>
                  {pageHeading === 'Latest Posts' && (
                    <div className={styles.article_list__date}>
                      {formatDate(post.createdAt)}
                      <div className="">{readingTime(post?.body)}</div>
                    </div>
                  )}
                  {pageHeading === 'Dashboard' && (
                    <div className="flex flex-col">
                      <p className={styles.article_list__date}>
                        Updated at: {formatDate(post.updatedAt)}
                      </p>
                      <p className={styles.article_list__date}>
                        Created at: {formatDate(post.createdAt)}
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
          <Pagination
            page={postsData?.page}
            pages={postsData?.pages}
            search={search}
            pageType={pageHeading}
          />
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default Posts;
