import React from "react";
import "./App.css";
import ArrayVisualisation from "./newStructure/visualisation/ArrayVisualisation";
import {
  bubbleSort,
  selectionSort,
  quickSort,
} from "./newStructure/algorthims/ArrayAlgorithms";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <ArrayVisualisation algorthim={bubbleSort}></ArrayVisualisation>
        <br></br>
        <ArrayVisualisation algorthim={selectionSort}></ArrayVisualisation> */}
        <ArrayVisualisation algorthim={quickSort}></ArrayVisualisation>
      </div>
    );
  }
}

export default App;
