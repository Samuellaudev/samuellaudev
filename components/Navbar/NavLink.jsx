import Link from 'next/link';
import clsx from 'clsx';

const NavLink = ({ href, title, pathname, onClick }) => {
  const isActive = pathname === href;

  const linkClasses = clsx(
    'block mt-2 py-2 pl-3 pr-4 text-slate-900 dark:text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-[#ADB7BE] hover:dark:text-white',
    {
      'text-[#ADB7BE]': isActive,
    },
  );

  const underlineClasses = clsx(
    'mx-2 mt-0.5 md:mt-2 duration-500 border-b-2 opacity-0 border-[#ADB7BE] dark:border-white group-hover:opacity-100',
  );

  return (
    <div className="group">
      <Link href={href} onClick={onClick}>
        <span className={linkClasses}>{title}</span>
      </Link>
      <div className={underlineClasses}></div>
    </div>
  );
};

export default NavLink;
