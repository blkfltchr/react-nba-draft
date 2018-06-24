import React from 'react';
import ReactPlayer from 'react-player';
import './Card.css'
import Header from './Header'
import Info from './Info'
import styled from 'styled-components'

const TheCard = styled.div`
    border: solid 1px black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin: 10px 20px;
    width: 426px; 
    background-color: rgb(228,1,2,0.5);
    border-radius: 10px
`

class Card extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {}
    }

    render() {
  return (
    <TheCard>
    <Header 
        team={this.props.card.team}
        logo={this.props.card.logo}
        name={this.props.card.name}
        pick={this.props.card.pick}
        position={this.props.card.position}
        school={this.props.card.school}
    />
      <div className="video-wrapper">    
        <ReactPlayer url={this.props.card.video} controls={true} width='100%' height='100%' />
      </div>
      <Info 
        comparison={this.props.card.comparison}
        stats={this.props.card.stats}
        description={this.props.card.description}
      />
    </TheCard> 
  )
}
}

export default Card;