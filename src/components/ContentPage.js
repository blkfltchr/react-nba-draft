import React, { Component } from 'react';
import '../App.css';
import { positionData, playerData } from '../data';
import Cards from './Cards';
import './Card.css';
import SearchBar from './SearchBar'
import MockDraft from '../assets/mock_draft_5x2.jpg'

class ContentPage extends Component {

  constructor(){
    super();
    this.state = {
      positions: [],
      cards: [],
      filteredCards: [] 
    };
  }

  componentDidMount(){
    this.setState({ positions: positionData , cards: playerData });
  }

  searchCardsHandler = event => {
    // eslint-disable-next-line
    const cards = this.state.cards.filter(card => {
      if (card.position.includes(event.target.value)) {
        return card;
      }
    });
    this.setState({ filteredCards: cards });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">2018 NBA Draft Recap</h1>
          <p className="App-intro">
            Check out the top 10 picks from this year's NBA draft: the teams, the players, their stats and stories.
          </p>
          <img className="header-image" alt="nba draft prospects" src={MockDraft} />
        </header>
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchCards={this.searchCardsHandler}
        />
        <Cards cards={
          this.state.filteredCards.length > 0
          ? this.state.filteredCards
          : this.state.cards
        }/>
      </div>
    );
  }
}

export default ContentPage;