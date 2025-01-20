'use client';

import ScrollBar from '@/components/Animation/ScrollBar';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import Image from 'next/image';

const MernStackKettlebellGearPage = () => {
  const paths = [
    { title: 'Projects', link: '/projects' },
    {
      title: 'MERN Stack & Redux - eCommerce Platform',
      link: '/mern-stack-kettlebell-gear',
    },
  ];

  return (
    <>
      <ScrollBar />
      <div className="flex min-h-screen flex-col">
        <ProjectHeader
          breadCrumbPaths={paths}
          heading="MERN Stack & Redux - eCommerce Platform"
          imagePath="/images/projects/Kettlebell_Gear_MERN_Stack.png"
        />

        {/* Project Description*/}
        <div className="project-info container mx-auto px-6 md:px-24 text-[#565b5f] dark:text-white">
          <section className="flex flex-col md:flex-row justify-between my-16">
            <div className="flex flex-col space-y-1 mb-4 md:mr-24">
              <h2 className="font-semibold">Project Description</h2>
              <p>
                A dynamic eCommerce platform leveraging the MERN Stack & Redux
                for seamless online retail operations. Built with MongoDB,
                Express, React, Node.js, TypeScript and Redux, it offers a
                scalable solution for managing inventory, processing
                transactions, and enhancing the shopping experience.
              </p>
            </div>
            <div className="flex flex-col w-full">
              <div className="project-url mb-4">
                <p className="font-semibold pb-1">URL</p>
                <a
                  href="https://www.kettlebell-gear.com/"
                  className="hover:text-primary-500"
                >
                  https://www.kettlebell-gear.com/
                </a>
              </div>
              <div className="project-technologies space-y-1 mb-4">
                <p className="font-semibold">Technologies</p>
                <p>
                  React.js, MongoDB, Node.js, Express.js, TypeScript, Redux,
                  Tailwind CSS, Cloudinary, PayPal API, Google API, OAuth
                </p>
              </div>
              <div className="project-source-code">
                <p className="font-semibold">Source Code</p>
                <div className="flex flex-row space-x-2">
                  <a href="https://github.com/Samuellaudev/kettlebell-gear">
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
                <p className="font-semibold">Complete shopping cart features</p>
                <li>Showcase all products on the homepage and shopping page</li>
                <li>
                  Enable administrators to manage products through functions
                  like addition, modification, and removal for efficient content
                  editing
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">
                  Product reviews, ratings and pagination
                </p>
                <li>
                  Enables users to provide feedback and ratings for products,
                  while implementing pagination to efficiently manage and
                  navigate through the vast array of products
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">
                  Products, users and orders management system using JWT
                  authorization with HttpOnly Cookie
                </p>
                <li>
                  Employs JWT authorization with HttpOnly Cookie, ensuring
                  secure access and management of products, users, and orders,
                  thereby enhancing data privacy and user authentication
                  mechanisms
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
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">Cloudinary Image Upload</p>
                <li>
                  Easily upload images via Cloudinary and access them using
                  secured image URLs for retrieval
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold"> PayPal Payment Gateway</p>
                <li>
                  Enables secure payment transactions for checkout process,
                  offering customers flexibility and convenience in completing
                  their purchases while ensuring a smooth and reliable checkout
                  experience
                </li>
              </div>
              <div className="feature-one space-y-1 mb-6">
                <p className="font-semibold">
                  Google OAuth Login Authentication
                </p>
                <li>
                  Easily access the platform using one&apos;s own Google
                  credentials, streamlining the login process.
                </li>
                <li>
                  Streamlined account management for users and administrators:
                  Users effortlessly manage their accounts, while administrators
                  oversee authentication activities with ease.
                </li>
              </div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row justify-between my-10">
            <div className="flex flex-col mb-4">
              <h2 className="font-semibold mb-3">
                Full shopping cart features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Shopping_Cart_Feature/Page_Shopping.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Shopping_Cart_Feature/Page_PlaceOrder.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Shopping_Cart_Feature/Page_Product.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Shopping_Cart_Feature/Page_Cart.png"
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
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Responsive_Design/Page_Home.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Responsive_Design/Page_Shopping.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Responsive_Design/Page_PlaceOrder.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Responsive_Design/Page_UserProfile.png"
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
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Page_Admin_Dashboard/Page_ProductsList.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Page_Admin_Dashboard/Page_OrderList.png"
                  alt="Website image"
                  width={650}
                  height={650}
                  className="rounded-sm mx-auto shadow-md dark:border"
                />
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Page_Admin_Dashboard/Page_EditProduct.png"
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
              <h2 className="font-semibold mb-3">PayPal Payment Gateway</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/PayPal_Payment_Gateway/Page_Order.png"
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
              <h2 className="font-semibold mb-3">Google OAuth Login</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Image
                  src="/images/projects/Kettlebell_Gear_MERN_Stack/Google_Oauth_Login/Page_Login.png"
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

export default MernStackKettlebellGearPage;
