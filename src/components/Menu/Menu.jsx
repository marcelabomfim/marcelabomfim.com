import React from 'react';
import { Link } from 'react-scroll';
import { useIntl, FormattedMessage } from 'react-intl';

import StyledContainer from './Menu.styles';

export default ({ isOpen, handleMenuToggle }) => {
  const { formatMessage } = useIntl();

  return (
    <StyledContainer isOpen={isOpen}>
      <button onClick={handleMenuToggle} title={formatMessage({ id: isOpen ? 'menu.close' : 'menu.open' })}>
        <span />
      </button>
      <div className="flex">
        <ul>
          <li>
            <Link onClick={handleMenuToggle} activeClass="active" to="sobre" spy={true} smooth={true} duration={500}>
              <FormattedMessage id="menu.about" />
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuToggle} activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
              <FormattedMessage id="menu.portfolio" />
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuToggle} activeClass="active" to="contato" spy={true} smooth={true} duration={500}>
              <FormattedMessage id="menu.contact" />
            </Link>
          </li>
        </ul>

        <p>
          <FormattedMessage
            id="menu.message"
            values={{
              a: (...chunks) => (
                <a href="https://github.com/marcelabomfim/marcelabomfim.github.io" target="_blank" rel="noopener noreferrer">
                  {chunks}
                </a>
              )
            }}
          />
        </p>
      </div>
    </StyledContainer>
  );
};
