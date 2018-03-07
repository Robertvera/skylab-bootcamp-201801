import React, { Component } from 'react';
import './App.css';

import {Route, HashRouter } from 'react-router-dom'
import Tabs from './components/tabs'
import Search from './components/search'
import List from './components/list'
import { usersApi } from './api/api-client'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users : []
    }
  }

fetchUsers = (query) => {
  usersApi.getUsersSearch(query).then(users => this.setState({users: users.data.data}))
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
            <List 
            listOfUsers = {this.state.users}
            />
          )} />
        
        </div>
      </HashRouter>
        
      </div>
    );
  }
}

export default App;
