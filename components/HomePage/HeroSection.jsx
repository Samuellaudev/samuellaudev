'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import styles from './homePageSection.module.css';

const HeroSection = () => {
  return (
    <section className="hero-section pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-[#ADB7BE] dark:text-white text-3xl sm:text-4xl lg:text-6xl font-medium mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-700">
              Hello, I&apos;m{' '}
            </span>
            <br></br>
            Samuel Lau
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'Fitness Enthusiast',
                1000,
              ]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
              className="text-[28px] lg:text-[44px]"
            />
          </h1>
          <p className="text-[#565b5f] text-base sm:text-lg mb-6 lg:text-xl">
            I am a Web Developer and a fitness enthusiast.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-r from-primary-300 to-secondary-700 hover:-translate-y-1 duration-200">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4  hover:bg-slate-800  mt-3 bg-gradient-to-r from-primary-300 to-secondary-700 hover:-translate-y-1 duration-200">
              <span className="px-5 py-2 block text-[#565b5f] bg-white dark:bg-[#121212] dark:hover:bg-slate-800  dark:text-white rounded-full">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div
          className={`relative mt-5 md:mt-0 place-self-center md:place-self-start rounded-full w-[250px] h-[250px] 
          ${styles.light_theme_circle} dark:bg-[#181818]`}
        >
          <Image
            src="/images/hero-image.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            width={230}
            height={230}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
