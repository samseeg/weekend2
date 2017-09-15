import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar.js';
import List from './components/List';
import Books from './components/Books';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="main_wrapper">
        <header>
          <List />
        </header>

        <div className="add_book">
          <p className="input_text">Type in a book <br/> you would like to read.</p>
          <Searchbar />
          <Button />
        </div>
            <Books/>
            <Books/>
      </div>
    );
  }
}

export default App;
