import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

import photo from 'assets/photo.png';

import Skills from 'components/Skills';
import Experience from 'components/Experience';

import StyledContainer from './About.styles';

export default () => {
  const { formatMessage } = useIntl();

  return (
    <StyledContainer id="sobre">
      <div className="container">
        <h1>
          <FormattedMessage id="about.hello" />
        </h1>
        <h2>
          <FormattedMessage id="about.iam" />
        </h2>
        <div className="info">
          <img src={photo} alt={formatMessage({ id: 'about.imgAlt' })} />
          <div className="text" dangerouslySetInnerHTML={{ __html: formatMessage({ id: 'about.text' }) }} />
        </div>
        <Skills />
        <Experience />
      </div>
    </StyledContainer>
  );
};
