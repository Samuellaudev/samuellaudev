'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import Select from '@/components/Select';
import { projectsData } from '@/utils/constants';

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  return (
    <section id="projects" className="text-[#565b5f] dark:text-white py-20">
      <h2 className="text-3xl md:text-4xl text-[#ADB7BE] dark:text-white text-center">
        <span className="flex items-center">
          <span className="h-px flex-1 bg-[#ADB7BE]"></span>
          <span className="shrink-0 px-4 md:px-6">Portfolio</span>
          <span className="h-px flex-1 bg-[#ADB7BE]"></span>
        </span>
      </h2>
      <div className="hidden md:block">
        <div className="py-6 text-white flex flex-col md:flex-row justify-center items-center">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === 'All'}
          />
          <span className="pb-2 text-[#ADB7BE] dark:text-white">&bull;</span>
          <ProjectTag
            onClick={handleTagChange}
            name="Certifications"
            isSelected={tag === 'Certifications'}
          />
          <span className="pb-2 text-[#ADB7BE] dark:text-white">&bull;</span>
          <ProjectTag
            onClick={handleTagChange}
            name="Projects"
            isSelected={tag === 'Projects'}
          />
          <span className="pb-2 text-[#ADB7BE] dark:text-white">&bull;</span>
          <ProjectTag
            onClick={handleTagChange}
            name="Badges"
            isSelected={tag === 'Badges'}
          />
        </div>
      </div>
      <Select tagName={tag} setTagName={setTag} />
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              isPublicLink={project.isPublicLink}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
