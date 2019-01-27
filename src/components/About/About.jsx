import React from 'react';

import photo from 'assets/photo.png';

import Skills from 'components/Skills';

import StyledContainer from './About.styles';

export default () => (
  <StyledContainer id="sobre">
    <div className="container">
      <h1>Olá</h1>
      <h2>Eu sou a Marcela Bomfim</h2>
      <div className="info">
        <img src={photo} alt="Prazer, Marcela Bomfim!" />
        <div className="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  </StyledContainer>
);
