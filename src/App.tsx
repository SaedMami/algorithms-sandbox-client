import React, { useState } from "react";
import AppHeader from "./AppHeader";
import { Grid } from "@material-ui/core";
import AnimationCommandComponent from "./visualisation/FrameGeneration/AnimationCommandComponent";
import VisualisationSpace from "./visualisation/VisualisationSpace";
import { AnimationCommand } from "./api/AnimationCommand";

export const App = () => {
  const [animationCommand, setAnimationCommand] = useState<AnimationCommand>();

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
          <VisualisationSpace animationCommand={animationCommand}></VisualisationSpace>
        </Grid>

        <Grid item xs={5}>
          <AnimationCommandComponent setAnimationCommand={setAnimationCommand}></AnimationCommandComponent>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
