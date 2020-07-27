import React from "react";
import { Typography } from "@material-ui/core";
import AlgorithmPlayer from "./Player/AlgorithmPlayer";
import { Tracer } from "../tracers/Tracer";
import { id } from "../Utils";

export type props = {
  tracer: Tracer | undefined;
};

const VisualisationSpace = (props: props) => {
  return renderAlgorithmPlayer(props.tracer);
};

const renderAlgorithmPlayer = (tracer: Tracer | undefined) => {
  if (tracer !== undefined) {
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

export default VisualisationSpace;
