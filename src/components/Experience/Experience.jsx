import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

import StyledContainer from './Experience.styles';
import Item from './Experience.Item';

export default () => {
  const { formatMessage } = useIntl();

  return (
    <StyledContainer>
      <h3>
        <FormattedMessage id="experience.title" />
      </h3>
      <ul>
        {JSON.parse(formatMessage({ id: 'experience.experienceList' })).map((i, key) => (
          <Item key={i.where} data={i} open={key === 0} />
        ))}
      </ul>

      <h3>
        <FormattedMessage id="experience.academic" />
      </h3>
      <ul>
        {JSON.parse(formatMessage({ id: 'experience.academicList' })).map((i, key) => (
          <Item key={i.where} data={i} open={key === 0} />
        ))}
      </ul>
    </StyledContainer>
  );
};
