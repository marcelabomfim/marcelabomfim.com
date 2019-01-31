import React from 'react';

import data from 'assets/data.json';

import StyledContainer from './Experience.styles';
import Item from './Experience.Item';

export default () => (
  <StyledContainer>
    <h3>Experiências Profissionais</h3>
    <ul>
      {data.experiences.map((i, key) => (
        <Item key={i.where} data={i} open={key === 0} />
      ))}
    </ul>

    <h3>Formação Acadêmica</h3>
    <ul>
      {data.academic.map((i, key) => (
        <Item key={i.where} data={i} open={key === 0} />
      ))}
    </ul>
  </StyledContainer>
);
