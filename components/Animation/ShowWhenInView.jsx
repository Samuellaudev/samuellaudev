'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Generic component that animates its children into view when they enter the viewport.
 *
 * @param {React.ReactNode} children - The content to be animated.
 * @param {number} [delay=0] - Delay in seconds before the animation starts.
 * @param {string} [initialY=30] - Initial vertical offset in pixels.
 * @param {string} [margin='-100px'] - Margin for the inView check.
 * @param {boolean} [once=true] - Whether to only trigger animation once.
 * @returns {React.ReactElement} A motion div with animation properties.
 */
const ShowWhenInView = ({
  children,
  delay = 0,
  initialY = 30,
  margin = '-100px',
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  return (
    <motion.div
      ref={ref}
      initial={{ y: initialY, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        delay,
        duration: 1,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default ShowWhenInView;
