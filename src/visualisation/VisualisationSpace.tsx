import React from "react";
import { Typography } from "@material-ui/core";
import AlgorithmPlayer from "./Player/AlgorithmPlayer";
import { AnimationCommand } from "../api/AnimationCommand";

export type props = {
  animationCommand: AnimationCommand | undefined;
};

const VisualisationSpace = ({animationCommand}: props) => {
  if (animationCommand !== undefined) {
    return (
      <AlgorithmPlayer
        animationCommand={animationCommand}
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

export default VisualisationSpace;
