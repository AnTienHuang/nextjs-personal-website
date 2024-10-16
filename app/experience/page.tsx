import React from 'react';
import experiences from '../data/experiences';
import { Navigation } from "../components/nav";

const ExperiencePage: React.FC = () => {
  return (
    <div className="from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', marginTop: '4rem'}}>
        <h1 className="text-4xl text-center font-bold">Work Experience</h1>
        
        {experiences.map((experience: ExperienceItem, index: number) => (
          <div key={index} style={{ marginTop: '2rem' }}>
            <h2 style={{ margin: '0', fontSize: '1.5rem', color: '#CFD8DC' }}>
              {experience.role}
            </h2>
            <h3 style={{ margin: '0.5rem 0', fontWeight: 'normal', fontSize: '1.2rem', color: '#B0BEC5' }}>
              {experience.company}
              <span style={{ color: '#37474F' }}> | </span> 
              {experience.location}
              <span style={{ color: '#37474F' }}> | </span> 
              {experience.period}
            </h3>
            {experience.skills.map((skill, skillIndex) => (
              <div key={skillIndex} style={{ marginTop: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem', color: '#546E7A', margin: '0 0 0.5rem 0' }}>
                  {skill.name}
                </h4>
                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: '#B0BEC5' }}>
                  {skill.descriptions.map((point, pointIndex) => (
                    <li key={pointIndex} style={{ marginBottom: '0.5rem' }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;