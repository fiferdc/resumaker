import React from 'react';

type SectionProps = {
    title: string
}

export const Section: React.FC<SectionProps> = (props) => {
  return (
    <div className='Section'>
      <span className='Title'>
        {props.title}
      </span>
      <hr />
      {props.children}
    </div>
  )
}