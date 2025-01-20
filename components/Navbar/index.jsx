'use client';

import { USERS_URL, navLinks, logo } from '@/utils/constants';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '@/context/theme-provider';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

import MenuOverlay from '@/components/Navbar/MenuOverlay';
import NavLink from '@/components/Navbar/NavLink';
import SliderToggle from '@/components/Animation/SliderToggle';
import SearchBox from '@/components/SearchBox';
import VerifyEmailReminder from '@/components/Email/VerifyEmailReminder';

const Navbar = () => {
  const { userInfo, navbarOpen, setNavbarOpen } = useContext(ThemeContext);
  const [isLogin, setIsLogin] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    const storedIsLogin = localStorage.getItem('isLogin') === 'true';
    if (storedUserInfo || storedIsLogin) {
      setIsLogin(true);
    }
  }, [userInfo]);

  const handleLogout = async () => {
    try {
      await axios.post(`${USERS_URL}/logout`);

      localStorage.removeItem('userInfo');
      localStorage.removeItem('isLogin');
      router.push('/');
      setIsLogin(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="fixed mx-auto border border-slate-800 top-5 left-5 right-5 md:left-20 md:right-20 z-10 bg-white dark:bg-[#121212]/80 bg-opacity-80 backdrop-blur-md backdrop-opacity-80 rounded-3xl">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4">
        <Link
          href="/"
          onClick={() => (navbarOpen ? setNavbarOpen((pv) => !pv) : null)}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src={logo}
            alt="website logo"
            width={35}
            height={35}
            className="mx-auto md:mx-0 rounded-full dark:border dark:border-slate-800"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {/* {pathname === '/blog' && <SearchBox />} */}
            {isLogin && (
              <>
                <NavLink
                  href="/dashboard?search=&pageNumber=1"
                  title={`(${userInfo?.name})`}
                  pathname={pathname}
                />
                <NavLink
                  href=""
                  title="Logout"
                  pathname="/logout"
                  onClick={handleLogout}
                />
              </>
            )}
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  pathname={pathname}
                />
              </li>
            ))}
            <SliderToggle />
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu md:hidden flex items-center">
          {/* {pathname === '/blog' && (
            <div className="mr-4">
              <SearchBox isMobile={true} />
            </div>
          )} */}
          <MenuOverlay
            isLogin={isLogin}
            username={userInfo?.name}
            links={navLinks}
            pathname={pathname}
            onClick={handleLogout}
          />
        </div>
      </div>
      {isLogin && (
        <VerifyEmailReminder pathname={pathname} userInfo={userInfo} />
      )}
    </nav>
  );
};

export default Navbar;
