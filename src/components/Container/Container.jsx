import React from 'react';

import logo from '../../assets/logo.svg';
import Link from '../../components/Link';

import StyledContainer, { Logo, Header } from './Container.styles';

export default ({ children }) => (
  <StyledContainer>
    <Header>
      <Logo src={logo} alt="logo" />
      {children}
      <Link href="https://reactjs.org" label="Learn React" />
    </Header>
  </StyledContainer>
);
