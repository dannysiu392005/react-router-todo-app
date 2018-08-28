import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="child-header" />
        <Main className="child-main" />
      </div>
    );
  }
}

export default App;