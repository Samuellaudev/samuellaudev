'use client';

import ScrollBar from '@/components/Animation/ScrollBar';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import ProjectDescription from '@/components/Projects/ProjectDescription';
import ProjectFeatures from '@/components/Projects/ProjectFeatures';
import Image from 'next/image';

const RentEasePage = () => {
  const paths = [
    { title: 'Projects', link: '/projects' },
    {
      title: 'RentEase - Property Rental Platform',
      link: '/rentease',
    },
  ];

  const projectDetails = {
    description:
      'A versatile property rental platform created with Next.js, TailwindCSS, TypeScript, and Shadcn/UI, designed to highlight modern web development techniques. This project showcases responsive design, type-safe coding, and reusable UI components, offering an insightful example of advanced web application development.',
    url: 'https://rentease-dev.netlify.app/',
    technologies:
      'Next.js, MongoDB, TypeScript, Shadcn/UI, TailwindCSS, Cloudinary, Next-Auth',
    sourceCode: 'https://github.com/Samuellaudev/rentease',
  };

  return (
    <>
      <ScrollBar />
      <div className="flex min-h-screen flex-col">
        <ProjectHeader
          breadCrumbPaths={paths}
          heading="RentEase - Property Rental Platform"
          imagePath="/images/projects/RentEase.png"
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

          <section className="flex flex-col md:flex-row justify-between my-10">
            <div className="flex flex-col mb-4">
              <h2 className="font-semibold mb-3">Property search</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Image
                  src="/images/projects/RentEase/RentEase_HomgPage.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/RentEase/RentEase_PropertiesPage.png"
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
              <h2 className="font-semibold mb-3">Listing CRUD operations</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Image
                  src="/images/projects/RentEase/RentEase_AddPropertyPage_TopPart.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/RentEase/RentEase_AddPropertyPage_BottomPart.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/RentEase/RentEase_EditPropertyPage.png"
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
                User authentication with Google and Next Auth
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Image
                  src="/images/projects/RentEase/RentEase_NextAuth_GoogleSignIn.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/RentEase/RentEase_UserProfilePage.png"
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
                  src="/images/projects/RentEase/RentEase_ResponsiveDesign.png"
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

export default RentEasePage;

const projectFeatures = [
  {
    title: 'Property search, listing CRUD operations',
    content: [
      'Set up property search and listing CRUD operations to manage real estate content effectively',
      'Create, read, update, and delete property listings for streamlined data management, and integrate search functionality to help users find properties based on various criteria, ensuring a user-friendly experience for both administrators and visitors',
    ],
    removed: false,
  },
  {
    title: 'User authentication with Google and Next Auth',
    content: [
      'Implement user authentication using Google and Next Auth to ensure secure and efficient login processes',
      'Enable users to sign in with their Google accounts, streamlining the authentication process and enhancing security',
    ],
    removed: false,
  },
  {
    title: 'Photoswipe image gallery and Cloudinary for image storage',
    content: [
      'Create interactive and responsive image galleries using Photoswipe, integrated with Cloudinary for effortless image storage and management',
      'Cloudinary handles hosting and delivery, ensuring high-performance image loading',
    ],
    removed: false,
  },
  {
    title:
      'TypeScript support for type-safe development and improved code quality',
    content: [
      'Incorporate TypeScript to achieve type-safe development and improved code quality',
      'Utilizing TypeScript provides stronger type checking and error prevention, resulting in more reliable and maintainable code',
    ],
    removed: false,
  },
  {
    title: 'Responsive design: TailwindCSS and Shadcn/UI',
    content: [
      'Utilize TailwindCSS and Shadcn/UI for responsive design and consistent, reusable UI components',
      'TailwindCSS ensures flexible, responsive layouts, while Shadcn/UI provides a library of cohesive, reusable components',
    ],
    removed: false,
  },
];
