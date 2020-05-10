import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import LandingPage from './pages/Landing';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <Container id="main" fluid>
        <Route exact path="/" component={LandingPage} />
      </Container>
      <GlobalStyle />
    </Router>
  );
}

export default App;
