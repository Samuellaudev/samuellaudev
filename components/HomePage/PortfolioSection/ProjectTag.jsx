import clsx from 'clsx';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-gray-600 dark:text-white border-primary-300'
    : 'text-gray-400 dark:text-[#ADB7BE] border-slate-600 hover:border-white';

  const underlineClasses = clsx(
    'mx-6 mt-0.5 md:mt-2 duration-500 border-b-2 opacity-0 border-gray-400 dark:hover:border-white group-hover:opacity-100',
  );

  return (
    <div className="group">
      <button
        className={`${buttonStyles}  px-6 py-1 text-xl cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
      <div className={underlineClasses}></div>
    </div>
  );
};

export default ProjectTag;
