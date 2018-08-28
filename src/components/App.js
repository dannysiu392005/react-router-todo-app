import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      nextId: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Header className="child-header" />
        <Main className="child-main" 
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
