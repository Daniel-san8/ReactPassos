import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
    console.log("construindo classe counter");
  }

  UNSAFE_componentWillMount() {
    console.log("o nosso componente contador será montado");
  }

  componentDidMount() {
    console.log('componente foi montado """check"""');
  }

  render() {
    return (
      <div>
        <h1>{this.state.contador}</h1>
        <button>diminuir</button>
        <button>aumentar</button>
      </div>
    );
  }
}

export default Counter;
