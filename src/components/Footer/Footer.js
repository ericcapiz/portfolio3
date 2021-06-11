import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone #:</LinkTitle>
          <LinkItem>443-307-3937</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email:</LinkTitle>
          <LinkItem>ericcapiz@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"It's Not Just What You Build, It's How You Do It."</Slogan>
        </CompanyContainer>
       <SocialContainer>
        <SocialIcons href="https://github.com/ericcapiz">
       <AiFillGithub size="3rem"/>
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/eric-capiz/">
       <AiFillLinkedin size="3rem"/>
     </SocialIcons>
     </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
