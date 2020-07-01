import React from "react";
import "./App.css";
import ArrayRenderer from "./arch/renderers/ArrayRenderer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ArrayRenderer
          data={[1, 2, 3]}
          pointers={[
            {
              name: "p1",
              position: 2,
            },
            {
              name: "p2",
              position: 0,
            },
          ]}
          markers={[
            { color: "red", selected: [0, 1, 1] },
            { color: "orange", selected: [0, 1, 0] },
          ]}
        ></ArrayRenderer>
      </div>
    );
  }
}

export default App;
