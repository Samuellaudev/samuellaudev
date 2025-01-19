'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const MarqueeButton = () => {
  const router = useRouter();

  const MarqueeText = () => (
    <>
      <span className="text-md md:text-lg font-medium px-4">
        Let&apos;s connect 💻
      </span>
      <span className="text-md md:text-lg font-medium px-4">
        Let&apos;s connect 💻
      </span>
      <span className="text-md md:text-lg font-medium px-4">
        Let&apos;s connect 💻
      </span>
    </>
  );

  return (
    <motion.div
      onClick={() => router.push('/contact')}
      className="relative overflow-hidden flex items-center w-36 md:w-44 h-12 px-3 py-3 rounded-3xl border-2 border-white bg-white hover:bg-slate-200 dark:text-white bg-gradient-to-r from-primary-300 to-secondary-700 hover:-translate-y-1 duration-200 cursor-pointer"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'linear',
        }}
      >
        <MarqueeText />
      </motion.div>
      <motion.div
        className="flex whitespace-nowrap absolute"
        animate={{ x: ['100%', '0%'] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'linear',
        }}
      >
        <MarqueeText />
      </motion.div>
    </motion.div>
  );
};

export default MarqueeButton;
