import React from "react";
import style from "./ArrayRenderer.module.css";
import { Icon } from "semantic-ui-react";

export type ArrayPointer = {
  name: string;
  position: number;
};

export type ArrayMarker = {
  color: string;
  selected: Array<number>;
};

export type ArrayRendererProps = {
  data: Array<number>;
  pointers: Array<ArrayPointer>;
  markers: Array<ArrayMarker>;
};

const ArrayRenderer = (props: ArrayRendererProps) => {
  return (
    <table className={style.table}>
      <tbody>
        <tr>
          {props.data.map((e, i) => (
            <td className={style.tdIndex} id={`${i}`}>
              {i}
            </td>
          ))}
        </tr>
        <tr>
          {props.data.map((e, i) => {
            let selectedColor: any = getElementColor(props.markers, i);
            return (
              <td
                style={{ background: selectedColor }}
                className={style.tdElement}
                id={`${i}`}
              >
                {e}
              </td>
            );
          })}
        </tr>
        <tr>
          {props.data.map((e, i) => {
            return (
              <td className={style.tdPointer}>
                {props.pointers.map((p) => {
                  return p.position === i ? <Icon name="arrow up"></Icon> : "";
                })}
              </td>
            );
          })}
        </tr>
        <tr>
          {props.data.map((e, i) => {
            return (
              <td className={style.tdPointer}>
                {props.pointers.map((p) => {
                  return p.position === i ? p.name : "";
                })}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

const getElementColor = (markers: Array<ArrayMarker>, index: number) => {
  // return the first applicable color for the element
  for (let m = 0; m < markers.length; ++m) {
    if (markers[m].selected[index] === 1) {
      return markers[m].color;
    }
  }

  // no marker found for this elements
  return null;
};

export default ArrayRenderer;
