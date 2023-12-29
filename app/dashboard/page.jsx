'use client';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../theme-provider';
import axios from 'axios';
import styles from './dashboardStyles.module.css';
import Posts from '../components/Posts';

const Dashboard = () => {
  const { userInfo } = useContext(ThemeContext);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Posts pageHeading="Dashboard" />
    </main>
  );
};

export default Dashboard;
