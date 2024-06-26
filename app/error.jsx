'use client';

import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = ({ error, reset }) => {
  return (
    <section className=" min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl pt-32 pb-16">
        <div className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="fas fa-exclamation-triangle fa-5x text-8xl text-red-400"></FaExclamationTriangle>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 mb-2">
              Something went wrong!
            </h1>
            <h2 className="text-2xl font-bold my-2 text-red-400">
              {error.message}
            </h2>
            <p className="text-gray-500 text-xl my-5">
              Shall we try again? ...
            </p>
            <button
              onClick={() => reset()}
              className="bg-yellow-500 hover:bg-yellow-600 font-bold py-4 px-6 rounded cursor-pointer"
            >
              Try again
            </button>
            <p className="text-gray-500 text-xl my-5">Or back to home...</p>
            <Link
              href="/"
              className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-4 px-6 rounded inline-block cursor-pointer"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};
export default ErrorPage;
