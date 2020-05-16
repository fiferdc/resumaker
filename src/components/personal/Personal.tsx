import React from 'react';
import * as ResumeTypes from '../../resumeTypes';

type PersonalProps = {
  personal: ResumeTypes.Personal;
}

export const Personal: React.FC<PersonalProps> = ({personal}) => {
  const { address } = personal;
  const streetAddress = address.line1;
  const cityStateZip = `${address.city}, ${address.state} ${address.zip}`;

  return (
    <div className='Personal'>
      <div className='Name'>
        {personal.name}
      </div>
      <div className='twoColumn'>
        <span>
          {streetAddress} <br/>
          {cityStateZip}
        </span>
        <span>
          {personal.email}<br/>
          {personal.phone}
        </span>
      </div>
    </div>
  )
}