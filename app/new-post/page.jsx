'use client';
import { useState, useEffect } from 'react';
import styles from './newPostStyles.module.css';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);

  const handleSubmit = () => {
    // handleSubmit
  };

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container md:my-20 mx-auto px-12">
        <h1 className={styles.post__heading}>Add New Post</h1>
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
            className={`mt-2 ${styles.post__title}`}
          />

          <label htmlFor="body" className="mt-4 text-lg">
            <b>Content</b>
          </label>
          <textarea
            name="body"
            cols="50"
            rows="10"
            value={body}
            onChange={handleBodyChange}
            placeholder="Post Body"
            className={`mt-2 ${styles.post__body}`}
          />

          <button
            type="submit"
            className="mt-5 w-auto md:w-20 flex justify-center items-center p-3 px-9 space-x-4 font-sans font-bold text-white bg-cyan-700"
          >
            Add
          </button>
        </form>
      </div>
    </main>
  );
};

export default NewPost;
