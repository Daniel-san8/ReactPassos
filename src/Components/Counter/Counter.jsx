import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    console.log("opa");
  }

  UNSAFE_componentWillMount() {
    console.log("o nosso componente contador será montado");
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button>diminuir</button>
        <button>aumentar</button>
      </div>
    );
  }
}

export default Counter;
