import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Tribe</h2>
        </div>
          <PostList />
      </div>
    );
  }
}

export default App;
