import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import LandingPage from 'pages/Landing';
import Posts from 'pages/Posts';
import Login from 'pages/Auth/Login';
import Cadastro from 'pages/Auth/Cadastro';
import GlobalStyle from 'styles/global';

function App() {
	
  return (
    <Router>
      <Container id="main" fluid>
        <Route exact path="/" component={LandingPage} />
		<Route path="/Posts/:titulo" component={Posts} />
		<Route path="/Login" component={Login} />
		<Route path="/Cadastro" component={Cadastro} />
      </Container>
      <GlobalStyle />
    </Router>
  );
}

export default App;


