import styled from 'styled-components';

export default styled.ul`
  display: block;
  min-width: 120px;

  li {
    display: inline-block;
    margin-left: ${({ theme }) => theme.spacing.xsmall};
  }

  svg path {
    fill: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    svg,
    img {
      width: ${({ theme }) => theme.spacing.base};
    }
  }
`;
