import React, { Component } from 'react'
import {
    Button,
    Col,
    Row,
} from 'reactstrap'

import './landing.scss'

import LoadingComponent from "./../../components/Loading/component"

import { renderExample } from './../../services/example'

class LandingPage extends Component {
    state = {
        loading: true,
        alert: {
            status: false,
            message: '',
            color: ''
        },
        message: ''
    }

    componentDidMount = () => {
        this.renderLP()
    }

    renderLP = () => {
        let self = this
        renderExample()
            .then(response => {
                console.log(response)
                self.setState({
                    loading: false,
                    message: response.data.message
                })
            })
    }

    render() {
        const { loading, message } = this.state

        if (loading) {
            return (
                <LoadingComponent />
            )
        }

        return (
            <>
                <Row className="text-center mt-3 mb-5 p-5">
                    <Col xs="12" className="text-center">
                        <div className="border m-2 rounded p-5">
                            {message}
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default LandingPage