import { Component } from "react";
import "./App.css";
import Input from "./Input";

const ingridients = ["Beef", "Pork", "Cheese", "Tomato", "Olives"];

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
        {ingridients.map((item) => {
          return (
            <Input text={item} counter={this.counter} minus={this.minus} />
          );
        })}
        {this.state.num > 5 && <p>You can't choose more than 5 items!</p>}
      </div>
    );
  }
}
export default App;
