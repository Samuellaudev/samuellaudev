import Link from 'next/link';
import PaginationLink from './PaginationLink';
import styles from './pagination.module.css';

const Paginate = ({ pages, page }) => {
  return (
    pages > 1 && (
      <div className="flex items-center mt-8">
        <PaginationLink page={page} pages={pages} arrowType="left" />
        {[...Array(pages).keys()].map((x) => (
          <Link key={x + 1} href={`/blog?pageNumber=${x + 1}`}>
            <span
              className={`${
                styles.page_number
              } dark:bg-gray-800 dark:text-white ${
                x + 1 === page
                  ? 'text-white bg-primary-400 dark:bg-primary-400'
                  : ''
              }`}
            >
              {x + 1}
            </span>
          </Link>
        ))}
        <PaginationLink page={page} pages={pages} arrowType="right" />
      </div>
    )
  );
};

export default Paginate;
