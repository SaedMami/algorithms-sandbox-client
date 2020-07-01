import React from "react";
import { generateRandomArray } from "../util.ts/RandomUtils";
import ArrayRenderer, { ArrayRendererProps } from "../renderers/ArrayRenderer";
import { ArrayAlgorithm } from "../algorthims/ArrayAlgorithms";

const size = 8;
type IState = {
  array: Array<number>;
  selected: Array<number>;
  marked: Array<number>;
  renderer: (props: ArrayRendererProps) => JSX.Element;
};

type IProps = {
  algorthim: ArrayAlgorithm;
};

class ArrayVisualisation extends React.Component<IProps, IState> {
  state: IState = {
    array: generateRandomArray(size, 100),
    selected: new Array(size).fill(0),
    marked: new Array(size).fill(0),
    renderer: ArrayRenderer,
  };

  render() {
    return (
      <div>
        {this.state.renderer({
          data: this.state.array,
          selected: this.state.selected,
          marked: this.state.marked,
        })}
        <button onClick={this.handleGenerate}>generate</button>
        <button onClick={this.handleStart}>start</button>
      </div>
    );
  }

  handleStart = async () => {
    await this.props.algorthim(this.state.array, {
      update: this.update,
      select: this.select,
      deselect: this.deselect,
      mark: this.mark,
      unmark: this.unmark,
    });
    console.log(this.state.selected);
    console.log(this.state.marked);
  };

  handleGenerate = () => {
    this.setState({
      array: generateRandomArray(size, 100),
      selected: new Array(size).fill(0),
      marked: new Array(size).fill(0),
    });
  };

  update = async (data: Array<any>) => {
    this.setState({ array: data });
  };

  select = async (toSelect: number) => {
    let newSelected = { ...this.state.selected };
    newSelected[toSelect] = 1;

    this.setState({ selected: newSelected });
  };

  deselect = async (toSelect: number) => {
    let newSelected = { ...this.state.selected };
    newSelected[toSelect] = 0;

    this.setState({ selected: newSelected });
  };

  mark = async (toMark: number) => {
    let newMarked = { ...this.state.marked };
    newMarked[toMark] = 1;

    this.setState({ marked: newMarked });
  };

  unmark = async (index: number) => {
    let newMarked = { ...this.state.marked };
    newMarked[index] = 0;

    this.setState({ marked: newMarked });
  };
}

export default ArrayVisualisation;
