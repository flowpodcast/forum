import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {
  Container
} from 'reactstrap'

import './index.scss'

// Components
import LandingPage from './pages/Landing'

class MainController extends Component {
  render() {
    return (
      <Router>
        <Container id="main" fluid>
          <Route exact path="/" component={LandingPage} />
        </Container>
      </Router>
    )
  }
}

export default MainController
