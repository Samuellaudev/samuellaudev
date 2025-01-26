'use client';

import SharedTabsLayout from '@/components/Animation/SharedTabsLayout';
import FloatingPhone from '@/components/Animation/FloatingPhone';

const AboutSection = () => {
  return (
    <section id="about" className="text-white dark:text-white pt-20">
      <div className="relative px-4 xl:px-16 md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
        <div className="absolute md:static z-0 grid place-content-center md:bg-neutral-100/80 dark:bg-neutral-900/50 p-12 rounded-xl">
          <FloatingPhone />
        </div>
        <div className='flex flex-col'>
          <div className="relative z-10 flex flex-col py-6 text-left h-full md:text-slate-600 md:dark:text-white bg-neutral-900/60 md:bg-transparent dark:bg-bg-neutral-800/90 dark:md:bg-transparent rounded-xl">
            <h2 className="text-3xl md:text-4xl text-center mb-4">
              About Me
            </h2>
            <p className="text-base px-6 md:px-9 mb-14 md:mb-0 md:text-lg">
              I&apos;m a passionate Front-end Web Developer skilled in JavaScript,
              TypeScript, React, Vue, Next.js, Nuxt.js, HTML, CSS, and Git. Eager
              to learn and expand my skill set, I thrive on creating interactive
              and responsive web applications. With a collaborative mindset, I
              enjoy working with others to deliver amazing digital experiences.
              Let&apos;s build something amazing together!
            </p>
          </div>
          <SharedTabsLayout tabs={ TAB_DATA } />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const TAB_DATA = [
  {
    label: 'Skills',
    content: (
      <ul className="list-disc space-y-1">
        <li>AWS Cloud Services</li>
        <li>HTML5 + CSS3</li>
        <li>Jest</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>PHP</li>
        <li>ReactJs & NextJs</li>
        <li>TypeScript</li>
        <li>VueJs & NuxtJs</li>
        <li>WordPress</li>
      </ul>
    ),
  },
  {
    label: 'Experience',
    content: (
      <ul className="list-disc space-y-1">
        <li>Automated Systems (H.K.) Limited - Programmer</li>
        <li>PressLogic - Web Developer</li>
        <li>LANE EIGHT - Junior Web Developer</li>
      </ul>
    ),
  },
  {
    label: 'Certifications',
    content: (
      <ul className="list-disc space-y-1">
        <li>AWS Certified Solution Architect </li>
        <li>
          Educative.io - Testing React Apps with Jest and React Testing Library
        </li>
        <li>Educative.io - Become a VueJS Developer</li>
      </ul>
    ),
  },
];