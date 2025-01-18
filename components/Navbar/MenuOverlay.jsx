import React from 'react';
import NavLink from './NavLink';
import ThemeSwitch from '../ThemeSwitch';

const MenuOverlay = ({
  isLogin,
  username,
  links,
  pathname,
  onClick,
  onClickNavBar,
}) => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
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
    </ul>
  );
};

export default MenuOverlay;
