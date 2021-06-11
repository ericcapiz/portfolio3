import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>My name is Eric, based in the Chicagoland area, I'm a Freelance Web Developer.</SectionTitle>
      <Button onClick={()=> window.location = "mailto:ericcapiz@gmail.com"}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;