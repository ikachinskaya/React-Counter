import "./App.css";
import { Component } from "react";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  handleChange = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({
      step: Number(value),
    });
  };

  render() {
    const { step } = this.state;
    return (
      <>
        <input
          onChange={this.handleChange}
          type="number"
          value={this.state.value}
        />
        <Counter step={step} />
      </>
    );
  }
}

export default App;
