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

  UNSAFE_componentWillUpdate() {
    console.log("atualizado1");
  }

  componentDidUpdate() {
    console.log("componente counter foi atualizado!!!!!");
  }

  render() {
    console.log("atualizado2");
    return (
      <div>
        <h1>{this.state.contador}</h1>
        <button
          onClick={() => {
            {
              this.setState({ contador: this.state.contador - 1 });
            }
          }}
        >
          diminuir
        </button>
        <button
          onClick={() => {
            {
              this.setState({ contador: this.state.contador + 1 });
            }
          }}
        >
          aumentar
        </button>
      </div>
    );
  }
}

export default Counter;
