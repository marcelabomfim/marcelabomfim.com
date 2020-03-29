import React from 'react';
import { useIntl } from 'react-intl';

import StyledContainer from './Portfolio.styles';
import Item from './Portfolio.Item';

export default () => {
  const { formatMessage } = useIntl();

  return (
    <StyledContainer id="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <ul className="port">
          {JSON.parse(formatMessage({ id: 'portfolio.list' })).map(i => (
            <Item key={i.title} data={i} />
          ))}
        </ul>
      </div>
    </StyledContainer>
  );
};
