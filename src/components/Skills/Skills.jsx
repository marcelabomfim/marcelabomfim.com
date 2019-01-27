import React from 'react';

import Stars from 'components/Stars';
import Tags from 'components/Tags';

import StyledContainer from './Skills.styles';

export default () => (
  <StyledContainer>
    <h3>Habilidades</h3>
    <div>
      <h4>Idiomas</h4>
      <ul className="languages">
        <li>
          <span>Português</span>
          <Stars title="Português" score={5} />
        </li>
        <li>
          <span>Inglês, conversação</span>
          <Stars title="Inglês, conversação" score={2} />
        </li>
        <li>
          <span>Inglês, leitura/escrita</span>
          <Stars title="Inglês, leitura/escrita" score={3} />
        </li>
      </ul>
    </div>
    <div>
      <h4>Sólidos conhecimentos em:</h4>
      <Tags items={['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT.JS', 'REDUX', 'STYLED-COMPONENTS', 'SASS', 'GULP', 'REST APIS', 'GIT', 'NPM SCRIPTS', 'RESPONSIVE DESIGN', 'MOBILE FIRST']} />
    </div>
    <div>
      <h4>Experiência com:</h4>
      <Tags items={['PHP', 'MYSQL', 'NODE.JS', 'VUE.JS', 'UI/UX DESIGN', 'SERVERLESS', 'LAMBDA', 'MONGODB', 'CI/CD', 'AUTOMATED TESTS', 'SEO']} />
    </div>
  </StyledContainer>
);
