import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  counterClick = () => {
    let { counter } = this.state;
    let { step } = this.props;
    this.setState({ counter: counter + step });  
  };

  render() {
    let { counter } = this.state;
    let { step } = this.props;
    return (
      <div>
        <button onClick={this.counterClick}>Добавить</button>
        <div>При нажатии значение увеличится на {step} раз</div>
        <div>Добавлено {counter}</div>
      </div>
    );
  }
}

export default Counter;
