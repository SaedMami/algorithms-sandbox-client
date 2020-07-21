import React from "react";
import "./App.css";
import AlgorithmPlayer from "./arch/array/AlgorithmPlayer";
import AppHeader from "./AppHeader";
import { Grid, Typography } from "@material-ui/core";
import { ArrayTracer } from "./arch/array/ArrayTracer";
import { id } from "./arch/util.ts/RandomUtils";
import { CodeBuilder } from "./CodeBuilder";
import FramesBuilder from "./FramesBuilder";

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
    this.setState({ tracer });
  };

  renderAlgorithmPlayer = (tracer: ArrayTracer | null) => {
    if (tracer) {
      return (
        <AlgorithmPlayer
          frames={tracer.getFrames()}
          rendererType={tracer.getRendererType()}
          key={id(tracer)}
        ></AlgorithmPlayer>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#DCDCDC",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <Typography variant="subtitle2" gutterBottom>
            Use the code editor and click "Build" to visualise!
          </Typography>
        </div>
      );
    }
  };

  render() {
    const { tracer } = this.state;
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          style={{ margin: "4em 0", height: "80vh" }}
        >
          <Grid container justify="center" item xs={4}>
            {this.renderAlgorithmPlayer(tracer)}
          </Grid>

          <Grid item xs={5}>
            <FramesBuilder onBuild={this.recieveCode}></FramesBuilder>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
