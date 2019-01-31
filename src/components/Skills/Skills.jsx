import React from 'react';

import Stars from 'components/Stars';
import Tags from 'components/Tags';

import data from 'assets/data.json';

import StyledContainer from './Skills.styles';

export default () => (
  <StyledContainer>
    <h3>Habilidades</h3>
    <div>
      <h4>Sólidos conhecimentos em:</h4>
      <Tags items={data.skills.solidKnowledge} />
    </div>
    <div>
      <h4>Tenho experiência com:</h4>
      <Tags items={data.skills.experienceWith} />
    </div>
    <div>
      <h4>Nível de Inglês:</h4>
      <ul className="languages">
        {data.skills.english.map(i => (
          <li key={i.title}>
            <span>{i.title}</span>
            <Stars title={i.title} score={i.score} />
          </li>
        ))}
      </ul>
    </div>
  </StyledContainer>
);
