import { Component } from "react";
import "./App.css";
import Input from "./Input";

class App extends Component {
  state = {
    num: 0,
  };

  counter = () => {
    this.setState({ num: this.state.num + 1 });
  };

  minus = () => {
    this.setState({ num: this.state.num - 1 });
  };

  render() {
    return (
      <div className="App">
        <Input
          text="Sausages"
          id="1"
          counter={this.counter}
          minus={this.minus}
        />
        <Input text="Beef" id="2" counter={this.counter} minus={this.minus} />
        <Input text="Pork" id="3" counter={this.counter} minus={this.minus} />
        <Input text="Tomato" id="4" counter={this.counter} minus={this.minus} />
        <Input text="Cheese" id="5" counter={this.counter} minus={this.minus} />
        <Input text="Olives" id="6" counter={this.counter} minus={this.minus} />
        {this.state.num > 5 && <p>You can't choose more than 5 items!</p>}
      </div>
    );
  }
}
export default App;
