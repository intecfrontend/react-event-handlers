import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.data.modalIsOpen}</h3>
        <button onClick={() => this.props.data.setModalIsOpen(false)}>
          close me in child
        </button>
      </div>
      // onClick={() => this.setModalIsOpen(false)}
    );
  }
}

export default Child;
