import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import navbarStyles from './navbar.module.css';

const socialLinks = [
  {
    href: 'https://github.com/samuellaudev',
    src: '/images/icon-github.svg',
    alt: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/lau-chun-fong/',
    src: '/images/icon-linkedin.svg',
    alt: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/samuel_cf_lau/',
    src: '/images/icon-instagram.svg',
    alt: 'Instagram',
  },
];

const renderSocialLinks = () => {
  return (
    <div className="flex justify-between w-32 py-3">
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

const MenuOverlay = ({ isLogin, username, links, pathname, onClick }) => {
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
            <NavLink href={link.path} title={link.title} pathname={pathname} />
          </li>
        ))}
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
