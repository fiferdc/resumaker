import React from 'react';
import * as ResumeTypes from '../../resumeTypes';

type ExperiencePositionProps = {
  position: ResumeTypes.ExperiencePosition
}

export const ExperiencePosition: React.FC<ExperiencePositionProps> = ({position}) => {
  const accomplisments = position.accomplishments.map(accomplishment => {
    if (!accomplishment.endsWith('.')) {
      console.warn(`Accomplishment "${accomplishment.substring(0, 10)}..." does not end with a period.`)
    }
    return (
      <li>{accomplishment}</li>
    )
  });

  return (
    <div>
      <div className='twoColumn' style={{fontWeight: 'bold', fontStyle: 'italic'}}>
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