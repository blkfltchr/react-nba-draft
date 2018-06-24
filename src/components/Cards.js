import React from 'react';
import Card from './Card';
import './Card.css'

const Cards = props => {
  return (
    <div className="card-wrapper">
      {props.cards.map(card => <Card card={card}/>)}
    </div>
  )
}

export default Cards;