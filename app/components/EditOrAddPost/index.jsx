'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import MarkdownPreview from '@/app/components/Markdown/MarkdownPreview';
import { ToastContainer, toast } from 'react-toastify';
import styles from './editOrAddPostStyles.module.css';

const EditOrAddNewPost = ({ postType }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const checkLogin = () => {
      const loggedIn =
        localStorage.getItem('isLogin') && localStorage.getItem('userInfo');
      setIsLogin(loggedIn);
      if (!loggedIn) router.push('/');
    };

    checkLogin();
  }, [router]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${params.id}`);
        const { data: postData } = response;
        const { title, body } = postData;

        setTitle(title);
        setBody(body);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (params.id) fetchPost();
  }, [params.id]);

  const fieldMap = {
    'new-post': {
      title: 'Add New Post',
      goBackButton: '/dashboard',
      submitButton: 'Add',
      successMessage: 'Post created successfully',
      errorMessage: 'Unable to create post',
    },
    'edit-post': {
      title: 'Edit Post',
      goBackButton: '/dashboard',
      submitButton: 'Edit',
      successMessage: 'Post edited successfully',
      errorMessage: 'Unable to edit post',
    },
  };

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

      let response;
      if (postType === 'edit-post') {
        response = await axios.put(`/api/posts/${params.id}`, postData);
      } else if (postType === 'new-post') {
        response = await axios.post('/api/posts', postData);
      }

      if (response.status === 200) {
        toast.success(fieldMap[postType].successMessage);

        if (postType === 'new-post') {
          setTitle('');
          setBody('');
        }

        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error(fieldMap[postType].errorMessage);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container md:my-20 mx-auto px-12">
        {isLogin && (
          <>
            <div className="flex flex-row justify-between items-end">
              <h1 className={styles.post__heading}>
                {fieldMap[postType].title}
              </h1>
              <Link
                href={fieldMap[postType].goBackButton}
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
                className="mt-7 p-3 px-9 space-x-4 w-auto md:w-20 flex justify-center items-center font-sans font-bold text-white bg-cyan-700 border border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 transition duration-200"
              >
                {fieldMap[postType].submitButton}
              </button>
            </form>
          </>
        )}
      </div>
      <ToastContainer />
    </main>
  );
};

export default EditOrAddNewPost;
