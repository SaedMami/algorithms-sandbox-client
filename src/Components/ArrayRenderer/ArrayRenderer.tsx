import React from "react";
import style from "./ArrayRenderer.module.css";

export type IArrayProps = {
  data: Array<any>;
  selected: number | null;
};

class ArrayRenderer extends React.Component<IArrayProps> {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            {this.props.data.map((e, i) => {
              let c =
                this.props.selected === i ? style.selected : style.unselected;
              return (
                <td className={`${style.td} ${c}`} id={`${i}`}>
                  {e}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ArrayRenderer;
