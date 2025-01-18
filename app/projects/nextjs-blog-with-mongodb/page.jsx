'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import ScrollBar from '@/components/Animation/ScrollBar';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../projectsStyles.module.css';

const NextJsCMSBlogPage = () => {
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  return (
    <>
      <ScrollBar />
      <div className="flex min-h-screen flex-col">
        <div className="container mx-auto px-6 md:px-24 md:mt-20 text-[#565b5f] dark:text-white">
          <div className="flex flex-row justify-between items-center">
            <h2
              className={`${styles.project__heading} mb-10 text-gray-600 dark:text-white`}
            >
              Next.js CMS Blog with MongoDB
            </h2>
            <button
              onClick={() => router.push('/projects')}
              className={`${styles.light_theme_back_btn} dark:hover:bg-white dark:hover:text-black`}
            >
              <span className="hidden md:inline">&larr; </span>Back
            </button>
          </div>
        </div>
        <div className="project-image p-6 bg-gradient-to-r from-primary-400/80 to-primary-600/90">
          <Image
            src={
              resolvedTheme === 'light'
                ? '/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Home/Light.png'
                : '/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Home/Dark.png'
            }
            alt="Website image"
            width={650}
            height={650}
            className="rounded-md mx-auto shadow-md"
          />
        </div>
        <div className="project-info container mx-auto px-6 md:px-24 text-[#565b5f] dark:text-white">
          <section className="flex flex-col md:flex-row justify-between my-16">
            <div className="flex flex-col space-y-1 mb-4 md:mr-24">
              <h2 className="font-semibold">Project Description</h2>
              <p>
                A serverless web application built with Next.js and MongoDB,
                designed to facilitate the management and publication of blog
                content through a custom content management system.
              </p>
            </div>
            <div className="flex flex-col w-full">
              <div className="project-url mb-4">
                <p className="font-semibold pb-1">URL</p>
                <a
                  href="https://nextjs-mongodb-cms.vercel.app/"
                  className="hover:text-primary-500"
                >
                  https://nextjs-mongodb-cms.vercel.app/
                </a>
              </div>
              <div className="project-technologies space-y-1 mb-4">
                <p className="font-semibold">Technologies</p>
                <p>Next.js, MongoDB, Tailwind CSS, Cloudinary, Stripe API</p>
              </div>
              <div className="project-source-code">
                <p className="font-semibold">Source Code</p>
                <div className="flex flex-row space-x-2">
                  <a
                    href="https://github.com/Samuellaudev/nextjs-blog"
                    target="_blank"
                  >
                    <Image
                      src="/svg/socialMedia/icon-github.svg"
                      alt="github icon"
                      width={25}
                      height={25}
                      className="pt-2 cursor-pointer duration-200 brightness-0 hover:brightness-[50%] hover:contrast-[100%] dark:brightness-200"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row justify-between my-10">
            <div className="flex flex-col mb-4">
              <h2 className="font-semibold mb-3">Features</h2>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">CMS Blogging system</p>
                <li>
                  Display all posts on the home and blog pages, depending on the
                  user&apos;s login status
                </li>
                <li>
                  Add, edit or delete post in Admin account in Markdown syntax
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">
                  Interact with MongoDB via Vercel Functions
                </p>
                <li>
                  Vercel&apos;s Serverless Functions simplifies MongoDB
                  interaction, offering cost-effective, secure, and hassle-free
                  database management
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6 line-through">
                <p className="font-semibold">
                  AWS S3 Image Upload and Presigned URLs
                </p>
                <li>
                  Easily upload images via AWS S3 and access them securely using
                  pre-signed URLs for retrieval
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6 ">
                <p className="font-semibold">Cloudinary Image Upload</p>
                <li>
                  Easily upload images via Cloudinary and access them using
                  secured image URLs for retrieval
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">
                  JWT authorization with HttpOnly Cookie
                </p>
                <li>
                  Manage users with JWT authorization and secure HttpOnly
                  Cookies for enhanced authentication and security
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold"> Stripe Payment Gateway</p>
                <li>
                  Enable Stripe payment gateway in Test Mode to grant access to
                  premium content for users
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">Dark Mode</p>
                <li> Implementing Dark Mode using Tailwind CSS</li>
              </div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row justify-between my-10">
            <div className="flex flex-col mb-4">
              <h2 className="font-semibold mb-3">CMS Blogging Platform</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Home/Light.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Blogs/Page_Blog_Light.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Post/Page_Post_Top.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Post/Page_Post_Bottom.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row justify-between my-10">
            <div className="flex flex-col mb-4">
              <h2 className="font-semibold mb-3">Responsive Design</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Responsive_Design/Page_Home.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Responsive_Design/Page_Dashboard.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Responsive_Design/Page_Post.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Responsive_Design/Page_Post_Edit.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row justify-between my-10">
            <div className="flex flex-col mb-4">
              <h2 className="font-semibold mb-3">Admin Dashboard</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Admin_Panel/Page_Panel_User.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Admin_Panel/Page_Panel_Dashboard.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Post_Edit&Add/Page_Post_Add.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Post_Edit&Add/Page_Post_Edit.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row justify-between my-10">
            <div className="flex flex-col mb-4">
              <h2 className="font-semibold mb-3">Dark Mode</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Home/Light.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/NextJs_v14_Blog_CMS_with_MongoDB/Page_Home/Dark.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row justify-between my-10">
            <div className="flex flex-col mb-4">
              <p className="font-semibold mb-4 italic">
                (Update on July 2, 2024: The image upload process now uses
                Cloudinary instead of AWS S3.)
              </p>
              <h2 className="font-semibold mb-3">Challenge</h2>
              <div className="feature-one space-y-1 ">
                <p className="font-semibold mb-4">
                  Moving from using upload-files-to-server with Multipart to
                  upload-images to AWS S3
                </p>
                <p>
                  In a traditional Express.js server application, I would use{' '}
                  <b>Multer</b> to handle image upload operation. However, in a
                  serverless environment like Vercel, I would need a file
                  storage provider.
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row justify-between my-10">
            <div className="flex flex-col mb-4">
              <h2 className="font-semibold mb-3">Solution</h2>
              <p>
                With the knowledge I acquired during my journey to passing the
                AWS Certified Solutions Architect - Associate exam, I attempted
                to utilize <b>AWS S3</b> as the solution.
              </p>
              <br />
              <p>
                Following the instructions provided by Vercel in{' '}
                <a
                  className="text-primary-500"
                  href="https://vercel.com/templates/next.js/aws-s3-image-upload-nextjs"
                >
                  this article
                </a>{' '}
                , I successfully implemented the image upload and retrieval
                operations. These can be summarized into the following steps:
              </p>
              <br />
              <i className="mb-1">AWS S3</i>
              <ol className="space-y-2">
                <li>Step 1: Create an S3 bucket</li>
                <li>
                  Step 2: Create a new IAM User and attach policies related to
                  S3 operations
                </li>
                <li>
                  Step 3: Save the access key and secret key for the IAM User to{' '}
                  <code>.env.local</code> file
                </li>
                <li>
                  Step 4: Configure CORS to enable uploads from the browser
                </li>
              </ol>
              <br />
              <i className="mb-1">Next.js Application</i>
              <ol className="space-y-2">
                <li>
                  Step 1: Create a POST request URL to upload file to AWS S3
                </li>
                <li>
                  Step 2: Create the front-end input interface for user to
                  upload file
                </li>
                <li>
                  Step 3: Create a GET request URL to retrieve presigned URL
                  from AWS S3
                </li>
                <li>
                  Step 2: Set the presigned URL as the <code>src</code> of{' '}
                  <code>&lt;Image&gt;</code> component
                </li>
              </ol>
              <br />
              <p>
                The details of the code to image upload and retrieval operations
                can be seen in{' '}
                <Link
                  className="text-primary-500"
                  href="https://www.samuellau.dev/blog/65b67b3ce459da735d7cca9b"
                >
                  this article
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NextJsCMSBlogPage;
