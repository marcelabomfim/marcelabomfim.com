import styled from 'styled-components';

export default styled.aside`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.large};
  right: ${({ theme }) => theme.spacing.xlarge};
  width: ${({ theme }) => theme.spacing.large};
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    content: '';
    width: 1px;
    height: 100px;
    display: block;
    position: absolute;
    top: -110px;
    left: 11px;
    background: ${({ theme }) => theme.colors.text};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.font.light};
    margin: ${({ theme }) => theme.spacing.base} 0;
    transform: rotate(90deg);
    color: ${({ theme }) => theme.colors.text};
    user-select: none;
  }

  a {
    margin-top: ${({ theme }) => theme.spacing.xsmall};
    transition: transform 0.3s ease;

    svg path {
      fill: ${({ theme }) => theme.colors.text};
      transition: fill 0.3s ease;
    }

    &:hover {
      transform: scale(1.2);

      svg path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    bottom: ${({ theme }) => theme.spacing.base};
    right: ${({ theme }) => theme.spacing.base};

    &:before,
    span {
      display: none;
    }
  }
`;
