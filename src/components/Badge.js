import React from 'react'

import confLogo from '../images/badge-header.svg'
import avatar from '../images/avatar.jpeg'
import './styles/Badge.css'

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div >
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={avatar} alt="Avatar"/>
                    <h1>
                        Daniel <br/>Quispe
                    </h1>
                </div>
                <div className="Badge__section-info">
                    <h2>Fullstack Developer</h2>
                    <div>@danielpqe</div>
                </div>
                <div className="Badge__footer">
                    #Conferencia
                </div>
            </div>
        )
    }
}

export default Badge