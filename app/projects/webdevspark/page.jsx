'use client';

import ScrollBar from '@/components/Animation/ScrollBar';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import ProjectDescription from '@/components/Projects/ProjectDescription';
import ProjectFeatures from '@/components/Projects/ProjectFeatures';
import ProjectScreens from '@/components/Projects/ProjectScreens';

const WebDevSparkPage = () => {
  return (
    <>
      <ScrollBar />
      <div className="flex min-h-screen flex-col">
        <ProjectHeader
          breadCrumbPaths={paths}
          heading="WebDevSpark - WordPress Theme Development"
          imagePath="/images/projects/WebDevSpark.png"
        />

        {/* Project Details*/}
        <div className="project-info container mx-auto px-6 md:px-24 text-[#565b5f] dark:text-white">
          <ProjectDescription
            projectDescription={projectDetails.description}
            url={projectDetails.url}
            technologies={projectDetails.technologies}
            sourceCode={projectDetails.sourceCode}
          />
          <ProjectFeatures projectFeatures={projectFeatures} />
          <ProjectScreens projectScreens={projectScreens} />
        </div>
      </div>
    </>
  );
};

export default WebDevSparkPage;

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
  technologies: 'JavaScript, PHP, React.js, TailwindCSS, WordPress, Motion',
  sourceCode: 'https://github.com/Samuellaudev/webdevspark',
};

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

const projectScreens = [
  {
    title: 'Custom Post Types and ACF',
    images: [
      '/images/projects/WebDevSpark/ACF_CustomPostType.png',
      '/images/projects/WebDevSpark/Projects.png',
    ],
  },
  {
    title: 'Search Functionality and WP REST API',
    images: ['/images/projects/WebDevSpark/Search_Functionality.png'],
  },
  {
    title: 'React and Gutenberg Block Type',
    images: ['/images/projects/WebDevSpark/React_GutenbergBlockType.png'],
  },
  {
    title: 'Responsive Design',
    images: ['/images/projects/WebDevSpark/Responsive_Design.png'],
  },
];
