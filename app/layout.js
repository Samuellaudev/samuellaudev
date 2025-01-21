import { Analytics } from '@vercel/analytics/react';
import { poppins } from '@/components/fonts';
import ClientWrapper from '@/components/ClientWrapper';
import 'react-toastify/dist/ReactToastify.css';
import '@/css/globals.css';

export const metadata = {
  generator: 'Next.js',
  title: 'Samuel Lau: Web Development',
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
  authors: [{ name: 'Samuel Lau', url: `${ process.env.FRONTEND_URL }` }],
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
      <body className={ `${ poppins.className }` }>
        <ClientWrapper>
          <div className="mt-10 md:mt-5">{ children }</div>
        </ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
