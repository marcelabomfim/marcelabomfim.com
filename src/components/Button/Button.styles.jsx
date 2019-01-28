import styled from 'styled-components';

export default styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  padding-right: 64px;
  border: 0;
  border-radius: ${({ theme }) => theme.spacing.small};
  font-size: 0.8em;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;

  span {
    width: ${({ theme }) => theme.spacing.base};
    top: 50%;
    right: ${({ theme }) => theme.spacing.large};
    transition: right 0.3s ease;

    &,
    &:before,
    &:after {
      height: 1px;
      display: block;
      background: ${({ theme }) => theme.colors.light};
      position: absolute;
    }

    &:before,
    &:after {
      content: '';
      width: ${({ theme }) => theme.spacing.small};
      right: 0;
    }

    &:before {
      top: -3px;
      transform: rotate(45deg);
    }

    &:after {
      top: 3px;
      transform: rotate(-45deg);
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};

    span {
      right: ${({ theme }) => theme.spacing.base};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.base};
    padding-right: ${({ theme }) => theme.spacing.xxlarge};

    span {
      right: ${({ theme }) => theme.spacing.base};
    }

    &:hover {
      span {
        right: ${({ theme }) => theme.spacing.small};
      }
    }
  }
`;
