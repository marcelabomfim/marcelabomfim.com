import React from 'react';

import data from 'assets/data.json';

import StyledContainer from './Portfolio.styles';
import Item from './Portfolio.Item';

export default () => (
  <StyledContainer id="portfolio">
    <div className="container">
      <h1>Portfolio</h1>
      <ul className="port">
        {data.portfolio.map(i => (
          <Item key={i.title} data={i} />
        ))}
      </ul>
    </div>
  </StyledContainer>
);
