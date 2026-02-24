'use client';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { readingTime, formatDate } from '@/utils/helpers';
import MarkdownPreview from '@/components/Markdown/MarkdownPreview';
import ScrollBar from '@/components/Animation/ScrollBar';
import styles from './postStyles.module.css';
import Giscus from '@giscus/react';

export default function PostClient({ post }) {
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  const giscusTheme = resolvedTheme === 'dark' ? 'dark' : 'light';

  return (
    <>
      <ScrollBar />
      <div className={ `${ styles.light_theme_post } dark:text-white dark:bg-black` }>
        <div className="mb-10">
          <h1 className="my-5">{ post?.title }</h1>
          <div className="flex justify-between">
            <div className={ styles.post__date }>
              { formatDate(post?.createdAt) }
              <p>{ readingTime(post?.body) }</p>
            </div>
            <button
              onClick={ () => router.back() }
              className={ `${ styles.light_theme_back_btn } dark:hover:bg-white dark:hover:text-black` }
            >
              <span className="hidden md:inline">&larr; </span>Back
            </button>
          </div>
          <div className={ styles.post__body }>
            <MarkdownPreview post={ post?.body ?? '' } isEdit={ false } />
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
            theme={ giscusTheme }
            lang="en"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}