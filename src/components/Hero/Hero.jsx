import React from 'react';
import ReactSVG from 'react-svg';

import logo from '../../assets/logo.svg';
import logoPNG from '../../assets/logo.png';

import StyledContainer from './Hero.styles';

export default () => (
  <StyledContainer>
    <ReactSVG className="logo" src={logo} loading={() => <span>{`<M/>`}</span>} fallback={() => <img src={logoPNG} alt="Marcela Bomfim" />} />
    <h1>Marcela Bomfim</h1>
    <h4>Desenvolvedora Front-End</h4>
  </StyledContainer>
);
