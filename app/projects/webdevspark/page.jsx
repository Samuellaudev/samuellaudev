'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../projectsStyles.module.css';

const WebDevSparkPage = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-6 md:px-24 md:mt-20 text-[#565b5f] dark:text-white">
        <div className="flex flex-row justify-between items-center">
          <h2
            className={`${styles.project__heading} mb-10 text-gray-600 dark:text-white`}
          >
            WebDevSpark - WordPress Theme project
          </h2>
          <button
            onClick={() => router.back()}
            className={`${styles.light_theme_back_btn} dark:hover:bg-white dark:hover:text-black`}
          >
            <span className="hidden md:inline">&larr; </span>Back
          </button>
        </div>
      </div>
      <div className="project-image p-6 bg-gradient-to-r from-primary-400/80 to-primary-600/90">
        <Image
          src="/images/projects/WebDevSpark.png"
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
              WebDevSpark is a WordPress Theme project. It is a fully functional
              site encompassing a wide range of features, such as custom post
              types, search functionality, WP REST API, Gutenberg Block Type and
              full mobile responsiveness. This is derived from the Udemy
              WordPress Developer course by Brad Schiff, with a modified layout
              and integration with TailwindCSS.
            </p>
          </div>
          <div className="flex flex-col w-full">
            <div className="project-url mb-4">
              <p className="font-semibold pb-1">URL</p>
              <a
                href="https://www.webdevspark.com/"
                className="hover:text-primary-500"
              >
                https://www.webdevspark.com/
              </a>
            </div>
            <div className="project-technologies space-y-1 mb-4">
              <p className="font-semibold">Technologies</p>
              <p>JavaScript, PHP, React.js, TailwindCSS, WordPress</p>
            </div>
            <div className="project-source-code">
              <p className="font-semibold">Source Code</p>
              <div className="flex flex-row space-x-2">
                <a
                  href="https://github.com/Samuellaudev/webdevspark"
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
              <p className="font-semibold">Custom Post Types and ACF</p>
              <li>
                Define and manage custom post types to extend WordPress beyond
                standard posts and pages, allowing for the creation of various
                content structures such as ‘Project’ and ‘Language’.
              </li>
              <li>
                ACF (Advanced Custom Fields) enable the addition of specific
                data like text, images, and relationships.
              </li>
            </div>
            <div className="feature-one space-y-1 mb-6">
              <p className="font-semibold">
                Search Functionality and WP REST API
              </p>
              <li>
                Enhance the user experience with powerful search functionality
                by integrating the WP REST API using plain JavaScript. This
                approach enables dynamic search queries and responses, offering
                a flexible and scalable search solution.
              </li>
            </div>
            <div className="feature-one space-y-1 mb-6">
              <p className="font-semibold">React and Gutenberg Block Type</p>
              <li>
                Build interactive Gutenberg blocks using React to create custom,
                dynamic content elements. This method leverages React’s
                capabilities for a modern, responsive editing experience within
                WordPress.
              </li>
            </div>
            <div className="feature-one space-y-1 mb-6">
              <p className="font-semibold">
                TailwindCSS and Mobile-First Design
              </p>
              <li>
                Use TailwindCSS, as well as SCSS, to create fully responsive
                designs, ensuring the site performs well on any device with easy
                adjustments for different screen sizes.
              </li>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-between my-10">
          <div className="flex flex-col mb-4">
            <h2 className="font-semibold mb-3">Custom Post Types and ACF</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Image
                src="/images/projects/WebDevSpark/ACF_CustomPostType.png"
                alt="Website image"
                width={650}
                height={650}
                className="rounded-sm mx-auto shadow-md dark:border"
              />
              <Image
                src="/images/projects/WebDevSpark/Projects.png"
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
            <h2 className="font-semibold mb-3">
              Search Functionality and WP REST API
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Image
                src="/images/projects/WebDevSpark/Search_Functionality.png"
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
            <h2 className="font-semibold mb-3">
              React and Gutenberg Block Type
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Image
                src="/images/projects/WebDevSpark/React_GutenbergBlockType.png"
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
            <div className="grid md:grid-cols-2 gap-4">
              <Image
                src="/images/projects/WebDevSpark/Responsive_Design.png"
                alt="Website image"
                width={650}
                height={650}
                className="rounded-sm mx-auto shadow-md dark:border"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevSparkPage;
