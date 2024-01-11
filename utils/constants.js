// Portfolio Section
export const projectsData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect – Associate',
    description: 'AWS Certified Solutions Architect – Associate',
    image: '/images/projects/aws-certified-solutions-architect-associate.png',
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
      '/images/projects/aws-Verification_AWS_Certified_Solutions_Architect_Associate_certificate.png',
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
    image: '/images/projects/react-tutorial-app.png',
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
      '/images/projects/Testing_React_Apps_with_Jest_and_React_Testing_Library.png',
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
    image: '/images/projects/Become_a_VueJS_Developer.png',
    tag: ['All', 'Certifications'],
    gitUrl: '/',
    previewUrl:
      'https://www.educative.io/verify-certificate/RgxzXQFQwWo1BnJn7FQ4vZn4765zU6',
    categories: 'Certification',
    isPublicLink: true,
  },
];

// Contact Section
export const socialLinks = [
  {
    href: 'https://github.com/samuellaudev',
    src: '/images/icon-github.svg',
    alt: 'Github Icon',
  },
  {
    href: 'https://www.linkedin.com/in/samuel-cf-lau/',
    src: '/images/icon-linkedin.svg',
    alt: 'Linkedin Icon',
  },
  {
    href: 'https://www.instagram.com/samuel_cf_lau/',
    src: '/images/icon-instagram.svg',
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
export const USERS_URL = '/api/users';
export const POSTS_URL = '/api/posts';
export const EMAILS_URL = '/api/emails';
export const UPLOAD_URL = '/api/upload';
