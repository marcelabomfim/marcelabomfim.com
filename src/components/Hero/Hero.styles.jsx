import styled from 'styled-components';

import bg from '../../assets/bg.jpg';

export default styled.header`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background-color: #f3f3f3;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.2;
    z-index: 0;
  }

  & > * {
    z-index: 1;
  }

  h1 {
    font-weight: 700;
    color: #333;
    margin: 0;
    transition: opacity ease 0.3s;
  }

  h4 {
    font-weight: 300;
    font-style: italic;
    color: #333;
    margin: 0;
    transition: opacity ease 0.3s;
  }

  .logo {
    width: 154px;
    height: auto;
    display: block;
    margin: 0 auto 36px auto;
    transform: rotate(0deg) scale(1);
    transition: transform ease 0.5s;

    svg path {
      fill: #333;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    }

    &:hover {
      transform: rotate(-12deg) scale(2.5);

      & + h1,
      & + h1 + h2 {
        opacity: 0.5;
      }
    }

    &:active {
      transform: rotate(-360deg) scale(1);
    }
  }
`;
