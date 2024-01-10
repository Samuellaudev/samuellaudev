'use client';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '@/context/theme-provider';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const EmailVerification = () => {
  const { setUserInfo } = useContext(ThemeContext);
  const [isSuccess, setIsSuccess] = useState(false);

  const { slug: verificationString } = useParams();

  useEffect(() => {
    const loadVerification = async () => {
      try {
        const response = await axios.put('/api/emails/verify-email', {
          verificationString,
        });
        const { data, status } = response;

        if (status === 200) {
          localStorage.setItem('userInfo', JSON.stringify(data));
          setUserInfo(data);

          setIsSuccess(true);
        }
      } catch (error) {
        console.log(error);
        setIsSuccess(false);
      }
    };

    loadVerification();
  }, [verificationString, setUserInfo]);

  const successContent = (
    <div className="container text-black dark:text-white">
      <div className="flex flex-col items-center justify-center text-center mt-48 space-y-8 text-gray-600 dark:text-white">
        <h2 className="text-4xl font-semibold">Success!</h2>
        <div className="w-[400px] md:w-auto leading-loose">
          <p>Thanks for verifying your email.</p>
          <p>
            The successful verification of the email enables complete access to
            all the app&apos;s features.
          </p>
        </div>
        <p className="border border-gray-300 rounded-md px-4 py-2 text-lg cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-200">
          <Link href="/dashboard?search=&pageNumber=1">Go to dashboard</Link>
        </p>
      </div>
    </div>
  );

  const errorContent = (
    <div className="container text-black dark:text-white">
      <div className="flex flex-col items-center justify-center text-center mt-48 space-y-8 text-gray-600 dark:text-white">
        <h2 className="text-4xl font-semibold">Uh oh...</h2>
        <p className="w-[300px]">
          Something went wrong while trying to verify your email.
        </p>
        <p className="border border-gray-300 rounded-md px-4 py-2 text-lg cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-200">
          <Link href="/signup">Back to sign-up</Link>
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col">
      {isSuccess ? successContent : errorContent}
    </div>
  );
};

export default EmailVerification;
