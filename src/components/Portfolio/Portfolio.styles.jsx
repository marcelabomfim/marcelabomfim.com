import styled from 'styled-components';

export default styled.section`
  padding-top: 100px;

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
    text-align: center;
  }

  .port {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &-item {
      width: 48%;
      height: 0;
      padding-top: 25%;
      display: block;
      position: relative;
      margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
      background-size: cover;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
      transition: box-shadow 0.3s ease;
      overflow: hidden;
      border-radius: 8px;

      &:hover {
        box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.25);

        &:before {
          opacity: 0.95;
        }

        .port-info {
          bottom: 0;
        }
      }

      &:before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: linear-gradient(to top, #000 2%, rgba(0, 0, 0, 0.7) 60%);
        opacity: 0.6;
        transition: opacity 0.3s ease;
      }
    }

    &-info {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      bottom: -70px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: ${({ theme }) => theme.spacing.xlarge};
      transition: bottom 0.3s ease;
      color: ${({ theme }) => theme.colors.light};

      h4,
      p {
        margin: 0;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
      }

      p {
        margin: 0;
        margin-bottom: ${({ theme }) => theme.spacing.large};
      }

      ul {
        margin: ${({ theme }) => theme.spacing.large} 0;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    .container {
      padding: 0 ${({ theme }) => theme.spacing.base};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-top: 80px;

    h1 {
      margin-bottom: ${({ theme }) => theme.spacing.large};
    }

    .port {
      &-item {
        width: 100%;
        padding-top: 52%;
        margin-bottom: ${({ theme }) => theme.spacing.xlarge};
      }

      &-info {
        bottom: 0;
        padding: ${({ theme }) => theme.spacing.base};

        p {
          margin-bottom: ${({ theme }) => theme.spacing.base};
        }
      }
    }
  }
`;
