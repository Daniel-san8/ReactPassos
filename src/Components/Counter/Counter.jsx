import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    console.log("opa");
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
