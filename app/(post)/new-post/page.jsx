'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import MarkdownPreview from '@/app/components/Markdown/MarkdownPreview';
import { ToastContainer, toast } from 'react-toastify';
import styles from './newPostStyles.module.css';

const NewPost = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('isLogin') || !localStorage.getItem('userInfo')) {
      router.push('/');
      setIsLogin(false);
      return;
    }

    setIsLogin(true);
  }, [router]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = { title, body };
      if (title === '' || body === '') {
        toast.error('Please fill in the title and body');
        return;
      }

      const response = await axios.post('/api/posts', postData);

      if (response.status === 200) {
        toast.success('Post created successfully');
        setTitle('');
        setBody('');
      }
    } catch (error) {
      console.log(error);
      toast.error('Unable to create post');
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container md:my-20 mx-auto px-12">
        {isLogin && (
          <>
            <div className="flex flex-row justify-between items-end">
              <h1 className={styles.post__heading}>Add New Post</h1>
              <Link
                href="/dashboard"
                className="border p-2 px-6 hover:bg-white hover:text-black transition duration-250"
              >
                &larr; Back
              </Link>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label htmlFor="title" className="mt-10 text-lg">
                <b>Title</b>
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="Post Title"
                className={`mt-2 text-black ${styles.post__title}`}
                required
              />
              <label htmlFor="body" className="mt-4 mb-2 text-lg">
                <b>Content</b>
              </label>
              <MarkdownPreview
                isEdit
                input={body}
                setInput={setBody}
                handleInputChange={handleBodyChange}
              />
              <button
                type="submit"
                className="mt-5 w-auto md:w-20 flex justify-center items-center p-3 px-9 space-x-4 font-sans font-bold text-white bg-cyan-700"
              >
                Add
              </button>
            </form>
          </>
        )}
      </div>
      <ToastContainer />
    </main>
  );
};

export default NewPost;
