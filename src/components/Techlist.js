// src/components/TechList.js
import React from 'react';

const TechList = () => {
  const techs = [
    { name: 'React', icon: '/assets/images/react-icon.png' },
    { name: 'Node.js', icon: '/assets/images/nodejs-icon.png' },
    { name: 'CSS', icon: '/assets/images/css-icon.png' },
    { name: 'Ruby', icon: '/assets/images/ruby-icon.png' },
    { name: 'PHP', icon: '/assets/images/php-icon.png'}
  ];

  return (
    <section id="tech-list">
      <h2>Technologies</h2>
      <div className="tech-icons">
        {techs.map((tech, index) => (
          <div key={index} className="tech-icon">
            <img src={tech.icon} alt={tech.name} />
            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechList;