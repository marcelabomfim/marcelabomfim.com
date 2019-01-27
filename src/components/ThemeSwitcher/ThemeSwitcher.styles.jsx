import styled from 'styled-components';

export default styled.button`
  position: fixed;
  top: ${({ theme }) => theme.spacing.large};
  right: ${({ theme }) => theme.spacing.xlarge};
  z-index: 2;
  width: ${({ theme }) => theme.spacing.xlarge};
  height: ${({ theme }) => theme.spacing.xlarge};
  border-radius: 50%;
  background: transparent;
  border: 0;
  box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.text};
  overflow: hidden;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ease;

  &:before {
    content: '';
    width: ${({ theme }) => theme.spacing.xlarge};
    height: 44px;
    display: block;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.text};
    position: absolute;
    top: -6px;
    left: -12px;
  }

  &:hover {
    transform: rotateY(180deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    top: ${({ theme }) => theme.spacing.base};
    right: ${({ theme }) => theme.spacing.base};
  }
`;
