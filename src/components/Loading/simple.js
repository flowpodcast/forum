import React, { Component } from 'react'

class LoadingSimple extends Component {
    render() {
        return (
            <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Carregando Componente</span>
            </div>
        )
    }
}

export default LoadingSimple