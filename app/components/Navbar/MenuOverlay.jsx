import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import navbarStyles from './navbar.module.css';

const MenuOverlay = ({ username, links, pathname }) => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      <NavLink href={username} title={`(${username})`} pathname={pathname} />
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} pathname={pathname} />
        </li>
      ))}
      <div className="flex justify-between w-32 py-3">
        <Link href="https://github.com/samuellaudev">
          <Image
            src="/images/icon-github.svg"
            alt=""
            className={`duration-200 ${navbarStyles.ficon}`}
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/lau-chun-fong/">
          <Image
            src="/images/icon-linkedin.svg"
            alt=""
            className={`duration-200 ${navbarStyles.ficon}`}
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://www.instagram.com/samuel_cf_lau/">
          <Image
            src="/images/icon-instagram.svg"
            alt=""
            className={`duration-200 ${navbarStyles.ficon} pt-[1px]`}
            width={20}
            height={20}
          />
        </Link>
      </div>
    </ul>
  );
};

export default MenuOverlay;
