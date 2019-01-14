import React from 'react';
import { Link } from 'react-router-dom'

import Container from '../../components/Container';

export default () => (
  <Container>
    <p>
      Hello from Marcela Bomfim! <Link to="/about">Go to about page</Link>
    </p>
    <hr />
    <p>
      Edit <code>src/containers/Home/Home.jsx</code> and save to reload.
    </p>
  </Container>
);
