'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboardStyles.module.css';
import Posts from '@/components/Posts';

const Dashboard = () => {
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('isLogin') || !localStorage.getItem('userInfo')) {
      router.push('/');
      setIsLogin(false);
      return;
    }

    setIsLogin(true);
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col md:px-24">
      {isLogin && <Posts pageHeading="Dashboard" />}
    </div>
  );
};

export default Dashboard;
