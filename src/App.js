import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Searchbar from './components/Searchbar';
import Books from './components/Books';


class App extends Component {
  constructor() {
    super();
    this.state ={
      list: []
    }
    this.addToList = this.addToList.bind(this);
  }


  addToList(item) {
    var copy = this.state.list.slice();
    copy.push(item);
    this.setState({
      list: copy
    })
  }



  render() {
    return (
      <div className="mainWrapper">
        <List itemList={this.state.list}/>
        <div className="mainContent">
        <Searchbar add={this.addToList}/>
        <Books/>
        <Books/>

    {console.log(this.state.list)}
        </div>
        </div>
    );
  }
}

export default App;
