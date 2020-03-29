import React from 'react';
import { useIntl } from 'react-intl';

import Button from 'components/Button';

export default ({ data }) => {
  const image = require(`assets/portfolio/${data.image}`);
  const { formatMessage } = useIntl();

  return (
    <li className="port-item">
      <span className="port-img" style={{ backgroundImage: `url(${image})` }} />
      <div className="port-info">
        <h4>{data.title}</h4>
        <ul>
          {data.hashtags.map(i => (
            <li key={i}>#{i}</li>
          ))}
        </ul>
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <Button label={formatMessage({ id: 'portfolio.visit' })} />
        </a>
      </div>
    </li>
  );
};
