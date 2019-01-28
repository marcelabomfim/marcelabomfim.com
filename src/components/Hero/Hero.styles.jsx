import styled from 'styled-components';

import bg from 'assets/bg.jpg';

export default styled.header`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;

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
    opacity: 0.2;
    z-index: 0;
  }

  .bar {
    content: '';
    width: 100%;
    height: 80px;
    display: block;
    background: ${({ theme }) => theme.colors.bg};
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.25);
  }

  & > * {
    z-index: 1;
  }

  h1 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    transition: opacity ease 0.3s;
    user-select: none;
  }

  h4 {
    font-weight: 300;
    font-style: italic;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    transition: opacity ease 0.3s;
    user-select: none;
  }

  .logo {
    transform: rotate(0deg) scale(1);
    transition: transform ease 0.5s;

    svg {
      width: 100%;
      height: auto;

      path {
        fill: ${({ theme }) => theme.colors.text};
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      }
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

  .plx-bar {
    opacity: 0;
  }

  .plx-logo {
    width: 154px;
    height: 70px;
    position: fixed;
    top: 50%;
    margin-top: -91px;
    left: 50%;
    margin-left: -77px;
    transform-style: preserve-3d;
  }

  .plx-title {
    width: 100%;
    height: auto;
    position: fixed;
    top: 50%;
    margin-top: 15px;
    left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    .bar {
      height: 62px;
    }

    .plx-logo {
      width: 120px;
      margin-left: -60px;
      padding-top: 40px;

      &.Plx--in-1,
      &.Plx--below {
        transition: padding-top 0.3s ease;
        padding-top: 0;
      }
    }

    .logo {
      margin-top: -15px;
    }
  }
`;
