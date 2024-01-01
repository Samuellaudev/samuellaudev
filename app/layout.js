import { ThemeProvider } from '@/context/theme-provider';
import { poppins } from '@/components/fonts';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/HomePage/FooterSection';
import 'react-toastify/dist/ReactToastify.css';
import '@/css/globals.css';

export const metadata = {
  title: 'Samuel Lau: Web Development',
  description: 'Everything about web development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        <ThemeProvider>
          <main className="flex min-h-screen flex-col bg-black">
            <Navbar />
            <div className="mt-5 md:mt-0">{children}</div>
            <FooterSection />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
