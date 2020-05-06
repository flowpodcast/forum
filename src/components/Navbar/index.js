import React, { Component } from 'react'
import {
    Col,
    Row,
} from 'reactstrap'

import './navbar.scss'

class Navbar extends Component {
    state = {
        loading: true,
        alert: {
            status: false,
            message: '',
            color: ''
        },
        user: null
    }

    componentDidMount = () => {
        this.renderNavbar()
    }

    renderNavbar = () => {
        const { user } = this.props

        if (user) {
            this.setState({
                loading: false
            })
        } else {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { loading } = this.state
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
}

export default Navbar