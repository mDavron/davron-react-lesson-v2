import React, { Component } from "react";
import "./Counter.css";
class Counter extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: this.props.initialCount || 0
  }

onIncrement = () => {
    this.setState(prev => ({count: prev.count + 1}))
}
onDecrement = () => {
    this.setState(prev => ({count: prev.count - 1}))
}

  render() {
    const {count} = this.state
    return (
      <ul className="counter">
        <li>
          <button onClick={this.onDecrement} disabled={count === 0}>-</button>
        </li>
        <li><b>{count}</b></li>
        <li>
          <button onClick={this.onIncrement} disabled={count === 10}>+</button>
        </li>
      </ul>
    );
  }
}

export default Counter;
