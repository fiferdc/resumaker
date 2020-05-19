import React from 'react';
import * as ResumeTypes from '../../resumeTypes';
import { ExperiencePosition } from './ExperiencePosition';

type ExperienceProps = {
  experience: ResumeTypes.Experience
}

export const Experience: React.FC<ExperienceProps> = ({experience}) => {
  const positions = experience.positions.map(position => (
    <ExperiencePosition position={position}/>
  ))
  
  return (
    <div style={{marginBottom: '1em'}}>
      <div>
        <span style={{fontWeight: 'bold'}}>
          {experience.company} /           {experience.location}
        </span>
      </div>  
      <div>
        {positions}
      </div>
    </div>
  )
}