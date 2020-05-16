import React from 'react';
import * as ResumeTypes from '../../resumeTypes';
import { Degree } from './Degree';

type EducationProps = {
    education: ResumeTypes.Education
}

export const Education: React.FC<EducationProps> = ({education}) => {
  const degrees = education.degrees.map(degree => (
    <Degree degree={degree} />
  ))
  return (
    <div className='Education'>
      <span className='School'>
        {education.school}, {education.location}
      </span>
      {degrees}
    </div>
  )
}