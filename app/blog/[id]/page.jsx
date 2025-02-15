'use client';

import { POSTS_URL, AWS_S3_GET_URL } from '@/utils/constants';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import axios from 'axios';
import { readingTime, formatDate } from '@/utils/helpers';
import MarkdownPreview from '@/components/Markdown/MarkdownPreview';
import ScrollBar from '@/components/Animation/ScrollBar';
import Loading from './Loading';
import styles from './postStyles.module.css';
import Giscus from '@giscus/react';

const Post = ({ params }) => {
  const { resolvedTheme } = useTheme();
  const [post, setPost] = useState({
    title: '',
    body: '',
    createdAt: '',
    image: {},
  });
  // const [imgLink, setImgLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Reactivate until migrate to Cloudinary
  // const retrieveImage = async (imageName) => {
  //   try {
  //     const res = await axios.get(`${AWS_S3_GET_URL}/${imageName}`);
  //     const { url } = res.data;

  //     setImgLink(url);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${POSTS_URL}/${params.id}`);
        const postData = response.data;

        // await retrieveImage(postData?.image?.name);
        setPost(postData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [params.id]);

  return (
    <>
      <ScrollBar />
      <div
        className={`${styles.light_theme_post} dark:text-white dark:bg-black`}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <div className="mb-10">
            {/* Reactivate until migrate to Cloudinary */}
            {/* {imgLink ? (
              <div className="mb-6">
                <Image
                  src={imgLink}
                  alt="post image"
                  width={650}
                  height={650}
                  className="rounded-md mx-auto"
                />
              </div>
            ) : (
              <></>
            )} */}
            <h1 className="my-5">{post.title}</h1>
            <div className="flex justify-between">
              <div className={styles.post__date}>
                {formatDate(post?.createdAt)}
                <p className="">{readingTime(post?.body)}</p>
              </div>
              <button
                onClick={() => router.back()}
                className={`${styles.light_theme_back_btn} dark:hover:bg-white dark:hover:text-black`}
              >
                <span className="hidden md:inline">&larr; </span>Back
              </button>
            </div>
            <div className={styles.post__body}>
              <MarkdownPreview post={post.body} isEdit={false} />
            </div>
            <Giscus
              id="comments"
              repo="Samuellaudev/samuellaudev"
              repoId="R_kgDOKsiPlA"
              category="Announcements"
              categoryId="DIC_kwDOKsiPlM4CcwNK"
              mapping="pathname"
              term="Welcome!"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme={resolvedTheme}
              lang="en"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
