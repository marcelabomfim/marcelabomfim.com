import React from 'react';
import { Link } from 'react-scroll';

import StyledContainer from './Menu.styles';

export default ({ isOpen, handleMenuToggle }) => (
  <StyledContainer isOpen={isOpen}>
    <button onClick={handleMenuToggle}>
      <span />
    </button>
    <div className="flex">
      <ul>
        <li>
          <Link activeClass="active" to="sobre" spy={true} smooth={true} duration={500}>
            Sobre mim
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
            Portfólio
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contato" spy={true} smooth={true} duration={500}>
            Contaot
          </Link>
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
