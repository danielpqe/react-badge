import React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './styles/BadgesList.css'
import Gravatar from './Gravatar'

class BadgesList extends Component {
    render(){
        if(this.props.badges.length===0){
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new
                    </Link>
                </div>
            )
        }
        return (
        <div className="BadgesList ">
            <ul>
            {this.props.badges.map(badge => {
                return (
                    <li className="BadgesListItem" key={badge.id}>
                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                        <Gravatar 
                            className="Badge__avatar"
                            email={badge.email}
                            />
                            {badge.firstName} {badge.lastName}<br/>
                            {badge.twitter}<br/>
                            {badge.jobTitle}
                            </Link>
                    </li>
                )
            })}
            </ul>
        </div>
        )}
}

export default BadgesList