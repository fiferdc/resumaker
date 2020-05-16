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
      <div style={{width: '100%'}}>
        <Personal personal={resume.personal} />
        <Section title='Education'>
          {education}
        </Section>
        <Section title='Experience'>
          {experience}
        </Section>
        <Section title='Computer Skills'>
          <Skills skills={resume.skills} />
        </Section>
      </div>
    </div>
  );
}

export default App;
