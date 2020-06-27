import React from "react";
import "./VisualisationSpace.css";

class VisualisationSpace extends React.Component {
  render() {
    return <div className="VisualisationSpace">{this.props.children}</div>;
  }
}

export default VisualisationSpace;
