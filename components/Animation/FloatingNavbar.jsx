'use client';

import { useState } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';

/**
 * A floating navbar that animates based on scroll direction.
 *
 * @param {React.ReactNode} children - The content to be animated.
 * @param {number} [threshold=5] - The scroll change threshold that triggers animation
 * @returns {React.ReactElement} A motion div with scroll-based animation properties.
 */
const FloatingNavbar = ({ children, threshold = 5 }) => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const diff = latest - scrollY.getPrevious();

    if (Math.abs(diff) > threshold) {
      setScrollDirection(diff > 0 ? 'down' : 'up');
    }
  });

  return (
    <AnimatePresence>
      {scrollDirection !== 'down' && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNavbar;
