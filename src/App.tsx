import React from "react";
import "./App.css";
import AlgorithmPlayer from "./arch/array/AlgorithmPlayer";
import AppHeader from "./AppHeader";
import AlgorithmsMenu from "./AlgorithmsMenu";
import { Grid, Container } from "@material-ui/core";
import { ArrayTracer } from "./arch/array/ArrayTracer";
import { generateRandomArray, id } from "./arch/util.ts/RandomUtils";
import { bubbleSort } from "./arch/array/ArrayAlgorithms";

type AppProps = {
  algorithm: (toSort: number[]) => ArrayTracer;
};

class App extends React.Component<{}, AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = { algorithm: bubbleSort };
  }
  assignTracerAlgo = (algo: (toSort: number[]) => ArrayTracer) => {
    console.log("setting state");
    this.setState({ algorithm: algo });
  };

  render() {
    console.log("render App");
    const toSort = generateRandomArray(5, 50);
    const tracer = this.state.algorithm(toSort);
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
                frames={tracer.getFrames()}
                rendererType={tracer.getRendererType()}
                key={id(tracer)}
              ></AlgorithmPlayer>
            </Grid>

            <Grid item xs={3} style={{ margin: "5em auto" }}>
              <AlgorithmsMenu onBuild={this.assignTracerAlgo}></AlgorithmsMenu>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
