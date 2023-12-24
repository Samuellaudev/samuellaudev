import Link from 'next/link';
import clsx from 'clsx';

const NavLink = ({ href, title, pathname }) => {
  return (
    <div className="group">
      <Link
        href={href}
        className={clsx(
          'block mt-2 py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white',
          {
            'text-white': pathname === href,
          },
        )}
      >
        {title}
      </Link>
      <div className="mx-2 mt-0.5 md:mt-2 duration-500 border-b-2 opacity-0 border-white group-hover:opacity-100"></div>
    </div>
  );
};

export default NavLink;
