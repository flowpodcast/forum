import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {
  Container
} from 'reactstrap'

import './index.scss'

// Components
import LandingPage from './pages/Landing'

function MainController() {

  return (
    <Router>
      <Container id="main" fluid>
        <Route exact path="/" component={LandingPage} />
      </Container>
    </Router>
  )

}

export default MainController
