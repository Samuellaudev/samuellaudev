import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import ThemeSwitch from '../ThemeSwitch';
import navbarStyles from './navbar.module.css';
import { socialLinks } from '@/utils/constants';

const renderSocialLinks = () => {
  return (
    <div className="flex justify-between w-32 py-3 mt-4">
      {socialLinks.map((socialLink, index) => (
        <Link href={socialLink.href} key={index}>
          <Image
            src={socialLink.src}
            alt={socialLink.alt}
            className={`duration-200 ${navbarStyles.ficon} ${
              index !== socialLinks.length - 1 ? 'mr-2' : ''
            }`}
            width={20}
            height={20}
          />
        </Link>
      ))}
    </div>
  );
};

const MenuOverlay = ({
  isLogin,
  username,
  links,
  pathname,
  onClick,
  onClickNavBar,
}) => {
  const renderLoggedInLinks = () => {
    return (
      <>
        <NavLink
          href="/dashboard"
          title={`(${username})`}
          pathname={pathname}
        />
        <NavLink href="" title="Logout" pathname="/logout" onClick={onClick} />
      </>
    );
  };

  const renderNavLinks = () => {
    return (
      <>
        {isLogin && renderLoggedInLinks()}
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              href={link.path}
              title={link.title}
              pathname={pathname}
              onClick={onClickNavBar}
            />
          </li>
        ))}
        <ThemeSwitch className="mt-5" />
      </>
    );
  };

  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {renderNavLinks()}
      {renderSocialLinks()}
    </ul>
  );
};

export default MenuOverlay;
