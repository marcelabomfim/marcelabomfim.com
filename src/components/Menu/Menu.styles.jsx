import styled from 'styled-components';

export default styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding-left: ${({ theme }) => theme.spacing.xlarge};
  width: ${({ isOpen }) => (isOpen ? '360px' : '60px')};
  max-width: 82vw;
  height: ${({ isOpen }) => (isOpen ? '100vh' : '60px')};

  &:before {
    content: '';
    width: ${({ isOpen }) => (isOpen ? '360px' : '60px')};
    max-width: 82vw;
    height: ${({ isOpen }) => (isOpen ? '100vh' : '60px')};
    background: ${({ theme, isOpen }) => (isOpen ? theme.colors.dark : theme.colors.text)};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '.05')};
    border-radius: ${({ isOpen }) => (isOpen ? '0%' : '50%')};
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '0px' : '9px')};
    left: ${({ isOpen }) => (isOpen ? '0px' : '17px')};
    box-shadow: 10px 0 24px rgba(0, 0, 0, 0.25);
    transition: 0.25s;
  }

  &:hover:before {
    opacity: ${({ isOpen }) => (isOpen ? '1' : '.15')};
  }

  button {
    width: 60px;
    height: 60px;
    display: block;
    background: transparent;
    border: 0;
    padding: 0;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    position: absolute;
    top: 10px;
    left: 17px;
    cursor: pointer;
    outline: none;
    z-index: 2;

    span {
      position: absolute;
      top: 10px;
      left: 10px;

      &:before,
      &:after {
        content: '';
        width: 40px;
        height: 4px;
        display: block;
        background: ${({ theme }) => theme.colors.primary};
        position: absolute;
        transition: 0.5s;
        top: 14px;
        left: 0;
      }

      &:before {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
      }

      &:after {
        transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
      }
    }
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    min-height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    overflow: auto;
  }

  ul {
    display: table;
    z-index: 1;
    transition: 0.5s;
    padding-top: ${({ theme, isOpen }) => (isOpen ? '3em' : theme.spacing.large)};

    li {
      position: relative;
      display: inline-block;
      float: left;
      clear: both;
      font-size: ${({ isOpen }) => (isOpen ? '1.5em' : '14px')};
      font-weight: ${({ theme }) => theme.font.light};
      letter-spacing: ${({ isOpen }) => (isOpen ? '0' : '-3.2px')};
      height: ${({ isOpen }) => (isOpen ? '2em' : '10px')};
      line-height: ${({ isOpen }) => (isOpen ? '2em' : '10px')};
      white-space: nowrap;
      transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0.2)')};
      transition: 0.5s, opacity ${({ isOpen }) => (isOpen ? '.1s' : '1s')};

      &:nth-child(1) {
        letter-spacing: ${({ isOpen }) => (isOpen ? '0' : '-4px')};
      }

      &:nth-child(2) {
        letter-spacing: ${({ isOpen }) => (isOpen ? '0' : '-3.5px')};
      }

      &:nth-child(n + 4) {
        transition: ${({ isOpen }) => (isOpen ? '.5s' : '0s')};
        letter-spacing: ${({ isOpen }) => (isOpen ? '0' : '-8px')};
        margin-top: ${({ isOpen }) => (isOpen ? '0' : '-10px')};
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
      }

      &:nth-child(4) {
        display: flex;
        align-items: center;
      }

      &:before {
        position: absolute;
        content: '';
        top: 50%;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: ${({ theme, isOpen }) => (isOpen ? theme.colors.light : theme.colors.text)};
        transform: translateY(-50%) scaleY(5);
        transition: 0.5s;
        opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      }

      &:hover a,
      a.active {
        color: ${({ theme }) => theme.colors.primary};
      }

      a {
        position: relative;
        cursor: pointer;
        display: block;
        color: ${({ theme, isOpen }) => (isOpen ? theme.colors.light : theme.colors.dark)};
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
        text-decoration: none;
      }

      span {
        width: ${({ theme }) => theme.spacing.xlarge};
        height: 1px;
        display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  p {
    font-size: ${({ isOpen }) => (isOpen ? '0.6em' : '0')};
    color: ${({ theme }) => theme.colors.light};
    font-weight: ${({ theme }) => theme.font.light};
    padding-right: ${({ theme }) => theme.spacing.xlarge};
    padding-top: ${({ theme, isOpen }) => (isOpen ? theme.spacing.xlarge : 0)};
    padding-bottom: ${({ theme, isOpen }) => (isOpen ? theme.spacing.xlarge : 0)};
    margin: 0;
    transition: ${({ isOpen }) => (isOpen ? '.5s' : '0s')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    margin-left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

    strong {
      font-weight: ${({ theme }) => theme.font.bold};
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-left: ${({ theme }) => theme.spacing.base};

    &:before {
      width: ${({ isOpen }) => (isOpen ? '320px' : '50px')};
      height: ${({ isOpen }) => (isOpen ? '100vh' : '50px')};
      top: ${({ isOpen }) => (isOpen ? '0px' : '7px')};
      left: ${({ isOpen }) => (isOpen ? '0px' : '6px')};
    }

    button {
      width: 50px;
      height: 50px;
      top: ${({ theme }) => theme.spacing.xsmall};
      left: ${({ theme }) => theme.spacing.xsmall};
    }

    button span {
      &:before,
      &:after {
        width: 30px;
        height: 3px;
      }
    }

    ul {
      padding-top: ${({ theme, isOpen }) => (isOpen ? '3em' : theme.spacing.base)};
    }

    p {
      padding-bottom: ${({ theme }) => theme.spacing.base};
    }
  }
`;
