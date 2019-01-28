import React from 'react';

import StyledContainer from './Portfolio.styles';
import Item from './Item';

export default () => (
  <StyledContainer id="portfolio">
    <div className="container">
      <h1>Portfolio</h1>
      <ul className="port">
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  </StyledContainer>
);
