import { useState, useEffect } from "react";
import ArrayRenderer from "./ArrayRenderer";
import React from "react";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import PauseRoundedIcon from "@material-ui/icons/PauseRounded";
import FastRewindRoundedIcon from "@material-ui/icons/FastRewindRounded";
import FastForwardRoundedIcon from "@material-ui/icons/FastForwardRounded";
import { Card, CardContent, IconButton, Grid } from "@material-ui/core";
import { ArrayFrame } from "./types/ArrayTypes";

export type AlgorithmPlayerProps = {
  frames: Array<ArrayFrame>;
  rendererType: string;
};

const AlgorithmPlayer = (props: AlgorithmPlayerProps) => {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (isPlaying && currentFrame < props.frames.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentFrame(currentFrame + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsPlaying(false);
    }
  }, [currentFrame, isPlaying, props.frames.length]);

  const frameToRender = props.frames[currentFrame];

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
          {createRenderer(props.rendererType)(frameToRender)}
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
                if (currentFrame === props.frames.length - 1) {
                  setCurrentFrame(0);
                }
              }
            }}
          >
            {isPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
          </IconButton>
          <IconButton
            onClick={() => {
              setCurrentFrame(
                Math.min(currentFrame + 1, props.frames.length - 1)
              );
            }}
          >
            <FastForwardRoundedIcon />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

const createRenderer = (rendererType: string) => {
  return ArrayRenderer;
};

export default AlgorithmPlayer;
