'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

export default function Spotlight({
  spotlightColor = 'rgba(249, 115, 22, 0.15)', // for light theme
  className,
  children,
  ...rest
}) {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    // The position of the element relative to the viewport
    const { left, top } = currentTarget.getBoundingClientRect();
    // The position of the mouse relative to the element
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Apply resolvedTheme only after confirming the component is on the client
  const themeColor =
    isClient && resolvedTheme === 'dark'
      ? 'rgba(14, 165, 233, 0.15)'
      : spotlightColor;

  const backgroundStyle = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      ${themeColor},
      transparent 80%
    )
  `;

  return !isClient ? (
    // Rendering a non-interactive placeholder during SSR
    <div
      className={clsx(
        'group relative rounded-md dark:bg-gray-900 shadow-2xl',
        className,
      )}
    >
      {children}
    </div>
  ) : (
    <div
      className={clsx(
        'group relative rounded-md dark:bg-gray-900 shadow-2xl',
        className,
      )}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: backgroundStyle,
        }}
      />
      {children}
    </div>
  );
}
