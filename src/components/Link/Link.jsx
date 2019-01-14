import React from 'react';

import StyledContainer from './Link.styles';

export default ({ href, label }) => (
  <StyledContainer
    className="Link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </StyledContainer>
);
