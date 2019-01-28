import React from 'react';

import Button from 'components/Button';

import codepen from 'assets/portfolio/codepen.jpg';

export default () => (
  <li className="port-item" style={{ backgroundImage: `url(${codepen})` }}>
    <div className="port-info">
      <h4>CodePen</h4>
      <p>Aqui faço alguns testes e também passatempos</p>
      <a href="http://www.codepen.io/cecelabomfim" target="_blank" rel="noopener noreferrer">
        <Button label="Visitar" />
      </a>
    </div>
  </li>
);
