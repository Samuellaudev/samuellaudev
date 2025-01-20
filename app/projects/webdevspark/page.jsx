'use client';

import ScrollBar from '@/components/Animation/ScrollBar';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import ProjectDescription from '@/components/Projects/ProjectDescription';
import ProjectFeatures from '@/components/Projects/ProjectFeatures';
import Image from 'next/image';

const WebDevSparkPage = () => {
  const paths = [
    { title: 'Projects', link: '/projects' },
    {
      title: 'WebDevSpark - WordPress Theme Development',
      link: '/webdevspark',
    },
  ];

  const projectDetails = {
    description:
      'WebDevSpark is a WordPress Theme project. It is a fully functional site encompassing a wide range of features, such as custom post types, search functionality, WP REST API, Gutenberg Block Type and full mobile responsiveness. This is derived from the Udemy WordPress Developer course by Brad Schiff, with a modified layout and integration with TailwindCSS.',
    url: 'https://www.webdevspark.com/',
    technologies: 'JavaScript, PHP, React.js, TailwindCSS, WordPress',
    sourceCode: 'https://github.com/Samuellaudev/webdevspark',
  };

  return (
    <>
      <ScrollBar />
      <div className="flex min-h-screen flex-col">
        <ProjectHeader
          breadCrumbPaths={paths}
          heading="WebDevSpark - WordPress Theme Development"
          imagePath="/images/projects/WebDevSpark.png"
        />

        {/* Project Description*/}
        <div className="project-info container mx-auto px-6 md:px-24 text-[#565b5f] dark:text-white">
          <ProjectDescription
            projectDescription={projectDetails.description}
            url={projectDetails.url}
            technologies={projectDetails.technologies}
            sourceCode={projectDetails.sourceCode}
          />

          <ProjectFeatures projectFeatures={projectFeatures} />

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
    </>
  );
};

export default WebDevSparkPage;

const projectFeatures = [
  {
    title: 'Custom Post Types and ACF',
    content: [
      'Define and manage custom post types to extend WordPress beyond standard posts and pages, allowing for the creation of various content structures such as ‘Project’ and ‘Language’.',
      'ACF (Advanced Custom Fields) enable the addition of specific data like text, images, and relationships.',
    ],
    removed: false,
  },
  {
    title: 'Search Functionality and WP REST API',
    content: [
      'Enhance the user experience with powerful search functionality by integrating the WP REST API using plain JavaScript. This approach enables dynamic search queries and responses, offering a flexible and scalable search solution.',
    ],
    removed: false,
  },
  {
    title: 'React and Gutenberg Block Type',
    content: [
      'Build interactive Gutenberg blocks using React to create custom, dynamic content elements. This method leverages React’s capabilities for a modern, responsive editing experience within WordPress.',
    ],
    removed: false,
  },
  {
    title: 'TailwindCSS and Mobile-First Design',
    content: [
      'Use TailwindCSS, as well as SCSS, to create fully responsive designs, ensuring the site performs well on any device with easy adjustments for different screen sizes.',
    ],
    removed: false,
  },
];
