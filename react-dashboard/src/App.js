import React, { Component } from 'react';
import './App.css';
import Quotes from './components/Quotes';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Quotes />
      </div>
    )
  }
}

export default App;