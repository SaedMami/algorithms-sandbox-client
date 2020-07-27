import React, { useState } from "react";
import AppHeader from "./AppHeader";
import { Grid } from "@material-ui/core";
import { CodeBuilder } from "./visualisation/FrameGeneration/CodeBuilder";
import FramesBuilder from "./visualisation/FrameGeneration/FramesBuilder";
import { Tracer } from "./tracers/Tracer";
import VisualisationSpace from "./visualisation/VisualisationSpace";

export const App = () => {
  const [tracer, setTracer] = useState<Tracer>();

  const recieveCode = async (code: string) => {
    const tracer = await CodeBuilder.build(code);
    setTracer(tracer);
  };

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
          <VisualisationSpace tracer={tracer}></VisualisationSpace>
        </Grid>

        <Grid item xs={5}>
          <FramesBuilder onBuild={recieveCode}></FramesBuilder>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
