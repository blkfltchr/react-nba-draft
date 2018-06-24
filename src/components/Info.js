import React from 'react';
import './Card.css'

const Info = props => {
    return (
        <div className="info-wrapper">
        <div className="card-info">
        <div className="stats">Stats: {props.stats}</div>
        <div className="description">{props.description}</div>
        <div className="comparison">Pro comparison: {props.comparison}</div>
        </div>
        </div>
    )
}

export default Info;