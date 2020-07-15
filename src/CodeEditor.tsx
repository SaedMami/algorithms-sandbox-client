import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";

import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
const ace = require("ace-builds/src-noconflict/ace");
ace.config.set(
  "basePath",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
);
ace.config.setModuleUrl(
  "ace/mode/javascript_worker",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js"
);

export type CodeEditorProps = {
  onBuild: (code: string) => Promise<void>;
  initCode: string;
};

const AlgorithmsMenu = (props: CodeEditorProps) => {
  const [code, setCode] = useState(props.initCode);

  return (
    <div>
      <Container maxWidth="sm">
        <AceEditor
          placeholder="Placeholder Text"
          mode="javascript"
          theme="monokai"
          onChange={(code) => setCode(code)}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={props.initCode}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        <Button
          style={{ marginTop: "1em" }}
          variant="contained"
          color="primary"
          startIcon={<BuildIcon />}
          onClick={() => props.onBuild(code)}
        >
          Build
        </Button>
      </Container>
    </div>
  );
};

export default AlgorithmsMenu;
