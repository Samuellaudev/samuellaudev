import Link from "next/link";
import Image from "next/image";

interface Path {
  title: string;
  link: string;
}

interface BreadcrumbProps {
  paths: Path[];
}

const Breadcrumb = ({ paths }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb flex space-x-2">
        { paths.map((path, index) => (
          <li key={ index } className={ `breadcrumb-item${ index === paths.length - 1 ? ' active' : '' }` }>
            {/* Render the last item as plain text (not a link) */ }
            { index === paths.length - 1 ? (
              <span className='text-slate-500 hover:underline'>{ path.title }</span>
            ) : (
              // Render a link for non-last breadcrumb items
              <div className='flex items-center text-sm md:text-base'>
                <Link href={ path.link }>
                  <span className=" text-slate-500 dark:text-white">
                    { path.title }
                  </span>
                </Link>
                <span className="mx-1 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            ) }
          </li>
        )) }
      </ol>
    </nav>
  );
};

export default Breadcrumb;