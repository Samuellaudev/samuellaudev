'use client';

import { useEffect, useState } from 'react';
import { ProjectLoading as Loading } from './Loading';
import styles from './projectsStyles.module.css';
import FeaturedProjects from './FeaturedProjects';
import OtherProjects from './OtherProjects';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
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

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-6 md:px-24 md:mt-20 text-[#565b5f] dark:text-white">
        <h2
          className={`${styles.project__heading} mb-10 dark:text-white text-[#ADB7BE]`}
        >
          Projects
        </h2>
        <div className="">
          {isLoading ? (
            renderLoading()
          ) : (
            <>
              <FeaturedProjects />
              <OtherProjects />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
