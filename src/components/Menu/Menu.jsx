import React from 'react';
import { Link } from 'react-scroll';

import StyledContainer from './Menu.styles';

export default ({ isOpen, handleMenuToggle }) => (
  <StyledContainer isOpen={isOpen}>
    <button onClick={handleMenuToggle} title={isOpen ? 'Fechar menu' : 'Abrir menu'}>
      <span />
    </button>
    <div className="flex">
      <ul>
        <li>
          <Link onClick={handleMenuToggle} activeClass="active" to="sobre" spy={true} smooth={true} duration={500}>
            Sobre mim
          </Link>
        </li>
        <li>
          <Link onClick={handleMenuToggle} activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link onClick={handleMenuToggle} activeClass="active" to="contato" spy={true} smooth={true} duration={500}>
            Contato
          </Link>
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
          <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
            GitHub Pages
          </a>
        </strong>
      </p>
    </div>
  </StyledContainer>
);
