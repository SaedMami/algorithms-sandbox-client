import { useState, useEffect } from "react";
import ArrayRenderer from "./ArrayRenderer";
import React from "react";
import { ArrayTracer } from "./ArrayTracer";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import PauseRoundedIcon from "@material-ui/icons/PauseRounded";
import FastRewindRoundedIcon from "@material-ui/icons/FastRewindRounded";
import FastForwardRoundedIcon from "@material-ui/icons/FastForwardRounded";
import { Card, CardContent, IconButton, Grid } from "@material-ui/core";

export type AlgorithmPlayerProps = {
  tracer: ArrayTracer;
};

const AlgorithmPlayer = (props: AlgorithmPlayerProps) => {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const frames = props.tracer.getFrames();

  useEffect(() => {
    if (isPlaying && currentFrame < frames.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentFrame(currentFrame + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsPlaying(false);
    }
  }, [currentFrame, isPlaying, frames.length]);

  const frameToRender = frames[currentFrame];

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Card>
          <CardContent>
            {createRenderer(props.tracer.getRendererType())(frameToRender)}
          </CardContent>
        </Card>
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

const createRenderer = (rendererType: string) => {
  return ArrayRenderer;
};

export default AlgorithmPlayer;
