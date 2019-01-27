import styled from 'styled-components';

export default styled.section`
  padding: 100px 0 80px 0;

  .container {
    width: 100%;
    max-width: 1280px;
    display: block;
    margin: 0 auto;
    padding: 0 80px;
  }

  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  }

  .info {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;

    .text {
      padding-right: ${({ theme }) => theme.spacing.xxlarge};
    }

    img {
      max-width: 40%;
      height: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    .container {
      padding: 0 ${({ theme }) => theme.spacing.base};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 80px 0 40px 0;

    h2 {
      margin-bottom: ${({ theme }) => theme.spacing.large};
    }

    .info {
      display: block;

      .text {
        padding-right: 0;
      }

      img {
        float: left;
        margin: 4px 16px 8px 0;
      }
    }
  }
`;
