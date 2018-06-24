import React, { Component } from 'react';
import './App.css';
import ContentPage from './components/ContentPage';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ContentPage />
      </div>
    );
  }
}

export default App;
