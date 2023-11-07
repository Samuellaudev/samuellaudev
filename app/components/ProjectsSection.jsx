'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: 'Certifications 1',
    description: 'Project 1 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Certifications'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Certifications 2',
    description: 'Project 2 description',
    image: '/images/projects/2.png',
    tag: ['All', 'Certifications'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'Project 1',
    description: 'Project 3 description',
    image: '/images/projects/3.png',
    tag: ['All', 'Project'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Project 2',
    description: 'Project 4 description',
    image: '/images/projects4.png',
    tag: ['All', 'Project'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Badge 1',
    description: 'Authentication and CRUD operations',
    image: '/images/projects/5.png',
    tag: ['All', 'Badge'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Badge 2',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Badge'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Portfolio
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Certifications"
          isSelected={tag === 'Certifications'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Project"
          isSelected={tag === 'Project'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Badge"
          isSelected={tag === 'Badge'}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
