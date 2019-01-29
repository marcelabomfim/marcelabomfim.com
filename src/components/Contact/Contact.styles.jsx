import styled from 'styled-components';

import Social from 'components/Social/Social.styles';

export default styled.section`
  padding: 100px 0 120px 0;
  text-align: center;

  .container {
    width: 100%;
    max-width: 1280px;
    display: block;
    margin: 0 auto;
    padding: 0 80px;
  }

  h1 {
    font-size: 2.2em;
    margin: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  }

  p {
    max-width: 32em;
    margin: 0 auto;

    a {
      color: ${({ theme }) => theme.colors.primary};

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  ${Social} {
    position: relative;
    bottom: initial;
    right: initial;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacing.xlarge};

    &:before,
    span {
      display: none;
    }

    a {
      margin: ${({ theme }) => theme.spacing.base};
    }

    svg {
      width: ${({ theme }) => theme.spacing.xlarge};
      height: ${({ theme }) => theme.spacing.xlarge};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    .container {
      padding: 0 ${({ theme }) => theme.spacing.base};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 80px 0;

    h1 {
      margin-bottom: ${({ theme }) => theme.spacing.large};
    }

    p {
      max-width: 100%;
    }
  }
`;
