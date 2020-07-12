import React, { Component } from "react";

import { keys } from "./utility";

class KeyPadComponent extends Component {
  render() {
    return (
      <div className="button">
        {keys.map((key) => (
          <button
            key={key}
            name={key}
            onClick={(event) => this.props.onClick(event.target.name)}
          >
            {key === "*" ? "x" : key === "/" ? "÷" : key}
          </button>
        ))}
      </div>
    );
  }
}

export default KeyPadComponent;
