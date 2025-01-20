import { MotionConfig, motion } from 'framer-motion';

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '54%', '54%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%'],
    },
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['35%', '50%', '50%'],
      left: '50%',
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '50%', '35%'],
    },
  },
};

const HamburgerButton = ({ navbarOpen, toggleNavbar }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        initial={false}
        animate={navbarOpen ? 'open' : 'closed'}
        onClick={toggleNavbar}
        className="group relative h-8 w-8 rounded-full border border-slate-600 hover:border-gray-400 transition-colors duration-200"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[0.15rem] w-4 bg-slate-600 group-hover:bg-gray-400 transition-colors duration-200"
          style={{ x: '-50%', y: '-90%', top: '35%' }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[0.15rem] w-4 bg-slate-600 group-hover:bg-gray-400 transition-colors duration-200"
          style={{ x: '-50%', y: '-50%', top: '50%' }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[0.1rem] w-4 bg-slate-600 group-hover:bg-gray-400 transition-colors duration-200"
          style={{
            x: '-50%',
            y: '50%',
            bottom: '35%',
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default HamburgerButton;
