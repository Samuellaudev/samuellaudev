import React from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import navbarStyles from './navbar.module.css';

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <div class="flex justify-between w-32 py-3">
        <a href="https://github.com/samuellaudev">
          <Image
            src="/images/icon-github.svg"
            alt=""
            className={`duration-200 ${navbarStyles.ficon}`}
            width={20}
            height={20}
          />
        </a>
        <a href="https://www.linkedin.com/in/lau-chun-fong/">
          <Image
            src="/images/icon-linkedin.svg"
            alt=""
            className={`duration-200 ${navbarStyles.ficon}`}
            width={20}
            height={20}
          />
        </a>
        <a href="https://www.instagram.com/samuel_cf_lau/">
          <Image
            src="/images/icon-instagram.svg"
            alt=""
            className={`duration-200 ${navbarStyles.ficon} pt-[1px]`}
            width={20}
            height={20}
          />
        </a>
      </div>
    </ul>
  );
};

export default MenuOverlay;
