import React from 'react';
import * as ResumeTypes from '../../resumeTypes';

type DegreeProps = {
  degree: ResumeTypes.Degree,
  school: string
}

export const Degree: React.FC<DegreeProps> = ({degree, school}) => {
  const subjects = (typeof degree.subject === 'string') ? [ degree.subject ] : degree.subject;
  const degrees = subjects.map(subject => (
    <div style={{fontWeight: 'bold'}}>
      {degree.level} in {subject}
    </div>
  ));
  return (
  <div className='Degree'>
    {degrees}
    <div>
      {school}
    </div>
    <div>
      {degree.obtained}
    </div>
  </div>
  )
}