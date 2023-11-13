'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
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
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am Web Developer and a fitness enthusiast.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-r from-primary-300 to-secondary-700 hover:-translate-y-1 duration-200">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-r from-primary-300 to-secondary-700 hover:-translate-y-1 duration-200">
              <span className="px-5 py-2 block bg-[#121212] hover:bg-slate-800 rounded-full">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center pt-4 mt-4 lg:mt-0"
        >
          <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[280px] lg:h-[280px]">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
