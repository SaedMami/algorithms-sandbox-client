import React, { useState, useEffect } from "react";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import PauseRoundedIcon from "@material-ui/icons/PauseRounded";
import FastRewindRoundedIcon from "@material-ui/icons/FastRewindRounded";
import FastForwardRoundedIcon from "@material-ui/icons/FastForwardRounded";
import { IconButton, Grid } from "@material-ui/core";
import { makeRenderer } from "./RendererFactory";

type props = {
  frames: Array<any>;
  rendererType: string;
};

const AlgorithmPlayer = ({ frames, rendererType }: props) => {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (isPlaying && currentFrame < frames.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentFrame(currentFrame + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsPlaying(false);
    }
  }, [currentFrame, isPlaying, frames.length]);

  const frameToRender = frames[currentFrame];

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
          }}
        >
          {makeRenderer(rendererType, frameToRender)}
        </div>
      </Grid>

      <Grid item>
        <div>
          <IconButton
            onClick={() => {
              setCurrentFrame(Math.max(0, currentFrame - 1));
            }}
          >
            <FastRewindRoundedIcon />
          </IconButton>
          <IconButton
            aria-label="play/pause"
            onClick={() => {
              if (isPlaying) {
                setIsPlaying(false);
              } else {
                setIsPlaying(true);
                if (currentFrame === frames.length - 1) {
                  setCurrentFrame(0);
                }
              }
            }}
          >
            {isPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
          </IconButton>
          <IconButton
            onClick={() => {
              setCurrentFrame(Math.min(currentFrame + 1, frames.length - 1));
            }}
          >
            <FastForwardRoundedIcon />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default AlgorithmPlayer;
