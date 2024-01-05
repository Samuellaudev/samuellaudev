'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ProjectLoading as Loading } from './Loading';
import styles from './projectsStyles.module.css';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);

  const numberOfProjects = [{}, {}, {}, {}, {}, {}];

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 md:mt-20 text-[#565b5f] dark:text-white">
        <h2
          className={`${styles.project__heading} mb-10 dark:text-white text-[#ADB7BE]`}
        >
          Projects
        </h2>
        <div className="relative">
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {numberOfProjects.map((item, index) => (
                <Loading key={index} />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2>The projects are coming soon!</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
