import React from "react";
import ArrayRenderer from "../ArrayRenderer/ArrayRenderer";
import VisualisationSpace from "../VisualisationSpace";

export type IProps = {};

export interface IState {
  data: Array<any>;
  selected: number | null;
}

class BubbleSort extends React.Component<IProps, IState> {
  state: IState = {
    data: [3, 2, 1],
    selected: null,
  };

  render() {
    return (
      <div>
        <VisualisationSpace>
          <ArrayRenderer
            data={this.state.data}
            selected={this.state.selected}
          ></ArrayRenderer>
          <button onClick={this.sort}>Sort</button>
          <button onClick={this.generateRandomArray}>Generate</button>
        </VisualisationSpace>
      </div>
    );
  }

  generateRandomArray = (e: any) => {
    let text: String = e.target.value;

    this.setState({
      data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 55)),
    });
  };

  sort = async () => {
    let sorted = this.state.data;
    for (let i = 0; i < sorted.length; ++i) {
      this.setState({ data: sorted });
      for (let j = 0; j < sorted.length - 1 - i; ++j) {
        this.setState({ selected: j });
        await this.sleep(300);
        if (sorted[j] > sorted[j + 1]) {
          let temp = sorted[j];
          sorted[j] = sorted[j + 1];
          sorted[j + 1] = temp;
        }
      }
    }
    this.setState({ selected: null });
  };

  sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
}

export default BubbleSort;
