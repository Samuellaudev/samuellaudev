'use client';

import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';

/**
 * Part 1 - Setting up the Scroll Environment
 * Step 1: Setup the Scroll Container with useRef
 * Step 2: Track the Page Height with useState
 * Step 3: ResizeObserver to Track Changes in Height (only scrollRef.current)
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver
 * Step 4: Hook Up the ResizeObserver with useEffect
 *
 * Part 2 - Implementing Smooth Scroll Mechanics
 * Step 5: Scroll Tracking with useScroll
 * Step 6: Map Scroll Position to Translation with useTransform
 * Step 7: Apply Smooth Easing with useSpring
 * Step 8: Render the Scrollable Container with Motion
 * Step 9: Spacer to Enable Native Scrolling
 */

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);

  // Callback to update scrollable height when browser resizes
  const resizePageHeight = useCallback((entries) => {
    const entry = entries[0];
    if (entry?.contentRect) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // Setup ResizeObserver to watch for changes in scrollRef's dimensions
  useEffect(() => {
    const resizeObserver = new ResizeObserver(resizePageHeight);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [resizePageHeight]);

  // Transform the scroll position into a negative scroll value for translateY
  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = useMemo(
    () => ({ damping: 25, mass: 1.3, stiffness: 55 }),
    [],
  );
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="scroll-container fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>

      {/* Spacer div for enabling native browser scrolling */}
      <div style={{ height: pageHeight }} className="scroll-spacer" />
    </>
  );
};

export default SmoothScroll;
