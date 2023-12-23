import { poppins } from '@/app/components/fonts';
import Navbar from './components/Navbar';
import FooterSection from './components/HomePage/FooterSection';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export const metadata = {
  title: 'Samuel Lau: Web Development',
  description: 'Everything about web development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        <main className="flex min-h-screen flex-col bg-black">
          <Navbar />
          {children}
          <FooterSection />
        </main>
      </body>
    </html>
  );
}
