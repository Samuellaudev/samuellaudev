import { Inter } from 'next/font/google';
import { poppins } from '@/app/components/fonts';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Samuel Lau: Web Development',
  description: 'Everything about web development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
