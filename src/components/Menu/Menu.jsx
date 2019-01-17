import React from 'react';

import StyledContainer from './Menu.styles';

export default ({ isOpen, handleMenuToggle }) => (
  <StyledContainer isOpen={isOpen}>
    <button onClick={handleMenuToggle}>
      <span />
    </button>
    <div className="flex">
      <ul>
        <li>
          <a href="#sobre">Sobre mim</a>
        </li>
        <li>
          <a href="#portfolio">Portfólio</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
        <li>
          <span />
        </li>
        <li>
          <a href="#curriculo">Currículo</a>
        </li>
      </ul>

      <p>
        Portfolio pessoal de{' '}
        <strong>
          <a href="https://github.com/marcelabomfim/marcelabomfim.github.io" target="_blank" rel="noopener noreferrer">
            código aberto
          </a>
        </strong>{' '}
        feito
        <br />
        com{' '}
        <strong>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </strong>{' '}
        e hospedado no{' '}
        <strong>
          <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
            Netlify
          </a>
        </strong>
      </p>
    </div>
  </StyledContainer>
);
