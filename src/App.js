import React, { Component, useState } from "react";
import "./App.css";
import Modal from "react-modal";
import Parent from "./components/parentToChild/child";
import Mother from "./components/parentToChild/mother";
Modal.setAppElement("#root");

class App extends Component {
  constructor() {
    super();
    this.state = { modalIsOpen: false };
  }

  setModalIsOpen(modalIsOp) {
    this.setState({ modalIsOpen: modalIsOp });
  }

  render() {
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
      <div className="App">
        <Mother               data={{
                modalIsOpen: this.state.modalIsOpen,
                setModalIsOpen: (this.setModalIsOpen = this.setModalIsOpen.bind(
                  this
                )),
              }}/>
        <button onClick={() => this.setModalIsOpen(true)}>open</button>

        <Modal isOpen={this.state.modalIsOpen}>
          <div>
            <button>close</button>
            <h2>Modal is open</h2>
            <p>Modal Body</p>
            <Parent
              data={{
                modalIsOpen: this.state.modalIsOpen,
                setModalIsOpen: (this.setModalIsOpen = this.setModalIsOpen.bind(
                  this
                )),
              }}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
