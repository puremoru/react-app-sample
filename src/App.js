import React, { Component } from 'react';
import './App.css';
import Rect from './React';

class App extends Component {
  render() {
    return <div>
      <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="cyan" />
      <Rect x="150" y="100" w="150" h="150" c="magenta" />
      <Rect x="100" y="150" w="150" h="150" c="black" />
    </div>
  }
}

export default App;
