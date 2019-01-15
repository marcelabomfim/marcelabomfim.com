import React from 'react';

import StyledContainer from './ThemeSwitcher.styles';

export default ({ handleThemeChange }) => <StyledContainer onClick={handleThemeChange} title="Trocar tema" />;
