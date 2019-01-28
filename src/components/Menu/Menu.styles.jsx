import styled from 'styled-components';

export default styled.nav`
  width: 360px;
  max-width: 80vw;
  height: 100vh;
  display: block;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-400px')};
  z-index: 11;
  transition: 0.5s;
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: 10px 0px 24px rgba(0, 0, 0, 0.25);
  padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.xlarge};
  padding-top: 72px;
  user-select: none;

  button {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: transparent;
    border: 0;
    padding: 0;
    position: fixed;
    top: ${({ theme }) => theme.spacing.large};
    left: ${({ theme }) => theme.spacing.xlarge};
    cursor: pointer;
    outline: none;
    z-index: 2;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(${({ theme }) => theme.spacing.xsmall});
    }

    span {
      position: relative;
      top: 0;
      transition-duration: 0s;
      transition-delay: ${({ isOpen }) => (isOpen ? '0.2s' : '0.2s')};
      background-color: ${({ isOpen, theme }) => (isOpen ? 'rgba(0, 0, 0, 0)' : theme.colors.text)};

      &,
      &:before,
      &:after {
        width: 30px;
        height: 4px;
        display: block;
      }

      &:before,
      &:after {
        content: '';
        position: absolute;
        background-color: ${({ isOpen, theme }) => (isOpen ? theme.colors.light : theme.colors.text)};
        transition-property: margin, transform, background-color;
        transition-duration: 0.2s;
        transition-delay: ${({ isOpen }) => (isOpen ? '0s, 0.2s, 0s' : '0.2s, 0s, 0.2s')};
      }

      &:before {
        margin-top: ${({ isOpen }) => (isOpen ? '0' : '-10px')};
        transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : '')};
      }

      &:after {
        margin-top: ${({ isOpen }) => (isOpen ? '0' : '10px')};
        transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : '')};
      }
    }
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
    overflow: auto;
  }

  ul {
    li {
      position: relative;
      display: block;
      font-size: 1.5em;
      font-weight: ${({ theme }) => theme.font.light};
      line-height: 2em;
      transform: ${({ isOpen }) => (isOpen ? '' : 'translateX(-100%)')};
      opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
      transition-duration: 0.3s;

      &:nth-child(1) {
        transition-delay: ${({ isOpen }) => (isOpen ? '0.20s' : '0')};
      }

      &:nth-child(2) {
        transition-delay: ${({ isOpen }) => (isOpen ? '0.25s' : '0')};
      }

      &:nth-child(3) {
        transition-delay: ${({ isOpen }) => (isOpen ? '0.30s' : '0')};
      }

      &:nth-child(4) {
        display: flex;
        align-items: center;
        margin: ${({ theme }) => theme.spacing.large} 0;
        transition-delay: ${({ isOpen }) => (isOpen ? '0.35s' : '0')};
      }

      &:nth-child(5) {
        transition-delay: ${({ isOpen }) => (isOpen ? '0.40s' : '0')};
      }

      a {
        position: relative;
        cursor: pointer;
        display: block;
        color: ${({ theme }) => theme.colors.light};
        text-decoration: none;
        transition: color 0.3s ease;

        &.active {
          color: ${({ theme }) => theme.colors.secondary};
        }

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      span {
        width: ${({ theme }) => theme.spacing.xlarge};
        height: 1px;
        display: block;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  p {
    font-size: 0.6em;
    color: ${({ theme }) => theme.colors.light};
    font-weight: ${({ theme }) => theme.font.light};
    padding-top: ${({ theme }) => theme.spacing.xlarge};
    margin: 0;
    transform: ${({ isOpen }) => (isOpen ? '' : 'translateX(-100%)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition-duration: 0.3s;
    transition-delay: ${({ isOpen }) => (isOpen ? '0.50s' : '0')};

    strong {
      font-weight: ${({ theme }) => theme.font.bold};
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: ${({ theme }) => theme.spacing.base};
    padding-top: 48px;

    button {
      top: ${({ theme }) => theme.spacing.base};
      left: ${({ theme }) => theme.spacing.base};
    }

    p {
      font-size: 0.8em;
    }
  }
`;
