import Link from 'next/link';
import clsx from 'clsx';

const NavLink = ({ href, title, pathname }) => {
  return (
    <Link
      href={href}
      className={clsx(
        'block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white',
        {
          'text-white': pathname === href,
        },
      )}
    >
      {title}
    </Link>
  );
};

export default NavLink;
