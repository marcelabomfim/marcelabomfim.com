import React from 'react';
import ReactSVG from 'react-svg';

import star from 'assets/star.svg';
import starPNG from 'assets/star.png';

import starOn from 'assets/star-on.svg';
import starOnPNG from 'assets/star-on.png';

import StyledContainer from './Stars.styles';

export default ({ score, title }) => (
  <StyledContainer>
    {[1, 2, 3, 4, 5].map(i => (
      <li key={`star_${title}_${i}`}>{i <= score ? <ReactSVG src={starOn} loading={() => <span>{`★`}</span>} fallback={() => <img src={starOnPNG} alt="Star On" />} /> : <ReactSVG src={star} loading={() => <span>{`☆`}</span>} fallback={() => <img src={starPNG} alt="Star" />} />}</li>
    ))}
  </StyledContainer>
);
