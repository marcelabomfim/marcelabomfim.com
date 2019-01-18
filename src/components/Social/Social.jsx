import React from 'react';
import ReactSVG from 'react-svg';

import linkedin from 'assets/linkedin.svg';
import linkedinPNG from 'assets/linkedin.png';
import linkedinPNGWhite from 'assets/linkedin-white.png';
import twitter from 'assets/twitter.svg';
import twitterPNG from 'assets/twitter.png';
import twitterPNGWhite from 'assets/twitter-white.png';
import github from 'assets/github.svg';
import githubPNG from 'assets/github.png';
import githubPNGWhite from 'assets/github-white.png';

import StyledContainer from './Social.styles';

const theme = window.localStorage.getItem('theme');

export default () => (
  <StyledContainer>
    <span>Follow</span>
    <a href="https://www.linkedin.com/in/marcelabomfim" title="Siga-me no Linkedin" target="_blank" rel="noopener noreferrer">
      <ReactSVG className="icon" src={linkedin} fallback={() => <img src={theme === 'light' ? linkedinPNG : linkedinPNGWhite} alt="Linkedin" />} />
    </a>
    <a href="https://twitter.com/cecelabomfim" title="Siga-me no Twitter" target="_blank" rel="noopener noreferrer">
      <ReactSVG className="icon" src={twitter} fallback={() => <img src={theme === 'light' ? twitterPNG : twitterPNGWhite} alt="Twitter" />} />
    </a>
    <a href="https://github.com/marcelabomfim" title="Siga-me no Github" target="_blank" rel="noopener noreferrer">
      <ReactSVG className="icon" src={github} fallback={() => <img src={theme === 'light' ? githubPNG : githubPNGWhite} alt="Github" />} />
    </a>
  </StyledContainer>
);
