import React from 'react';
import * as ResumeTypes from '../../resumeTypes';
import { PersonalItem, SupportedIconTypes } from './PersonalItem';

type PersonalProps = {
  personal: ResumeTypes.Personal;
}

export const Personal: React.FC<PersonalProps> = ({personal}) => {
  const { address } = personal;
  const streetAddress = address.line1;
  const cityStateZip = `${address.city}, ${address.state} ${address.zip}`;

  return (
    <div className='Personal'>
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <PersonalItem type={SupportedIconTypes.Home}>
            {streetAddress} <br/>
            {cityStateZip}
          </PersonalItem>
          <PersonalItem type={SupportedIconTypes.Email}>
            {personal.email}
          </PersonalItem>
          <PersonalItem type={SupportedIconTypes.Phone}>
            {personal.phone}
          </PersonalItem>
          <PersonalItem type={SupportedIconTypes.Github}>
            {'fiferdc'}
          </PersonalItem>
          <PersonalItem type={SupportedIconTypes.Linkedin}>
            {'fiferdc'}
          </PersonalItem>
      </div>
    </div>
  )
}