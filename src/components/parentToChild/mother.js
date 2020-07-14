import React, { Component } from "react";

class Mother extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.data.modalIsOpen}</h3>
        <button onClick={()=>this.props.data.setModalIsOpen(true)}> mother open</button>
      </div>
    );
  }
}

export default Mother;
