import React from "react";
import "./App.css";
import AlgorithmPlayer from "./arch/array/AlgorithmPlayer";
import { bubbleSort } from "./arch/array/ArrayAlgorithms";
import AppHeader from "./AppHeader";
import AlgorithmsMenu from "./AlgorithmsMenu";
import { Grid, Container } from "@material-ui/core";
import { ArrayTracer } from "./arch/array/ArrayTracer";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      tracer: null,
    };
  }
  onBuildClicked = (tracer: ArrayTracer) => {
    this.setState({ tracer: tracer });
  };

  render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <Container>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="stretch"
          >
            <Grid
              container
              justify="center"
              item
              xs={6}
              style={{ margin: "5em auto" }}
            >
              <AlgorithmPlayer
                tracer={bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1])}
              ></AlgorithmPlayer>
            </Grid>

            <Grid item xs={3} style={{ margin: "5em auto" }}>
              <AlgorithmsMenu></AlgorithmsMenu>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
