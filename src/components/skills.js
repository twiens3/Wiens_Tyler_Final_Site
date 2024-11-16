import React from 'react';

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PHP', 'Java'] },
    { category: 'DevOps', items: ['Docker', 'CI/CD', 'AWS', 'Python', 'Ruby'] },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-category">
          <h3>{skill.category}</h3>
          <ul>
            {skill.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;