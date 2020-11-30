import "./App.css";
import { Component } from "react";

class Input extends Component {
  state = {
    num: 0,
  };

  func = () => {
    const input = document.getElementById(`${this.props.id}`);
    return input.checked ? this.props.counter() : this.props.minus();
  };

  render() {
    return (
      <div>
        <input type="checkbox" id={this.props.id} onClick={this.func} />
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default Input;
