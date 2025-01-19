'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './homePageSection.module.css';

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="py-32 text-[#565b5f] dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 md:flex md:flex-col md:items-center">
        <div className="mx-auto max-w-3xl text-center space-y-2">
          <h1
            className="pb-0 md:pb-2 text-5xl font-semibold text-transparent sm:text-5xl bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text"
          >
            Developing code,
          </h1>
          <p className="pb-1 sm:block text-5xl font-semibold sm:text-5xl"> delivering value. </p>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Turn challenges into seamless, production-ready web applications that deliver results.
          </p>
        </div>
        <div className='mt-6 flex justify-center'>
          <button
            onClick={ () => router.push('/contact') }
            className="px-6 py-3 rounded-full bg-white hover:bg-slate-200 text-white bg-gradient-to-r from-primary-300 to-secondary-700 hover:-translate-y-1 duration-200"
          >
            Let&apos;s connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
