import styled from 'styled-components'

export default styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  p > a {
    color: inherit;
  }
`;
