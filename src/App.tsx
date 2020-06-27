import React from "react";
import "./App.css";
import BubbleSort from "./Components/sort/BubbleSort";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BubbleSort></BubbleSort>
      </div>
    );
  }
}

export default App;
