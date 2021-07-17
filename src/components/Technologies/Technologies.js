import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="skills">
    <SectionDivider />
    <br />
    <SectionTitle>My Skills</SectionTitle>
    <SectionText>I have worked with a range of different technologies to further my development skills.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End:</ListTitle>
          <ListParagraph>HTML5/CSS3</ListParagraph>
          <ListParagraph>Javascript</ListParagraph>
          <ListParagraph>React</ListParagraph>
          <ListParagraph>Redux</ListParagraph>
          <ListParagraph>Context API</ListParagraph>
          <ListParagraph>Axios/Fetch</ListParagraph>
          <ListParagraph>HTTP Requests</ListParagraph>
        </ListContainer>
      </ListItem>
      <DiFirebase size=".03rem" />
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End:</ListTitle>
          <ListParagraph>Node</ListParagraph>
          <ListParagraph>Express</ListParagraph>
          <ListParagraph>MongoDb</ListParagraph>
          <ListParagraph>SQL3</ListParagraph>
          <ListParagraph>RESTful API</ListParagraph>
          
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
