import React from 'react';
import * as ResumeTypes from '../../resumeTypes';

type ExperiencePositionProps = {
  position: ResumeTypes.ExperiencePosition
}

export const ExperiencePosition: React.FC<ExperiencePositionProps> = ({position}) => {
  const accomplisments = position.accomplishments.map(accomplisment => (
      <li>{accomplisment}</li>
  ))

  return (
    <div>
      <div className='twoColumn'>
        <span>
          {position.role}
        </span>
        <span>
          {position.start} - {position.end || 'Present'}
        </span>
      </div>  
      <ul style={{marginTop: '0.25em', marginBottom: '0.5em'}}>{accomplisments}</ul>
    </div>
  )
}