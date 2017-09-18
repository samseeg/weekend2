import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Searchbar from './components/Searchbar';
import Books from './components/Books';
import axios from 'axios';

// call class
class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      baseURL: 'http:/localhost:3004'
    }
    this.addToList = this.addToList.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  // methods here
  addToList(item) {
    var copy = this.state.list.slice();
    copy.push(item);
    this.setState({
      list: copy
    })
  }

  componentDidMount() {
    axios.get(this.state.baseURL + '/api/books')
      .then(response => {
        if (response.status === 200) {
          this.setState({
            list: response.data
          })
        }
      })
  }



  // viewing info
  render() {
    return (
      <div className="mainWrapper">
        <List itemList={this.state.list} />
        <div className="mainContent">
          <Searchbar add={this.addToList} />
          <Books />
          <Books />

          {console.log(this.state.list)}
        </div>
      </div>
    );
  }
}

export default App;
