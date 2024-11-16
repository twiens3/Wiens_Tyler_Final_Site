// src/components/Work.js
import React from 'react';

const Work = () => {
  const projects = [
    {
      title: 'WPGsneaks',
      description: 'A website to upload and sell sneakers',
      image: '/assets/images/project1.png',
      link: 'https://github.com/twiens3/WPGsneaks',
    },
    {
      title: 'LoL database',
      description: 'A website displaying league of legends champs',
      image: '/assets/images/project2.png',
      link: 'https://github.com/twiens3/LOL-database',
    },
  ];

  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;