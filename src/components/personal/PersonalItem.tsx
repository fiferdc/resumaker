import React from 'react';
import { 
  Home,
  Phone, 
  Email, 
  Github,
  Linkedin
} from 'mdi-material-ui';

export enum SupportedIconTypes {
  Home = 'Home',
  Phone = 'Phone',
  Email = 'Email',
  Github = 'Github',
  Linkedin = 'Linkedin'
}

const getIcon = (type: SupportedIconTypes) => {
  switch (type) {
    case SupportedIconTypes.Home:
      return (<Home />);
    case SupportedIconTypes.Phone:
      return (<Phone />);
    case SupportedIconTypes.Email:
      return (<Email />);
    case SupportedIconTypes.Github:
      return (<Github />);
    case SupportedIconTypes.Linkedin:
      return (<Linkedin />);
    default:
      return;
  }
}

type PersonalItemProps = {
  type: SupportedIconTypes
}

export const PersonalItem: React.FC<PersonalItemProps> = (props) => {
  const icon = getIcon(props.type);
  return (
    <div className='PersonalItem'>{icon}{props.children}</div>
  )
}