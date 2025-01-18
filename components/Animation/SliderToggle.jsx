'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const TOGGLE_CLASSES =
  'relative z-10 text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-1.5 transition-colors';

const SliderToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  // resolvedTheme is undefined during the SSR phase and only gets resolved after the client-side JavaScript takes over.
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return <Image src="/svg/tube-spinner.svg" alt="" width={50} height={50} />;
  }

  const themes = [
    { name: 'light', icon: <FiMoon />, textClass: 'text-slate-300' },
    { name: 'dark', icon: <FiSun />, textClass: 'text-slate-400' },
  ];

  return (
    <div className="relative flex w-fit items-center rounded-full">
      {/* Foreground Text */}
      {themes.map(({ name, icon, textClass }) => (
        <button
          key={name}
          className={clsx(
            TOGGLE_CLASSES,
            resolvedTheme === name ? 'text-white' : textClass,
          )}
          onClick={() => setTheme(name)}
        >
          {icon}
          <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
        </button>
      ))}
      {/* Background Layout */}
      <div
        className={clsx(
          'absolute inset-0 z-0 flex',
          resolvedTheme === 'dark' ? 'justify-end' : 'justify-start',
        )}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className={clsx(
            'h-full w-1/2 rounded-full bg-gradient-to-r',
            resolvedTheme === 'light'
              ? 'from-secondary-800 to-secondary-300'
              : 'from-primary-600 to-primary-400',
          )}
        />
      </div>
    </div>
  );
};

export default SliderToggle;
