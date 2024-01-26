'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectLoading as Loading } from './Loading';
import styles from './projectsStyles.module.css';
import { IconContext } from 'react-icons';
import { IoOpenOutline } from 'react-icons/io5';
import { CiFolderOn } from 'react-icons/ci';
import { featuredProjects, otherProjects } from '@/utils/constants';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const renderLoading = () => {
    const numberOfProjects = Array.from({ length: 6 });
    return (
      <div className="grid md:grid-cols-3 gap-4 text-center">
        {numberOfProjects.map((_, index) => (
          <Loading key={index} />
        ))}
      </div>
    );
  };

  const alternateOrder = (id) =>
    Number(id) % 2 === 0 ? 'md:order-last md:text-right' : 'md:order-first';

  const renderProject = () => {
    return (
      <>
        {featuredProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="mb-8 rounded-md shadow-md text-left bg-gradient-to-r from-primary-400 to-primary-600 text-white p-6 dark:bg-none dark:text-white dark:border"
            >
              <div className="flex flex-col md:flex-row items-center">
                <Link href={project.projectDetails}>
                  <Image
                    src={project.image.path}
                    width={600}
                    height={500}
                    alt={project.image.alt}
                    className="w-screen shadow-xl rounded-md hover:-translate-y-2 duration-200"
                  />
                </Link>
                <div className={`py-6 ${alternateOrder(project.id)}`}>
                  <p className="pb-2">
                    <code>Featured Project</code>
                  </p>
                  <Link href={project.projectDetails}>
                    <h2 className="font-semibold ">{project.title}</h2>
                    <div
                      className={`${
                        Number(project.id) % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                      } my-7 md:p-6 rounded-md text-gray-100 md:bg-gradient-to-r from-primary-500/90 to-primary-800/30`}
                    >
                      {project.description}
                    </div>
                  </Link>
                  <div className="text-sm space-x-3 pt-4 pb-5">
                    {project.techStack.map((item, index) => (
                      <code key={index}>{item}</code>
                    ))}
                  </div>
                  <div
                    className={`${
                      Number(project.id) % 2 === 0
                        ? 'md:justify-end'
                        : 'md:justify-start'
                    }
                  flex space-x-3`}
                  >
                    <a href={project.gitUrl}>
                      <Image
                        src="/svg/socialMedia/icon-github.svg"
                        alt="github icon"
                        width={25}
                        height={25}
                        className={`${styles.project__icon} `}
                      />
                    </a>
                    <a href={project.projectUrl}>
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
          );
        })}
        <div className="py-10">
          <h2 className="my-6 text-center text-[#ADB7BE] text-3xl">
            Other Noteworthy Projects
          </h2>
          <div className="md:grid md:grid-cols-3 gap-4">
            {otherProjects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="text-white mb-5 p-6 rounded-md shadow-md text-left bg-gradient-to-r from-gray-500/90 to-gray-800 transition hover:-translate-y-2 duration-200 dark:border dark:bg-none"
                >
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <IconContext.Provider
                        value={{ color: 'orange', size: '50px' }}
                      >
                        <CiFolderOn className="text-gray-300" />
                      </IconContext.Provider>
                      <div className="flex space-x-3">
                        <a href={project.gitUrl}>
                          <Image
                            src="/svg/socialMedia/icon-github.svg"
                            alt="github icon"
                            width={25}
                            height={25}
                            className={`${styles.project__icon}`}
                          />
                        </a>
                        <a href={project.projectUrl}>
                          <IconContext.Provider value={{ size: '25px' }}>
                            <IoOpenOutline
                              className={`hover:text-gray-300 ${styles.project__icon}`}
                            />
                          </IconContext.Provider>
                        </a>
                      </div>
                    </div>
                    <div className="py-6">
                      <a href={project.projectUrl}>
                        <h2 className="font-semibold ">{project.title}</h2>
                        <div className="text-gray-200  my-3">
                          {project.description}
                        </div>
                        <div className="text-sm space-x-3 pt-4">
                          {project.techStack.map((item, index) => (
                            <code key={index}>{item}</code>
                          ))}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <section className="flex min-h-screen flex-col">
      <div className="container mx-auto px-6 md:px-24 md:mt-20 text-[#565b5f] dark:text-white">
        <h2
          className={`${styles.project__heading} mb-10 dark:text-white text-[#ADB7BE]`}
        >
          Projects
        </h2>
        <div className="relative">
          {isLoading ? renderLoading() : renderProject()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
