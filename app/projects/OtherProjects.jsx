'use client';

import Image from 'next/image';
import styles from './projectsStyles.module.css';
import { IconContext } from 'react-icons';
import { IoOpenOutline } from 'react-icons/io5';
import { CiFolderOn } from 'react-icons/ci';
import { otherProjects } from '@/utils/constants';

const OtherProjects = () => {
  return (
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
  );
};

export default OtherProjects;
