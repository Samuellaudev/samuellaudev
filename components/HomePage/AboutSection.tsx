'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from '../TabButton';
import { TabDataType } from '@/types/share.type';

const TAB_DATA = [
  {
    id: 'skills',
    title: 'Skills',
    content: (
      <ul className="list-disc pl-2 h-[168px]">
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
    id: 'experience',
    title: 'Experience',
    content: (
      <ul className="list-disc pl-2 h-[168px]">
        <li>Automated Systems (H.K.) Limited - Programmer</li>
        <li>PressLogic - Web Developer</li>
        <li>LANE EIGHT - Junior Web Developer</li>
      </ul>
    ),
  },
  {
    id: 'certifications',
    title: 'Certifications',
    content: (
      <ul className="list-disc pl-2 h-[168px]">
        <li>AWS Certified Solution Architect </li>
        <li>
          Educative.io - Testing React Apps with Jest and React Testing Library
        </li>
        <li>Educative.io - Become a VueJS Developer</li>
      </ul>
    ),
  },
] as TabDataType[];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => setTab(tab));
  };

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
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={ () => handleTabChange('skills') }
              active={ tab === 'skills' }
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={ () => handleTabChange('experience') }
              active={ tab === 'experience' }
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={ () => handleTabChange('certifications') }
              active={ tab === 'certifications' }
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            { TAB_DATA.find((item) => item.id === tab)?.content }
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
