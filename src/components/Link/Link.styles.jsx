import styled from 'styled-components'

export default styled.a`
  color: #61dafb;
  text-decoration: none;

  &:after {
    content: '';
    width: 0%;
    height: 1px;
    display: block;
    background: #61dafb;
    margin: 0 auto;
    transition: width ease .3s;
  }

  &:hover:after {
    width: 100%;
  }
`;
