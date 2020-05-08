import React, { useState, useEffect } from 'react'
import {
  Col,
  Row,
} from 'reactstrap'

import './navbar.scss'

function Navbar() {
  const [loading, setLoading] = useState(true)
  const [alert, setAlert] = useState({
    status: false,
    message: '',
    color: ''
  })
  const [user, setUser] = useState(null)

  useEffect(() => {
    if(user) {
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [user])

  return (
    <>
      <Row className="bg-secondary">
        <Col xs="12">
          <div className="p-3">
            <svg height="180" width="180">
              <polygon points="250,60 100,400 400,400" class="triangle" />
                Sorry, your browser does not support inline SVG.
              </svg>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Navbar