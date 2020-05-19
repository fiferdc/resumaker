import React from 'react';
import './App.css';
import './resume.css'
import { Personal } from './components/personal/Personal';
import { Education } from './components/education/Education';
import { Experience } from './components/experience/Experience';
import { Skills } from './components/skills/Skills';
import { Section } from './components/Section';

function App({resume}) {
  const experience = resume.experience.map(experience => 
    <Experience experience={experience}/>
  )
  const education = resume.education.map(education => 
    <Education education={education}/>
  )
  return (
    <div className='App'>
      <div className='Name'>
        <span style={{display: 'inline-block', width: '5em', height: '0.6em', borderBottom: '1pt solid #333'}}>&nbsp;</span>
        <span style={{marginLeft: '1em', marginRight: '1em'}}>{resume.personal.name}</span>
        <span style={{display: 'inline-block', width: '5em', height: '0.6em', borderBottom: '1pt solid #333'}}>&nbsp;</span>
      </div>
      <div className='primary twoColumn'>
        <span>
          <Section title='Contact'>
            <Personal personal={resume.personal} />
          </Section>
          <Section title='Education'>
            {education}
          </Section>
          <Section title='Computer Skills'>
            <Skills skills={resume.skills} />
          </Section>
        </span>
        <span style={{textAlign: 'left'}}>
          <Section title='Experience'>
            {experience}
          </Section>  
        </span>
      </div>
    </div>
  );
}

export default App;
