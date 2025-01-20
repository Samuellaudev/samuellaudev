'use client';

import ScrollBar from '@/components/Animation/ScrollBar';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import Image from 'next/image';

const RentEasePage = () => {
  const paths = [
    { title: 'Projects', link: '/projects' },
    {
      title: 'RentEase - Property Rental Platform',
      link: '/rentease',
    },
  ];

  return (
    <>
      <ScrollBar />
      <div className="flex min-h-screen flex-col">
        <ProjectHeader
          breadCrumbPaths={paths}
          heading="RentEase - Property Rental Platform"
          imagePath="/images/projects/RentEase.png"
        />

        {/* Project Description*/}
        <div className="project-info container mx-auto px-6 md:px-24 text-[#565b5f] dark:text-white">
          <section className="flex flex-col md:flex-row justify-between my-16">
            <div className="flex flex-col space-y-1 mb-4 md:mr-24">
              <h2 className="font-semibold">Project Description</h2>
              <p>
                A versatile property rental platform created with Next.js,
                TailwindCSS, TypeScript, and Shadcn/UI, designed to highlight
                modern web development techniques. This project showcases
                responsive design, type-safe coding, and reusable UI components,
                offering an insightful example of advanced web application
                development.
              </p>
            </div>
            <div className="flex flex-col w-full">
              <div className="project-url mb-4">
                <p className="font-semibold pb-1">URL</p>
                <a
                  href="https://rentease-dev.netlify.app/"
                  className="hover:text-primary-500"
                >
                  https://rentease-dev.netlify.app/
                </a>
              </div>
              <div className="project-technologies space-y-1 mb-4">
                <p className="font-semibold">Technologies</p>
                <p>
                  Next.js, MongoDB, TypeScript, Shadcn/UI, TailwindCSS,
                  Cloudinary, Next-Auth
                </p>
              </div>
              <div className="project-source-code">
                <p className="font-semibold">Source Code</p>
                <div className="flex flex-row space-x-2">
                  <a
                    href="https://github.com/Samuellaudev/rentease"
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
                <p className="font-semibold">
                  Property search, listing CRUD operations
                </p>
                <li>
                  Set up property search and listing CRUD operations to manage
                  real estate content effectively
                </li>
                <li>
                  Create, read, update, and delete property listings for
                  streamlined data management, and integrate search
                  functionality to help users find properties based on various
                  criteria, ensuring a user-friendly experience for both
                  administrators and visitors
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">
                  User authentication with Google and Next Auth
                </p>
                <li>
                  Implement user authentication using Google and Next Auth to
                  ensure secure and efficient login processes
                </li>
                <li>
                  Enable users to sign in with their Google accounts,
                  streamlining the authentication process and enhancing security
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">
                  Photoswipe image gallery and Cloudinary for image storage
                </p>
                <li>
                  Create interactive and responsive image galleries using
                  Photoswipe, integrated with Cloudinary for effortless image
                  storage and management
                </li>
                <li>
                  Cloudinary handles hosting and delivery, ensuring
                  high-performance image loading
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">
                  TypeScript support for type-safe development and improved code
                  quality
                </p>
                <li>
                  Incorporate TypeScript to achieve type-safe development and
                  improved code quality
                </li>
                <li>
                  Utilizing TypeScript provides stronger type checking and error
                  prevention, resulting in more reliable and maintainable code
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">
                  Responsive design: TailwindCSS and Shadcn/UI
                </p>
                <li>
                  Utilize TailwindCSS and Shadcn/UI for responsive design and
                  consistent, reusable UI components
                </li>
                <li>
                  TailwindCSS ensures flexible, responsive layouts, while
                  Shadcn/UI provides a library of cohesive, reusable components
                </li>
              </div>
            </div>
          </section>
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
