// ProjectSection.js
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    imgPath: 'images/web3.png',
    title: 'Beautiful Mountain View',
    description:
      'Explore the breathtaking views and serene landscapes of the mountains.',
  },
  {
    imgPath: 'images/web4.png',
    title: 'Beautiful Mountain View',
    description:
      'Explore the breathtaking views and serene landscapes of the mountains.',
  },
  {
    imgPath: 'images/web2.png',
    title: 'Peaceful Lake Sunset',
    description:
      'Experience tranquility with a view of a peaceful sunset by the lake.',
  },
  {
    imgPath: 'images/my-portfolio.png',
    title: 'Peaceful Lake Sunset',
    description:
      'Experience tranquility with a view of a peaceful sunset by the lake.',
  },
  {
    imgPath: 'images/web5.png',
    title: 'Peaceful Lake Sunset',
    description:
      'Experience tranquility with a view of a peaceful sunset by the lake.',
  },
  {
    imgPath: 'images/model.png',
    title: 'Peaceful Lake Sunset',
    description:
      'Experience tranquility with a view of a peaceful sunset by the lake.',
  },
  {
    imgPath: 'images/web1.png',
    title: 'Urban Exploration',
    description:
      'Dive into the hustle and bustle of city life with stunning cityscapes.',
  },
];

const ProjectSection = () => {
  return (
    <section className="ml-7 sm:ml-3 py-4 bg-[#2E5077]">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="md:text-4xl text-3xl font-bold text-left md:text-center text-gray-300 sm:text-white  mb-6">
          My Works
        </h1>
        <p className="text-base text-[#ADB7BE] md:text-gray-300 sm:text-lg mb-10 max-w-3xl mx-auto">
          These projects showcase both my individual creativity and skills, as well as collaborative efforts with teams. They include personal works and projects developed for organizations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgPath={project.imgPath}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
