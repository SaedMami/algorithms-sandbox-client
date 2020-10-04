import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import CodeEditor from "./CodeEditor";
import AlgorithmsMenu from "./AlgorithmsMenu";
import { CodeBuilder } from "../../api/CodeBuilder";
import { AnimationCommand } from "../../api/AnimationCommand";

export type props = {
  setAnimationCommand: (command: AnimationCommand) => void;
};

const initCode = `(
    // A function that returns a tracer object    
    function main() {
      let data = [1,2,3,4,5];
      const tracer = new ArrayTracer(data, "array");
      const pointer = tracer.createPointerControl("p1");
      tracer.capture();
      pointer.point(0);
      tracer.capture();
      return tracer.animationCommand();
    }
  )();`;


const AnimationCommandComponent = ({setAnimationCommand} : props) => {
  const buildCode = async (code: string) => {
    const command = await CodeBuilder.build(code);
    console.log({command})
     setAnimationCommand(command);
  };

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
          onClick={() => buildCode(code)}
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

export default AnimationCommandComponent;
