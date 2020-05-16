import React from 'react';
import * as ResumeTypes from '../../resumeTypes';

type DegreeProps = {
  degree: ResumeTypes.Degree
}

export const Degree: React.FC<DegreeProps> = ({degree}) => (
  <div className='Degree twoColumn'>
    <span>
      {degree.level} in {degree.subject}
    </span>
    <span>
      {degree.obtained}
    </span>
  </div>
)