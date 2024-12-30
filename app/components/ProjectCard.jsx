// ProjectCard.js
import React from 'react';

const ProjectCard = ({ imgPath, title, description }) => {
  return (
    <div className="bg-[#1E3A56] rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
      <div
        className="h-52 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgPath})` }}
        aria-label={title}
      ></div>
      <div className="p-6 text-gray-300 transition-all duration-300">
        <h5 className="text-lg font-bold text-white mb-3 hover:text-[#4DA8DA] transition-colors duration-300">
          {title}
        </h5>
        <p className="text-sm leading-relaxed text-gray-400 mb-4 hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        <a
          href="#"
          className="text-sm font-semibold text-[#4DA8DA] hover:text-white transition-colors duration-300"
        >
          Explore Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
