import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello from parent",
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Debugging Sample App</h1>
        <ChildComponent message={this.state.message} counter={this.state.counter} />
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    );
  }
}

export default App;
