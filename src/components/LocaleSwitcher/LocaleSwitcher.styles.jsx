import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing.large};
  right: 80px;
  z-index: 11;
  font-family: ${({ theme }) => theme.font.family};

  & > button {
    width: auto;
    height: auto;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};
    border: 0;
    cursor: pointer;
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    padding: 7px 10px;
    text-transform: uppercase;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.3s ease;
  }

  ul {
    width: auto;
    height: auto;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};
    padding: 7px 10px;
    position: absolute;
    opacity: ${({ open }) => (open ? '1' : '0')};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    z-index: ${({ open }) => (open ? '1' : '-1')};
    top: ${({ open }) => (open ? '44px' : '10px')};
    right: 0;
    transition: all 0.3s ease;

    &:before {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 8px 8px;
      border-color: transparent transparent ${({ theme }) => theme.colors.text} transparent;
      position: absolute;
      top: -8px;
      right: 12px;
    }

    button {
      margin: 4px 0;
      background: transparent;
      border: 0;
      font-size: 16px;
      line-height: 18px;
      font-weight: light;
      color: ${({ theme }) => theme.colors.bg};
      display: flex;
      cursor: pointer;
      transition: color 0.3s ease;

      strong {
        text-transform: uppercase;
        display: inline-block;
        margin-right: 8px;
        font-weight: bold;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    top: ${({ theme }) => theme.spacing.base};
    right: 60px;
  }
`;
