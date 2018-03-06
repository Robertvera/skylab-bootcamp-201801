import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, HashRouter } from 'react-router-dom'
import Tabs from './components/tabs'
import Search from './components/search'
import List from './components/list'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users : []
    }
  }

fetchUsers = (query) => {
  console.log(query)
}

  render() {
    return (
      <div className="App">
      <HashRouter>
        <div className="container">
          <Route path="/" render={() => (
            <Tabs />
          )} />
          <Route path="/" render={() => (
            <Search onSubmit={this.fetchUsers}/>
          )} />
          <Route path="/" render={() => (
            <List />
          )} />
        
        </div>
      </HashRouter>
        
      </div>
    );
  }
}

export default App;
