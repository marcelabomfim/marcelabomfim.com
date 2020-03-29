import React from 'react';
import { FormattedMessage } from 'react-intl';

import Social from 'components/Social';

import StyledContainer from './Contact.styles';

export default () => (
  <StyledContainer id="contato">
    <div className="container">
      <h1>
        <FormattedMessage id="contact.title" />
      </h1>
      <h4>
        <FormattedMessage id="contact.subtitle" />
      </h4>
      <p>
        <FormattedMessage
          id="contact.text"
          values={{
            email: 'hi@marcelabomfim.com',
            a: (...chunks) => <a href="mailto:hi@marcelabomfim.com">{chunks}</a>
          }}
        />
      </p>

      <Social />
    </div>
  </StyledContainer>
);
