import React, { Component } from 'react';

import bg7 from 'assets/experiences/bg7.jpg';

export default class extends Component {
  state = {
    open: false
  };

  handleToggle = open => e => {
    e.preventDefault();
    this.setState({ open });
  };

  render() {
    const { open } = this.state;

    return (
      <li className={`exp-item ${open ? 'is-open' : ''}`}>
        <div className="exp-flex">
          <img className="exp-img" src={bg7} alt="BG7" />
          <div className="exp-title">
            <h4>
              Desenvolvedora Front-End Líder,{' '}
              <a href="https://www.bg7.com.br/en/" target="_blank" rel="noopener noreferrer">
                BG7
              </a>
            </h4>
            <p>
              <i>Out 2018 - Atual</i>
            </p>
          </div>
        </div>
        <div className="exp-description">
          <p>Desenvolvimento de aplicações web com React e integração de dados com o Back-End via API Rest. Estrutura dos projetos e organização do time front-end.</p>
          <p>
            <strong>Tecnologias e Competências:</strong> HTML5, CSS3, Javascript, React, Redux, Styled-Components, SASS, Node.js, Git, REST API, Cypress E2E Tests.
          </p>
        </div>
        <button className="exp-toggle" onClick={this.handleToggle(!open)} />
      </li>
    );
  }
}
