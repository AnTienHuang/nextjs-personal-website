import React from 'react';
import experiences from '../data/experiences';
import educationItems from '../data/education';
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
            <h3 style={{ margin: '0.5rem 0', fontWeight: 'bold', fontSize: '1.2rem', color: '#B0BEC5' }}>
              {experience.company}
              <span style={{ color: '#37474F' }}> | </span> 
              {experience.location}
              <span style={{ color: '#37474F' }}> | </span> 
              {experience.period}
            </h3>
            {experience.skills.map((skill, skillIndex) => (
              <div key={skillIndex} style={{ marginTop: '1rem' }}>
                <h4 style={{ fontSize: '1.2rem', color: '#78909C', margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>
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
            {index < experiences.length - 1 && (
              <div style={{ margin: '2rem 0', height: '1px', backgroundColor: '#444444' }} /> 
            )}
          </div>
        ))}
      </div>
      <div style={{ margin: '2rem auto', height: '3px', backgroundColor: '#444444', width: '75%' }} />

      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', marginTop: '4rem', marginBottom: '8rem'}}>
        <h1 className="text-4xl text-center font-bold">Education</h1>
        {educationItems.map((educationItem: EducationItem, index: number) => (
          <div key={index} style={{ marginTop: '2rem' }}>
            <h2 style={{ margin: '0', fontSize: '1.5rem', color: '#CFD8DC' }}>
              {educationItem.program}
            </h2>
            <h3 style={{ margin: '0.5rem 0', fontWeight: 'bold', fontSize: '1.2rem', color: '#78909C' }}>
              {educationItem.university}
              <span style={{ color: '#37474F' }}> | </span> 
              {educationItem.period}
            </h3>
            <h4 style={{ fontSize: '1.2rem', color: '#CFD8DC', margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>
              Result: {educationItem.grade}
            </h4>
            {index < experiences.length - 1 && (
              <div style={{ margin: '2rem 0', height: '1px', backgroundColor: '#444444' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;