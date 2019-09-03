import React from 'react'
import {Component} from 'react'
import './styles/BadgesList.css'

class BadgesList extends Component {
    render(){
        return (
        <div className="BadgesList ">
            <ul>
            {this.props.badges.map(badge => {
                return (
                    <li className="BadgesListItem" key={badge.id}>
                        <img className="BadgesListItem__avatar" src="" alt=""/>
                        <p>
                            {badge.firstName} {badge.lastName}
                        </p>
                    </li>
                )
            })}
            </ul>
        </div>
        )}
}

export default BadgesList