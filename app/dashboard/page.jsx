'use client';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { ThemeContext } from '../theme-provider';
import axios from 'axios';
import styles from './dashboardStyles.module.css';
import Posts from '../components/Posts';

const Dashboard = () => {
  const { userInfo } = useContext(ThemeContext);
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('isLogin') || !localStorage.getItem('userInfo')) {
      router.push('/');
      setIsLogin(false);
      return;
    }

    setIsLogin(true);
  }, [router]);

  // to-be-done: set loading state

  return (
    <main className="flex min-h-screen flex-col bg-black">
      {isLogin && <Posts pageHeading="Dashboard" />}
    </main>
  );
};

export default Dashboard;
