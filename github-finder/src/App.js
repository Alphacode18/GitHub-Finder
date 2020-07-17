import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Shreyas Kharbanda';
    const loading = false;
    return (
      <div className="app">
        <h1>My App</h1>
        {loading ? <h4>Loading...</h4> : <h1>Hello from {name}</h1>}
      </div>
    );
  }
}

export default App;
