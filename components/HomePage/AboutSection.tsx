'use client';

import Image from 'next/image';
import SharedTabsLayout from '@/components/Animation/SharedTabsLayout';

const AboutSection = () => {
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

  return (
    <section id="about" className="text-[#565b5f] dark:text-white pt-20">
      <div className="px-4  xl:px-16 md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
        <div className="notebook-image">
          <Image
            src="/images/about-image.png"
            width={ 500 }
            height={ 500 }
            alt="about-image"
            className="rounded-xl hidden md:block md:border-2 md:border-[#ADB7BE] dark:border-0"
          />
        </div>
        <div className="flex flex-col mt-4 md:mt-0 text-left h-full">
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-[#ADB7BE] dark:text-white">
            About Me
          </h2>
          <p className="text-base md:text-lg">
            I&apos;m a passionate Front-end Web Developer skilled in JavaScript,
            TypeScript, React, Vue, Next.js, Nuxt.js, HTML, CSS, and Git. Eager
            to learn and expand my skill set, I thrive on creating interactive
            and responsive web applications. With a collaborative mindset, I
            enjoy working with others to deliver amazing digital experiences.
            Let&apos;s build something amazing together!
          </p>
          <SharedTabsLayout tabs={ TAB_DATA } />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
