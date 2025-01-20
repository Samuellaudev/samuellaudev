import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import { useRouter } from 'next/navigation';

const ProjectHeader = ({ breadCrumbPaths, heading, imagePath }) => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-6 md:px-24 mt-20 md:mt-28 text-[#565b5f] dark:text-white">
      <div className="flex flex-row justify-between items-start">
        <Breadcrumb paths={breadCrumbPaths} />
        <button
          onClick={() => router.push('/projects')}
          className="py-2 px-4 md:px-6 text-sm md:text-base rounded-md border items-center hover:bg-black hover:text-white transition duration-200 dark:hover:bg-white dark:hover:text-black"
        >
          <span className="hidden md:inline">&larr; </span>Back
        </button>
      </div>
      <h2 className="mt-12 font-semibold text-2xl md:text-3xl md:mt-12 mb-10 text-gray-600 dark:text-white">
        {heading}
      </h2>
      <div className="project-image p-6 bg-gradient-to-r from-primary-400/80 to-primary-600/90">
        <Image
          src={imagePath}
          alt="Project image"
          width={650}
          height={650}
          className="rounded-md mx-auto shadow-md"
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
