'use client';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from '@/context/theme-provider';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import NavLink from './NavLink';
import menuIconStyles from './navbar.module.css';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Blog', path: '/blog' },
  { title: 'Projects', path: '/projects' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const { userInfo } = useContext(ThemeContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
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
      await axios.post('/api/users/logout');
      localStorage.removeItem('userInfo');
      localStorage.removeItem('isLogin');
      router.push('/');
      setIsLogin(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-80">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="desktop-menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {isLogin && (
              <>
                <NavLink
                  href="/dashboard"
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
          </ul>
        </div>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen((prevState) => !prevState)}
            className={menuIconStyles.menuIcon}
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {navbarOpen && (
        <MenuOverlay
          isLogin={isLogin}
          username={userInfo?.name}
          links={navLinks}
          pathname={pathname}
          onClick={handleLogout}
        />
      )}
    </nav>
  );
};

export default Navbar;
