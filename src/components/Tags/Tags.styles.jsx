import styled from 'styled-components';

export default styled.ul`
  display: block;

  li {
    display: inline-block;
    margin-bottom: ${({ theme }) => theme.spacing.xsmall};
    margin-right: ${({ theme }) => theme.spacing.xsmall};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.spacing.xsmall};
    padding: 2px 4px;
    font-size: 0.6em;
    vertical-align: top;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;
