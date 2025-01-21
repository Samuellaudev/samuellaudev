'use client';

import { ThemeProvider } from '@/context/theme-provider';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import FooterSection from '@/components/HomePage/FooterSection';

const ClientWrapper = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col bg-white text-black dark:bg-black dark:text-black">
        <BackToTop />
        <Navbar />
        {children}
        {/* for better layout with SmoothScroll */}
        {!isHomePage && <FooterSection />}
      </main>
    </ThemeProvider>
  );
};

export default ClientWrapper;
