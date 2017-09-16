import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Searchbar from './components/Searchbar';
import Books from './components/Books';


class App extends Component {

  render() {
    return (
      <div className="mainWrapper">
        <List/>
        <div className="mainContent">
        <Searchbar/>
        <Books/>
        <Books/>
        </div>
        </div>
    );
  }
}

export default App;
