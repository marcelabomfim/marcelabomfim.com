import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import StyledContainer from './LocaleSwitcher.styles';

export default ({ locale, handleLocaleChange }) => {
  const { formatMessage } = useIntl();
  const [open, setOpen] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleChangeAndClose = locale => e => {
    e.preventDefault();
    setOpen(false);
    handleLocaleChange(locale);
  };

  return (
    <StyledContainer open={open}>
      <button title={formatMessage({ id: 'locale.change' })} onClick={handleToggle}>
        {locale}
      </button>
      <ul>
        <li>
          <button onClick={handleChangeAndClose('en')} title={formatMessage({ id: 'locale.toEN' })}>
            <strong>EN</strong> English
          </button>
        </li>
        <li>
          <button onClick={handleChangeAndClose('pt')} title={formatMessage({ id: 'locale.toPT' })}>
            <strong>PT</strong> Português
          </button>
        </li>
      </ul>
    </StyledContainer>
  );
};
