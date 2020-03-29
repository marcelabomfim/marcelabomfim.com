import React from 'react';
import { useIntl } from 'react-intl';

import StyledContainer from './ThemeSwitcher.styles';

export default ({ handleThemeChange }) => {
  const { formatMessage } = useIntl();

  return <StyledContainer onClick={handleThemeChange} title={formatMessage({ id: 'theme.switch' })} />;
};
