// Portfolio Section
export const projectsData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect – Associate',
    description: 'AWS Certified Solutions Architect – Associate',
    image: '/images/badges/aws-certified-solutions-architect-associate.png',
    tag: ['All', 'Badges'],
    gitUrl: '/',
    previewUrl:
      'https://www.credly.com/badges/fddfd640-2746-4ccd-bd16-248db52c762d/public_url',
    categories: 'Badge',
    isPublicLink: true,
  },
  {
    id: 2,
    title: 'AWS Certified Solutions Architect – Associate',
    description: 'Verification - AWS Certified Solutions Architect – Associate',
    image:
      '/images/certifications/aws-Verification_AWS_Certified_Solutions_Architect_Associate_certificate.png',
    tag: ['All', 'Certifications'],
    gitUrl: '/',
    previewUrl:
      'https://www.dropbox.com/scl/fi/gfs0ivbsv31ahh43k8g0k/AWS-Certified-Solutions-Architect-Associate-certificate.pdf?rlkey=jvgrwzpep24lrj4bg5j9uobks&dl=0',
    categories: 'Certification',
    isPublicLink: true,
  },
  {
    id: 3,
    title: 'React-Tutorial.app',
    description:
      'Cover fundamental and advanced concepts such as component-based architecture, state management, JSX syntax, and routing.',
    image: '/images/certifications/react-tutorial-app.png',
    tag: ['All', 'Certifications'],
    gitUrl: '/',
    previewUrl:
      'https://res.cloudinary.com/dbfn5lnvx/image/authenticated/s--CjBtt72o--/v1679453594/certificates/react/lauchunfong-8941.pdf',
    categories: 'Certification',
    isPublicLink: true,
  },
  {
    id: 4,
    title:
      'Educative.io: Testing React Apps with Jest and React Testing Library',
    description:
      'Cover how to create reliable, resilient automated tests in React using Jest and React Testing Library,',
    image:
      '/images/certifications/Testing_React_Apps_with_Jest_and_React_Testing_Library.png',
    tag: ['All', 'Certifications'],
    gitUrl: '/',
    previewUrl:
      'https://www.educative.io/verify-certificate/69v3YV7820EuMxRpLROgxNFBNlRyNMV7WF7',
    categories: 'Certification',
    isPublicLink: true,
  },
  {
    id: 5,
    title: 'Educative.io: Become a VueJS Developer',
    description:
      'Hands-on experience to create responsive VueJS single-page applications',
    image: '/images/certifications/Become_a_VueJS_Developer.png',
    tag: ['All', 'Certifications'],
    gitUrl: '/',
    previewUrl:
      'https://www.educative.io/verify-certificate/RgxzXQFQwWo1BnJn7FQ4vZn4765zU6',
    categories: 'Certification',
    isPublicLink: true,
  },
  {
    id: 6,
    title: 'NextJs - Blogging CMS with MongoDB in Serverless Architecture',
    description:
      'Next.js + MongoDB: Effortlessly manage and publish blog content with Markdown for a flexible and dynamic web experience.',
    image: '/images/projects/NextJs_v14_Blog_CMS_with_MongoDB.png',
    tag: ['All', 'Projects'],
    gitUrl: 'https://github.com/Samuellaudev/nextjs-blog',
    previewUrl: 'https://www.samuellau.dev/projects/nextjs-blog-with-mongodb',
    categories: 'Projects',
    isPublicLink: true,
  },
  {
    id: 7,
    title: 'MERN Stack & Redux - eCommerce Platform',
    description:
      'MERN Stack & Redux: A kettlebell eCommerce platform. Integrate MongoDB, Express, React, Node.js, TypeScript and Redux for enhanced functionality and scalable performance.',
    image: '/images/projects/Kettlebell_Gear_MERN_Stack.png',
    tag: ['All', 'Projects'],
    gitUrl: 'https://github.com/Samuellaudev/kettlebell-gear',
    previewUrl: 'https://www.samuellau.dev/projects/mern-stack-kettlebell-gear',
    categories: 'Projects',
    isPublicLink: true,
  },
  {
    id: 8,
    title: 'Portfolio website V1',
    description:
      'My first portfolio website that built using Hugo and hosted on GitHub Pages',
    image: '/images/projects/Portfolio_website_v1_Hugo.png',
    tag: ['All', 'Projects'],
    gitUrl: 'https://github.com/Samuellaudev/samuellaudev.github.io',
    previewUrl: 'https://samuellaudev.github.io/',
    categories: 'Projects',
    isPublicLink: true,
  },
  {
    id: 9,
    title: 'Portfolio website V2',
    description:
      'My second portfolio website that built using Nuxt2 and hosted on Netlify',
    image: '/images/projects/Portfolio_website_v2_Nuxt2.png',
    tag: ['All', 'Projects'],
    gitUrl: 'https://github.com/Samuellaudev/nuxt-blog',
    previewUrl: 'https://samuellaudev-v2.netlify.app/',
    categories: 'Projects',
    isPublicLink: true,
  },
  {
    id: 10,
    title: 'Feedback UI',
    description:
      'A React app (in TypeScript) for leaving feedback on a product or service using the Context API.',
    image: '/images/projects/OtherProjects/Project_Feedback_UI.png',
    tag: ['All', 'Projects'],
    gitUrl: 'https://github.com/Samuellaudev/feedback-app',
    previewUrl: 'https://feedback-app-usecontext.vercel.app/',
    categories: 'Projects',
    isPublicLink: true,
  },
];

// Contact Section
export const socialLinks = [
  {
    href: 'https://github.com/samuellaudev',
    src: '/svg/socialMedia/icon-github.svg',
    alt: 'Github Icon',
  },
  {
    href: 'https://www.linkedin.com/in/samuel-cf-lau/',
    src: '/svg/socialMedia/icon-linkedin.svg',
    alt: 'Linkedin Icon',
  },
  {
    href: 'https://www.instagram.com/samuel_cf_lau/',
    src: '/svg/socialMedia/icon-instagram.svg',
    alt: 'Instagram',
  },
];

// Navbar
export const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Blog', path: '/blog?search=&pageNumber=1' },
  { title: 'Projects', path: '/projects' },
  { title: 'Contact', path: '/contact' },
];

// API path
export const BACKEND_URL = process.env.BACKEND_URL;
export const USERS_URL = '/api/users';
export const POSTS_URL = '/api/posts';
export const EMAILS_URL = '/api/emails';
export const AWS_S3_GET_URL = '/api/aws-s3';
export const AWS_S3_UPLOAD_URL = '/api/aws-s3/upload';

// EditOrAddNewPost
export const fieldMap = {
  'new-post': {
    title: 'Add New Post',
    submitButton: 'Add',
    successMessage: 'Post created successfully',
    errorMessage: 'Unable to create post',
  },
  'edit-post': {
    title: 'Edit Post',
    submitButton: 'Edit',
    successMessage: 'Post edited successfully',
    errorMessage: 'Unable to edit post',
  },
};

// Projects Information
export const featuredProjects = [
  {
    id: 1,
    image: {
      path: '/images/projects/NextJs_v14_Blog_CMS_with_MongoDB.png',
      alt: 'Featured Project: Next.js Blog with MongoDB',
    },
    title: 'Next.js CMS Blog with MongoDB',
    description:
      'A serverless web application that utilizes Next.js and MongoDB to create a custom-built content management system for managing and publishing blog content.',
    gitUrl: 'https://github.com/Samuellaudev/nextjs-blog',
    projectUrl: 'https://nextjs-mongodb-cms.vercel.app/',
    projectDetails: '/projects/nextjs-blog-with-mongodb',
    techStack: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Stripe API', 'AWS-S3'],
  },
  {
    id: 2,
    image: {
      path: '/images/projects/Kettlebell_Gear_MERN_Stack.png',
      alt: 'Featured Project: MERN Stack & Redux - eCommerce Platform',
    },
    title: 'MERN Stack & Redux - eCommerce Platform',
    description:
      'An dynamic eCommerce platform powered by the MERN Stack, streamlining online retail with MongoDB, Express, React, Node.js, TypeScript and Redux. Efficiently manages inventory, transactions, and improves the shopping journey.',
    gitUrl: 'https://github.com/Samuellaudev/kettlebell-gear',
    projectUrl: 'https://www.kettlebell-gear.com/',
    projectDetails: '/projects/mern-stack-kettlebell-gear',
    techStack: [
      'React.js',
      'MongoDB',
      'Node.js',
      'Express.js',
      'TypeScript',
      'Redux',
      'PayPal',
      'AWS-S3',
      'Tailwind-CSS',
      'Google API',
      'OAuth',
    ],
  },
];
export const otherProjects = [
  {
    id: 1,
    title: 'Portfolio Project V2',
    description:
      'My second portfolio website that built using Nuxt2 and hosted on Netlify.',
    gitUrl: 'https://github.com/Samuellaudev/nuxt-blog',
    projectUrl: 'https://samuellaudev-v2.netlify.app/',
    techStack: ['Nuxt.js', 'SCSS', 'Element UI'],
  },
  {
    id: 2,
    title: 'Portfolio Project V1',
    description:
      'First version of my personal website built with Hugo and hosted on GitHub Pages.',
    gitUrl: 'https://github.com/Samuellaudev/samuellaudev.github.io',
    projectUrl: 'https://samuellaudev.github.io/',
    techStack: ['Hugo', 'Markdown'],
  },
  {
    id: 3,
    title: 'Feedback UI',
    description:
      'A React app (in TypeScript) for leaving feedback on a product or service using the Context API.',
    gitUrl: 'https://github.com/Samuellaudev/feedback-app',
    projectUrl: 'https://feedback-app-usecontext.vercel.app/',
    techStack: ['React', 'TypeScript', 'Context-API'],
  },
];
