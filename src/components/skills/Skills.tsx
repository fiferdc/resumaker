import React from 'react';

type SkillsProps = {
  skills: any;
}

export const Skills: React.FC<SkillsProps> = (props) => {
  const skills = Object.entries(props.skills).map(([skill, values]) => (
    <div>
      <div style={{fontWeight: 'bold'}}>
        {skill}
      </div>
      <div>
        {(values as string[]).join(', ')}
      </div>
    </div>
  ));

  return (
    <div className='Skills'>
      {skills}
    </div>
  )
}