import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/context/theme-provider';
import { poppins } from '@/components/fonts';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/HomePage/FooterSection';
import 'react-toastify/dist/ReactToastify.css';
import '@/css/globals.css';
import style from './homePage.module.css';

export const metadata = {
  generator: 'Next.js',
  applicationName: 'Samuel Lau: Web Development',
  description: 'Everything about web development',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'React.js',
    'JavaScript',
    'TypeScript',
    'AWS',
    'Amazon Web Services',
    'Web Development',
    'Node.js',
    'Express.js',
  ],
  authors: [{ name: 'Samuel Lau', url: `${process.env.FRONTEND_URL}` }],
  creator: 'Samuel Lau',
  publisher: 'Samuel Lau',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'google',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <ThemeProvider>
          <main
            className={`flex min-h-screen flex-col 
              ${style.light_theme} dark:bg-black dark:text-black`}
          >
            <Navbar />
            <div className="mt-5 md:mt-0">{children}</div>
            <FooterSection />
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
