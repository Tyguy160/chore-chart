import React, { Component } from 'react';
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Chore Chart</h1>
        </header>
        <p className="App-intro">
          Test
        </p>
        <Container/>
      </div>
    );
  }
}

export default App;
