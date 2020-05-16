import React from 'react';

type SkillsProps = {
  skills: any;
}

export const Skills: React.FC<SkillsProps> = (props) => {
  const skills = Object.entries(props.skills).map(([skill, values]) => (
    <div>
      <b>{skill}</b> - {(values as string[]).join(', ')}
    </div>
  ));

  return (
    <div className='Skills'>
      {skills}
    </div>
  )
}