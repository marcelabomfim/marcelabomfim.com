import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;

  h3 {
    width: 100%;
    margin: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  }

  h4 {
    margin: 0;
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }

  & > div {
    &:first-of-type {
      width: 30%;
    }

    &:not(:first-of-type) {
      width: 35%;
      padding-left: ${({ theme }) => theme.spacing.large};
    }
  }

  .languages {
    & > li {
      font-size: 0.8em;
      margin: ${({ theme }) => theme.spacing.small} 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: ${({ theme }) => theme.spacing.xlarge};

    h3 {
      margin-bottom: ${({ theme }) => theme.spacing.base};
    }

    h4 {
      margin-bottom: ${({ theme }) => theme.spacing.small};
    }

    & > div {
      &:first-of-type,
      &:not(:first-of-type) {
        width: 100%;
        padding-left: 0;
        margin-bottom: ${({ theme }) => theme.spacing.large};
      }
    }

    .languages {
      & > li {
        margin: ${({ theme }) => theme.spacing.xsmall} 0;
      }
    }
  }
`;
