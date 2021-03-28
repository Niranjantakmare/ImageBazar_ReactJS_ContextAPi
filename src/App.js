import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import ImageBox from "./containers/imageBox";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <>
      <ImageBox></ImageBox>
      </>
    );
  }
}

export default App;
