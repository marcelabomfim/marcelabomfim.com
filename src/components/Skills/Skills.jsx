import React from 'react';
import { FormattedMessage } from 'react-intl';

import Stars from 'components/Stars';
import Tags from 'components/Tags';

import data from 'assets/data.json';

import StyledContainer from './Skills.styles';

export default () => (
  <StyledContainer>
    <h3>
      <FormattedMessage id="skills.title" />
    </h3>
    <div>
      <h4>
        <FormattedMessage id="skills.solid" />
      </h4>
      <Tags items={data.skills.solidKnowledge} />
    </div>
    <div>
      <h4>
        <FormattedMessage id="skills.experience" />
      </h4>
      <Tags items={data.skills.experienceWith} />
    </div>
    <div>
      <h4>
        <FormattedMessage id="skills.english" />
      </h4>
      <ul className="languages">
        {data.skills.english.map(i => (
          <li key={i.title}>
            <span>{i.title}</span>
            <Stars title={i.title} score={i.score} />
          </li>
        ))}
      </ul>
    </div>
  </StyledContainer>
);
