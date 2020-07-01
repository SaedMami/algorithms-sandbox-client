import React from "react";
import style from "./ArrayRenderer.module.css";

export type ArrayRendererProps = {
  data: Array<number>;
  selected: Array<number>;
  marked: Array<number>;
};

const ArrayRenderer = (props: ArrayRendererProps) => {
  return (
    <table>
      <tbody>
        <tr>
          {props.data.map((e, i) => {
            let c = style.clear;
            let selected = props.selected[i] === 1;
            let marked = props.marked[i] === 1;
            if (selected || marked) {
              if (selected) {
                c = style.selected;
              } else {
                c = style.marked;
              }
            }

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
};

export default ArrayRenderer;
