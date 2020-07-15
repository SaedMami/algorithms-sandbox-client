import React from "react";
import "./App.css";
import AlgorithmPlayer from "./arch/array/AlgorithmPlayer";
import AppHeader from "./AppHeader";
import AlgorithmsMenu from "./AlgorithmsMenu";
import { Grid, Container } from "@material-ui/core";
import { ArrayTracer } from "./arch/array/ArrayTracer";
import { id } from "./arch/util.ts/RandomUtils";
import { CodeBuilder } from "./CodeBuilder";

type AppState = {
  tracer: ArrayTracer | null;
};

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { tracer: null };
  }

  recieveCode = async (code: string) => {
    const tracer = await CodeBuilder.build(code);
    console.log(tracer);
    this.setState({ tracer });
  };

  render() {
    const { tracer } = this.state;
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
              {tracer && (
                <AlgorithmPlayer
                  frames={tracer.getFrames()}
                  rendererType={tracer.getRendererType()}
                  key={id(tracer)}
                ></AlgorithmPlayer>
              )}
            </Grid>

            <Grid item xs={3} style={{ margin: "5em auto" }}>
              <AlgorithmsMenu onBuildCode={this.recieveCode}></AlgorithmsMenu>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
