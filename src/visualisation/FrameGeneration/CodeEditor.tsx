import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/theme-nord_dark";
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
  onCodeChanged: (code: string) => void;
  code: string;
};

const CodeEditor = (props: CodeEditorProps) => {
  return (
    <AceEditor
      style={{ borderRadius: "10px", width: "100%", height: "75vh" }}
      placeholder="Placeholder Text"
      mode="javascript"
      theme="nord_dark"
      onChange={(code) => props.onCodeChanged(code)}
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={props.code}
      setOptions={{
        enableSnippets: true,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default CodeEditor;
