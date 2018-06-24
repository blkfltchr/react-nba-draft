import React from 'react';
import './Card.css'

const Header = props => {
    return (
    <div>
        <div className="name">{props.name}</div>
            <div className="card-header">
                <div className="team-logo">
                    <div className="team">
                        {props.team}
                    </div>
                    <img src={props.logo} alt="team logo"/>
                </div>
                <div className="player-name">  
                    <div className="draft-info">{props.pick}</div>
                    <div className="draft-info">Position: {props.position}</div>
                    <div className="draft-info">School: {props.school}</div>
                </div>  
            </div>
        
    </div>
    )
}

export default Header;