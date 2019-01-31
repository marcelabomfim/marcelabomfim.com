import React from 'react';

import photo from 'assets/photo.png';
import data from 'assets/data.json';

import Skills from 'components/Skills';
import Experience from 'components/Experience';

import StyledContainer from './About.styles';

export default () => (
  <StyledContainer id="sobre">
    <div className="container">
      <h1>Olá</h1>
      <h2>Eu sou a Marcela Bomfim</h2>
      <div className="info">
        <img src={photo} alt="Prazer, Marcela Bomfim!" />
        <div className="text" dangerouslySetInnerHTML={{ __html: data.about }} />
      </div>
      <Skills />
      <Experience />
    </div>
  </StyledContainer>
);
