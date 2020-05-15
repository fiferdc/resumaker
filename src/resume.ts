import { Resume, DegreeLevel } from './resumeTypes';

export default {
   personal: {
      name: 'David Fifer',
      address: {
         line1: '13931 Conner Knoll Parkway',
         city: 'Fishers',
         state: 'IN',
         zip: '46038'
      },
      email: 'fiferdc@gmail.com',
      phone: '(317) 410-5284'
   },
   education: [
      {
         school: 'Purdue University',
         location: 'West Lafayette, IN',
         degrees: [
            {
               level: DegreeLevel.MS,
               subject: 'Computer Science',
               obtained: 'May 2015'
            },
            {
               level: DegreeLevel.BS,
               subject: 'Computer Science Honors and Math',
               obtained: 'May 2014'
            }
         ]
      }
   ],
   experience: [
      {
         company: 'LifeOmic',
         location: 'Indianapolis, IN',
         positions: [
            {
               role: 'Senior Software Engineer',
               start: 'November 2019',
               accomplishments: [
                  'Released a Fitbit version of the LIFE Extend mobile app',
                  'Contributed to open source projects '
               ]
            },
            {
               role: 'Software Engineer',
               start: 'August 2018',
               end: 'November 2019',
               accomplishments: [
                  'Wrapped a JSON transformation library to allow for rapid API transformations into a unified schema',
                  'Introduced HealthKit, Fitbit, and Oura integrations into LIFE Extend',
                  'Utilized AVA/Jest, Jenkins, and Terraform for CI/CD',
                  'Improved local development by mocking AWS services through Docker and localstack'
               ]
            }
         ]
      },
      {
         company: 'Indiana Health Information Exchange (IHIE)',
         location: 'Indianapolis, IN',
         positions: [
            {
               role: 'Solutions Engineer II',
               start: 'March 2017',
               end: 'August 2018',
               accomplishments: [
                  'Enhanced and supported legacy Java web applications.',
                  'Identified and closed security vulnerabilities.',
                  'Introduced code reviews, branching strategies, and other best development practices.',
                  'Created a MIRA-nomiated FHIR application built on HIE data.',
                  'Scripted several bash programs to generate complex audits from Tomcat logs and SQL records.',
                  'Provided technical support and knowledge tranfer for junior developers and contractors.',
                  'Proposed and delivered on a multi-stage pilot delivery to regain pilot user confidence.'
               ]
            }
         ]
      },
      {
         company: 'SapientRazorfish',
         location: 'Dayton, OH',
         positions: [
            {
               role: 'Software Engineer - eCommerce',
               start: 'June 2015',
               end: 'February 2017',
               accomplishments: [
                  'Implemented full-stack REST applications on Spring MVC and hybris.',
                  'Constructed hybris technical specifications from client functional speciifcations for other developers to utilize.',
                  'Tested various levels of functionality iwth JUnit and Mockito on a CI environment.',
                  'Designed front-end pages and components from design documents and UX wireframes.',
                  'Led a training session for the business team and answered questions in the respective client training session.',
                  'Demonstrated end-of-sprint functionality to the client while on-site.',
                  'Resolved technical questions between platform teams.'
               ]
            }
         ]
      },
      {
         company: 'Google',
         location: 'Mountain View, CA',
         positions: [
            {
               role: 'Google Intern',
               start: 'May 2013',
               end: 'August 2013',
               accomplishments: [
                  'Designed performance analysis tools for a rendering engine.',
                  'Generated real-time visualizations of code performance on an external web page.',
                  'Developed an application to auto-insert profiling code based on the structure of existing code.',
                  'Added additional unit tests to ensure a stable build.'
               ]
            }
         ]
      }
   ],
   skills: {
      languages: [
         'Javascript/Typescript',
         'Java',
         'C/C++',
         'Python'
      ],
      platforms: [
         'OS X',
         'Ubuntu',
         'Solaris',
         'Windows'
      ],
      additional: [
         'AWS',
         'Scrum',
         'Git',
         'Spring MVC',
         'Jenkins',
         'OpenGL',
         'Photoshop'
      ]
   }
} as Resume; 