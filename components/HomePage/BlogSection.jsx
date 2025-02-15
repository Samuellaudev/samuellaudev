'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { readingTime, formatDate } from '@/utils/helpers';
import { BlogPostLoading as Loading } from './Loading';
import styles from './homePageSection.module.css';
import Spotlight from '../Animation/Spotlight';

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const numberOfPosts = [{}, {}, {}];

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/posts');
      const { posts } = response.data;
      const latestPosts = posts.slice(0, 3);

      setPosts(latestPosts);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section id="latest-posts" className="text-[#565b5f] dark:text-white pt-24">
      <h2 className="mb-9 text-3xl md:text-4xl text-[#ADB7BE] dark:text-white text-center">
        <span className="flex items-center">
          <span className="h-px flex-1 bg-[#ADB7BE]"></span>
          <span className="shrink-0 px-4 md:px-6">Latest Posts</span>
          <span className="h-px flex-1 bg-[#ADB7BE]"></span>
        </span>
      </h2>

      <>
        {isLoading ? (
          <div className="flex space-x-2 md:space-x-10 overflow-x-auto">
            {numberOfPosts.map((item, index) => (
              <Loading key={index} />
            ))}
          </div>
        ) : (
          <div className="flex space-x-4 overflow-x-auto no-scrollbar">
            {posts.map((post) => {
              return (
                <Spotlight
                  key={post._id}
                  className="flex flex-col justify-between shrink-0 md:shrink w-[300px] md:w-1/3 px-8 py-4 my-2 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 duration-200 bg-white border dark:border-none"
                >
                  <div className="upper-content">
                    <p className="font-light text-sm text-gray-600 dark:text-gray-400">
                      {formatDate(post?.createdAt)}
                    </p>
                    <div className="mt-2">
                      <p className="text-lg font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                        {post?.title}
                      </p>
                      <p className="text-sm pt-2 text-gray-600 dark:text-gray-400">
                        {readingTime(post?.body)}
                      </p>
                      <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                        {post?.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post?._id}`}
                    className="pt-4 text-primary-600 dark:text-primary-400 hover:underline"
                    role="link"
                  >
                    Read more
                  </Link>
                </Spotlight>
              );
            })}
          </div>
        )}
      </>
    </section>
  );
};

export default BlogSection;
