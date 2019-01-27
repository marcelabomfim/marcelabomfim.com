import React from 'react';

import StyledContainer from './Tags.styles';

export default ({ items }) => (
  <StyledContainer>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </StyledContainer>
);
