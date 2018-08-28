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
    
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    let newItems = this.state.items;
    if (e.target[0].value.length !== 0) {
      newItems.push({name: e.target[0].value, id: this.state.nextId});
      this.setState({
        items: newItems,
        nextId: this.state.nextId + 1
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header className="child-header" />
        <Main className="child-main" 
          items={this.state.items}
          onAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
