'use client';

import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion';

const ScrollBar = ({ children, color = 'var(--color-primary)' }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //   Trigger any additional logic here, like updating state or analytics.
  //   console.log('Scroll progress: ', latest);
  // });

  const scrollConfig = {
    scaleX,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
    originX: 0,
    backgroundColor: color || '#f97316',
    zIndex: 999,
  };

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={scrollConfig}
        aria-hidden="true"
      />
      {children}
    </>
  );
};

export default ScrollBar;
