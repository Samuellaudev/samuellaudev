'use client';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '@/app/theme-provider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import NavLink from './NavLink';
import menuIconStyles from './navbar.module.css';

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Projects',
    path: '/projects',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const Navbar = () => {
  const { userInfo } = useContext(ThemeContext);
  const { name = '' } = userInfo ?? {};

  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-80">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={'/'}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="desktop-menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <NavLink href={name} title={`(${name})`} pathname={pathname} />
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
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className={menuIconStyles.menuIcon}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className={menuIconStyles.menuIcon}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay username={name} links={navLinks} pathname={pathname} />
      ) : null}
    </nav>
  );
};

export default Navbar;
