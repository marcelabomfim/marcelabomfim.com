import styled from 'styled-components';

export default styled.div`
  margin-top: 80px;

  h3 {
    margin: 0;
    margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  }

  .exp {
    &-item {
      position: relative;
      padding: ${({ theme }) => theme.spacing.large};
      transition: background 0.3s ease;

      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
      }

      &.is-open {
        background: ${({ theme }) => theme.colors.grayLight};

        .exp {
          &-toggle span {
            transform: rotate(135deg);
          }

          &-description {
            max-height: 999px;
          }
        }
      }
    }

    &-flex {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    &-img {
      width: 120px;
      height: auto;
      display: block;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
      border-radius: ${({ theme }) => theme.spacing.small};
      margin-right: ${({ theme }) => theme.spacing.large};
    }

    &-toggle {
      width: ${({ theme }) => theme.spacing.xxlarge};
      height: ${({ theme }) => theme.spacing.xxlarge};
      position: absolute;
      top: ${({ theme }) => theme.spacing.large};
      right: ${({ theme }) => theme.spacing.large};
      background: transparent;
      border: 0;
      cursor: pointer;
      outline: none;

      span {
        width: ${({ theme }) => theme.spacing.base};
        height: ${({ theme }) => theme.spacing.base};
        display: block;
        border-left: 1px solid ${({ theme }) => theme.colors.text};
        border-bottom: 1px solid ${({ theme }) => theme.colors.text};
        padding: 0;
        transform: rotate(-45deg);
        position: absolute;
        top: ${({ theme }) => theme.spacing.base};
        right: ${({ theme }) => theme.spacing.base};
        transition: transform 0.3s ease;
      }
    }

    &-title {
      min-height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: ${({ theme }) => theme.spacing.xlarge};

      h4,
      p {
        margin: 0;
      }

      a {
        color: ${({ theme }) => theme.colors.primary};
        transition: color 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }

    &-description {
      max-height: 0px;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-top: 20px;

    .exp {
      &-item {
        padding: ${({ theme }) => theme.spacing.base};
      }

      &-img {
        width: 60px;
        border-radius: ${({ theme }) => theme.spacing.xsmall};
        margin-right: ${({ theme }) => theme.spacing.base};
      }

      &-toggle {
        top: ${({ theme }) => theme.spacing.small};
        right: ${({ theme }) => theme.spacing.small};
      }

      &-title {
        min-height: 60px;
      }
    }
  }
`;
