import React from 'react';

import Social from 'components/Social';

import StyledContainer from './Contact.styles';

export default () => (
  <StyledContainer id="contato">
    <div className="container">
      <h1>Entre em Contato</h1>
      <h4>E aí, vamos bater um papo ?</h4>
      <p>
        Você pode entrar em contato comigo através das minhas redes sociais ou enviar um email para <a href="mailto:hi@marcelabomfim.com">hi@marcelabomfim.com</a>, fácil né !?
      </p>

      <Social />
    </div>
  </StyledContainer>
);
