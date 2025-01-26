'use client';

import { navLinks, logo } from '@/utils/constants';
import { useContext } from 'react';
import { ThemeContext } from '@/context/theme-provider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import MarqueeButton from '@/components/Animation/MarqueeButton';
import MenuOverlay from '@/components/Navbar/MenuOverlay';
import { FiBatteryCharging, FiWifi } from 'react-icons/fi';

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: 'preserve-3d',
        transform: 'rotateY(-30deg) rotateX(15deg)',
      }}
      className="rounded-3xl bg-primary-300 dark:bg-primary-400"
    >
      <motion.div
        initial={{ transform: 'translateZ(8px) translateY(-2px)' }}
        animate={{ transform: 'translateZ(32px) translateY(-8px)' }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'easeInOut',
        }}
        className="relative h-96 w-56 p-1 pl-[3px] pt-[3px] rounded-3xl border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  const { navbarOpen, setNavbarOpen, isMobile } = useContext(ThemeContext);

  return (
    <>
      <div className="absolute z-10 left-[50%] top-2.5 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute z-10 right-3 top-2 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
      {/* Navbar */}
      <div className="fixed z-10 mx-auto border border-slate-800 top-8 left-3 right-3 bg-white dark:bg-[#121212]/80 bg-opacity-80 backdrop-blur-md backdrop-opacity-80 rounded-3xl">
        <div className="mx-auto px-2 py-0 flex container flex-wrap items-center justify-between">
          <Link
            href="/"
            onClick={() => (navbarOpen ? setNavbarOpen((pv) => !pv) : null)}
            className="text-2xl text-white font-semibold"
          >
            <Image
              src={logo}
              alt="website logo"
              width={25}
              height={25}
              className="mx-auto rounded-full dark:border dark:border-slate-800"
            />
          </Link>
          {/* Mobile Menu */}
          <div className="mobile-menu flex items-center scale-75">
            <MenuOverlay links={navLinks} hidden={isMobile ? true : false} />
          </div>
        </div>
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 pt-48 pb-32 text-[#565b5f] dark:text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="pb-0 text-2xl font-semibold text-transparent bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text">
            Developing code,
          </h1>
          <p className="text-2xl font-semibold">delivering value.</p>
          <p className="mx-auto max-w-xl text-[0.55rem]/relaxed">
            Turn challenges into seamless, production-ready web applications
            that deliver results.
          </p>
        </div>
        <div className="mt-0 flex justify-center scale-50">
          <MarqueeButton />
        </div>
      </div>
    </div>
  );
};

export default FloatingPhone;
