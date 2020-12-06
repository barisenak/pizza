import "./App.css";
import { Component } from "react";

class Input extends Component {
  state = {
    num: 0,
  };

  func = (event) => {
    return event.target.checked ? this.props.counter() : this.props.minus();
  };

  render() {
    return (
      <div>
        <input type="checkbox" onChange={(event) => this.func(event)} />
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default Input;
