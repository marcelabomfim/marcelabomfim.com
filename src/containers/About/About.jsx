import React from 'react';
import { Link } from 'react-router-dom'

import Container from '../../components/Container';

export default () => (
  <Container>
    <p>
      This is the about page! <Link to="/">Back to home page</Link>
    </p>
    <hr />
    <p>
      Edit <code>src/containers/About/About.jsx</code> and save to reload.
    </p>
  </Container>
);
