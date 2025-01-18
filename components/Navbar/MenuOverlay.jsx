import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '@/context/theme-provider';
import NavLink from '@/components/Navbar/NavLink';
import ThemeSwitch from '@/components/Navbar/ThemeSwitch';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

const MenuOverlay = ({ isLogin, username, links, pathname, onClick }) => {
  const { navbarOpen, setNavbarOpen } = useContext(ThemeContext);

  const toggleNavbar = () => setNavbarOpen((prevState) => !prevState);

  return (
    <motion.div animate={navbarOpen ? 'open' : 'closed'} className="relative">
      {/* Navbar Toggle Button */}
      <button
        onClick={toggleNavbar}
        className="flex items-center px-2 py-2 border rounded-full border-slate-600 text-slate-600 hover:text-[#ADB7BE] hover:border-[#ADB7BE] transition duration-200"
        aria-label="Toggle Menu"
      >
        {navbarOpen ? (
          <XMarkIcon className="h-5 w-5" />
        ) : (
          <Bars3Icon className="h-5 w-5" />
        )}
      </button>

      {/* Dropdown Menu */}
      <motion.ul
        initial="closed"
        animate={navbarOpen ? 'open' : 'closed'}
        variants={wrapperVariants}
        style={{ originY: 'top', translateX: '-85%' }}
        className="absolute flex flex-col min-w-[21.5rem] p-2 top-[160%] items-center md:hidden bg-white dark:bg-[#121212] border rounded-lg border-slate-600"
      >
        {isLogin && (
          <>
            <NavLink
              href="/dashboard?search=&pageNumber=1"
              title={`(${username})`}
              pathname={pathname}
            />
            <NavLink
              href=""
              title="Logout"
              pathname="/logout"
              onClick={onClick}
            />
          </>
        )}
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              href={link.path}
              title={link.title}
              pathname={pathname}
              onClick={toggleNavbar}
            />
          </li>
        ))}
        <ThemeSwitch className="mt-5" />
      </motion.ul>
    </motion.div>
  );
};

export default MenuOverlay;
