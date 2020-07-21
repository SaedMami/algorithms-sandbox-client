import React, { useState } from "react";
import { Button, Grid, Menu, MenuItem } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import CodeEditor from "./CodeEditor";
import AlgorithmsMenu from "./AlgorithmsMenu";

export type FrameBuilderProps = {
  onBuild: (code: string) => Promise<void>;
};

const initCode = `(
    // A function that returns a tracer object    
    function main() {
      let data = [1,2,3,4,5];
      const tracer = new ArrayTracer(data, "dummy");
      const pointer = tracer.createPointer("p1");
      tracer.capture();
      pointer.point(0);
      tracer.capture();
      return tracer;
    }
  )();`;

const FramesBuilder = (props: FrameBuilderProps) => {
  const [code, setCode] = useState(initCode);

  return (
    <Grid container direction="column" alignItems="stretch" justify="center">
      <Grid item>
        <CodeEditor
          code={code}
          onCodeChanged={(code) => setCode(code)}
        ></CodeEditor>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        style={{ marginTop: "1.5em" }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<BuildIcon />}
          onClick={() => props.onBuild(code)}
        >
          Build
        </Button>
        <AlgorithmsMenu
          onAlgorithmSelected={(code) => setCode(code)}
        ></AlgorithmsMenu>
      </Grid>
    </Grid>
  );
};

export default FramesBuilder;
