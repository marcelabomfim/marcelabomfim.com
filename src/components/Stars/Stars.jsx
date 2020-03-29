import React from 'react';
import ReactSVG from 'react-svg';
import { useIntl } from 'react-intl';

import star from 'assets/star.svg';
import starPNG from 'assets/star.png';

import starOn from 'assets/star-on.svg';
import starOnPNG from 'assets/star-on.png';

import StyledContainer from './Stars.styles';

export default ({ score, title }) => {
  const { formatMessage } = useIntl();

  return (
    <StyledContainer>
      {[formatMessage({ id: 'stars.level1' }), formatMessage({ id: 'stars.level2' }), formatMessage({ id: 'stars.level3' }), formatMessage({ id: 'stars.level4' }), formatMessage({ id: 'stars.level5' })].map((i, key) => (
        <li key={`star_${title}_${key}`} title={i}>
          {key < score ? <ReactSVG src={starOn} loading={() => <span>{`★`}</span>} fallback={() => <img src={starOnPNG} alt="Star On" />} /> : <ReactSVG src={star} loading={() => <span>{`☆`}</span>} fallback={() => <img src={starPNG} alt="Star" />} />}
        </li>
      ))}
    </StyledContainer>
  );
};
