import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '@/context/theme-provider';
import NavLink from '@/components/Navbar/NavLink';
import ThemeSwitch from '@/components/Navbar/ThemeSwitch';
import HamburgerButton from '@/components/Animation/HamburgerButton';

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
      <HamburgerButton navbarOpen={navbarOpen} toggleNavbar={toggleNavbar} />

      {/* Dropdown Menu */}
      <motion.ul
        initial="closed"
        animate={navbarOpen ? 'open' : 'closed'}
        variants={wrapperVariants}
        style={{ originY: 'top', translateX: '-85%' }}
        className="absolute flex flex-col min-w-[21.9rem] p-2 top-[160%] items-center md:hidden bg-white dark:bg-[#121212] border rounded-lg border-slate-800"
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
