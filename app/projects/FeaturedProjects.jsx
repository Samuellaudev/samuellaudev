'use client';
import Image from 'next/image';
import Link from 'next/link';
import Spotlight from '@/components/Animation/Spotlight';
import { IconContext } from 'react-icons';
import { IoOpenOutline } from 'react-icons/io5';
import { featuredProjects } from '@/utils/constants';
import styles from './projectsStyles.module.css';

const FeaturedProjects = () => {
  const alternateOrder = (id) =>
    Number(id) % 2 !== 0
      ? 'md:order-first'
      : 'md:order-last md:text-right pl-1';

  return (
    <>
      {featuredProjects.map((project) => {
        return (
          <Spotlight key={project.id} className="mb-8">
            <div className="p-6 rounded-md shadow-md text-left bg-gradient-to-r from-primary-400 to-primary-600 text-white dark:bg-none dark:text-white dark:border dark:border-zinc-800">
              <div className="flex flex-col md:flex-row items-center">
                <Link href={project.projectDetails}>
                  <Image
                    src={project.image.path}
                    width={600}
                    height={500}
                    alt={project.image.alt}
                    className="w-full shadow-xl rounded-md hover:-translate-y-2 duration-200"
                  />
                </Link>
                <div className={`py-6 md:w-1/2 ${alternateOrder(project.id)}`}>
                  <p className="pb-2">
                    <code>Featured Project</code>
                  </p>
                  <Link href={project.projectDetails}>
                    <h2 className="font-semibold ">{project.title}</h2>
                    <div
                      className={`${
                        Number(project.id) % 2 !== 0 ? 'md:mr-8' : 'md:ml-8'
                      } my-7 md:p-6 rounded-md text-gray-100 md:bg-gradient-to-r from-primary-500/90 to-primary-800/30`}
                    >
                      {project.description}
                    </div>
                  </Link>
                  <div
                    className={`${
                      Number(project.id) % 2 !== 0 ? 'md:mr-8' : 'md:ml-8'
                    } flex flex-wrap text-sm space-x-3 px-1 pt-4 pb-5`}
                  >
                    {project.techStack.map((item, index) => (
                      <code key={index}>{item}</code>
                    ))}
                  </div>
                  <div
                    className={`${
                      Number(project.id) % 2 !== 0
                        ? 'md:justify-start'
                        : 'md:justify-end'
                    }
                  flex space-x-3`}
                  >
                    <a href={project.gitUrl} target="_blank">
                      <Image
                        src="/svg/socialMedia/icon-github.svg"
                        alt="github icon"
                        width={25}
                        height={25}
                        className={`${styles.project__icon} `}
                      />
                    </a>
                    <a href={project.projectUrl} target="_blank">
                      <IconContext.Provider value={{ size: '30px' }}>
                        <IoOpenOutline
                          className={`hover:text-gray-300 ${styles.project__icon}`}
                        />
                      </IconContext.Provider>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Spotlight>
        );
      })}
    </>
  );
};

export default FeaturedProjects;
