'use client';

import ScrollBar from '@/components/Animation/ScrollBar';
import ProjectHeader from '@/components/Projects/ProjectHeader';
import ProjectDescription from '@/components/Projects/ProjectDescription';
import ProjectFeatures from '@/components/Projects/ProjectFeatures';
import ProjectScreens from '@/components/Projects/ProjectScreens';

const MernStackKettlebellGearPage = () => {
  return (
    <>
      <ScrollBar />
      <div className="flex min-h-screen flex-col">
        <ProjectHeader
          breadCrumbPaths={paths}
          heading="MERN Stack & Redux - eCommerce Platform"
          imagePath="/images/projects/Kettlebell_Gear_MERN_Stack.png"
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

export default MernStackKettlebellGearPage;

const paths = [
  { title: 'Projects', link: '/projects' },
  {
    title: 'MERN Stack & Redux - eCommerce Platform',
    link: '/mern-stack-kettlebell-gear',
  },
];

const projectDetails = {
  description:
    'A dynamic eCommerce platform leveraging the MERN Stack & Redux for seamless online retail operations. Built with MongoDB, Express, React, Node.js, TypeScript and Redux, it offers a scalable solution for managing inventory, processing transactions, and enhancing the shopping experience.',
  url: 'https://kettlebell-gear.netlify.app/',
  technologies:
    'React.js, MongoDB, Node.js, Express.js, TypeScript, Redux, Tailwind CSS, Cloudinary, PayPal API, Google API, OAuth',
  sourceCode: 'https://github.com/Samuellaudev/kettlebell-gear',
};

const projectFeatures = [
  {
    title: 'Complete shopping cart features',
    content: [
      'Showcase all products on the homepage and shopping page',
      'Enable administrators to manage products through functions like addition, modification, and removal for efficient content editing',
    ],
    removed: false,
  },
  {
    title: 'Product reviews, ratings and pagination',
    content: [
      'Enables users to provide feedback and ratings for products, while implementing pagination to efficiently manage and navigate through the vast array of products',
    ],
    removed: false,
  },
  {
    title:
      'Products, users and orders management system using JWT authorization with HttpOnly Cookie',
    content: [
      'Employs JWT authorization with HttpOnly Cookie, ensuring secure access and management of products, users, and orders, thereby enhancing data privacy and user authentication mechanisms',
    ],
    removed: false,
  },
  {
    title: 'AWS S3 Image Upload and Presigned URLs',
    content: [
      'Easily upload images via AWS S3 and access them securely using pre-signed URLs for retrieval',
    ],
    removed: true,
  },
  {
    title: 'Cloudinary Image Upload',
    content: [
      'Easily upload images via Cloudinary and access them using secured image URLs for retrieval',
    ],
    removed: false,
  },
  {
    title: 'PayPal Payment Gateway',
    content: [
      'Enables secure payment transactions for checkout process, offering customers flexibility and convenience in completing their purchases while ensuring a smooth and reliable checkout experience',
    ],
    removed: false,
  },
  {
    title: 'Google OAuth Login Authentication',
    content: [
      'Easily access the platform using one’s own Google credentials, streamlining the login process.',
      'Streamlined account management for users and administrators: Users effortlessly manage their accounts, while administrators oversee authentication activities with ease.',
    ],
    removed: false,
  },
];

const projectScreens = [
  {
    title: 'Full shopping cart features',
    images: [
      '/images/projects/Kettlebell_Gear_MERN_Stack/Shopping_Cart_Feature/Page_Shopping.png',
      '/images/projects/Kettlebell_Gear_MERN_Stack/Shopping_Cart_Feature/Page_PlaceOrder.png',
      '/images/projects/Kettlebell_Gear_MERN_Stack/Shopping_Cart_Feature/Page_Product.png',
      '/images/projects/Kettlebell_Gear_MERN_Stack/Shopping_Cart_Feature/Page_Cart.png',
    ],
  },
  {
    title: 'Admin Dashboard',
    images: [
      '/images/projects/Kettlebell_Gear_MERN_Stack/Page_Admin_Dashboard/Page_ProductsList.png',
      '/images/projects/Kettlebell_Gear_MERN_Stack/Page_Admin_Dashboard/Page_OrderList.png',
      '/images/projects/Kettlebell_Gear_MERN_Stack/Page_Admin_Dashboard/Page_EditProduct.png',
    ],
  },
  {
    title: 'PayPal Payment Gateway',
    images: [
      '/images/projects/Kettlebell_Gear_MERN_Stack/PayPal_Payment_Gateway/Page_Order.png',
    ],
  },
  {
    title: 'Google OAuth Login',
    images: [
      '/images/projects/Kettlebell_Gear_MERN_Stack/Google_Oauth_Login/Page_Login.png',
    ],
  },
  {
    title: 'Responsive Design',
    images: [
      '/images/projects/Kettlebell_Gear_MERN_Stack/Responsive_Design/ResponsiveDesign.png',
    ],
  },
];
