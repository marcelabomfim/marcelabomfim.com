import React from 'react';
import ReactSVG from 'react-svg';
import Plx from 'react-plx';
import { Link } from 'react-scroll';

import logo from 'assets/logo.svg';
import logoPNG from 'assets/logo.png';

import StyledContainer from './Hero.styles';

export default () => (
  <StyledContainer id="home">
    <Plx className="plx-logo" parallaxData={plxDataLogo}>
      <Link to="home" spy={true} smooth={true} duration={500} title="Marcela Bomfim">
        <ReactSVG className="logo" src={logo} loading={() => <span>{`<M/>`}</span>} fallback={() => <img src={logoPNG} alt="Marcela Bomfim" />} />
      </Link>
    </Plx>
    <Plx className="plx-title" parallaxData={plxDataTitle}>
      <h1>Marcela Bomfim</h1>
      <h4>Desenvolvedora Front-End</h4>
    </Plx>
  </StyledContainer>
);

const plxDataLogo = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 50,
        endValue: 0,
        property: 'top',
        unit: '%'
      },
      {
        startValue: -91,
        endValue: 9,
        property: 'margin-top'
      }
    ]
  },
  {
    start: 250,
    duration: 200,
    properties: [
      {
        startValue: 1,
        endValue: 0.5,
        property: 'scale'
      }
    ]
  }
];

const plxDataTitle = [
  {
    start: 50,
    end: 400,
    properties: [
      {
        startValue: 50,
        endValue: 10,
        property: 'top',
        unit: '%'
      }
    ]
  },
  {
    start: 350,
    duration: 200,
    properties: [
      {
        startValue: 15,
        endValue: -120,
        property: 'margin-top'
      },
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity'
      }
    ]
  }
];
