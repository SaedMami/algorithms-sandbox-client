import React from "react";
import style from "./ArrayRenderer.module.css";
import _ from "lodash";
import {
  ArrayPointerFrame,
  ArrayMarkerFrame,
  ArrayFrame,
} from "../../tracers/array/ArrayFrames";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

type props = {
  frame: ArrayFrame;
};

const ArrayRenderer = ({ frame }: props) => {
  return (
    <table className={style.table}>
      <tbody>
        {RenderArrayIndecies(frame.data.length)}
        {RenderArrayValues(frame.data, frame.markers)}
        {RenderArrayPointers(frame.data.length, frame.pointers)}
      </tbody>
    </table>
  );
};

const RenderArrayIndecies = (length: number) => {
  return (
    <tr>
      {_.range(0, length).map((i) => (
        <td className={style.tdIndex} key={`${i}`}>
          {i}
        </td>
      ))}
    </tr>
  );
};

const RenderArrayValues = (
  data: Array<number>,
  markers: Map<string, ArrayMarkerFrame>
) => {
  return (
    <tr>
      {data.map((value, i) => {
        let selectedColor: any = getElementColor(markers, i);
        return (
          <td
            style={{ background: selectedColor }}
            className={style.tdElement}
            key={`${i}`}
          >
            {value}
          </td>
        );
      })}
    </tr>
  );
};

const RenderArrayPointers = (
  length: number,
  pointers: Map<string, ArrayPointerFrame>
) => {
  return (
    <React.Fragment>
      <tr>
        {_.range(0, length).map((i) => {
          return (
            <td className={style.tdPointer} key={i}>
              {Array.from(pointers).map(([key, pointer]) =>
                pointer.position === i ? (
                  <ArrowUpwardIcon key={key} fontSize="small" />
                ) : (
                  ""
                )
              )}
            </td>
          );
        })}
      </tr>
      <tr>
        {_.range(0, length).map((e, i) => {
          return (
            <td className={style.tdPointer} key={`${i}`}>
              {Array.from(pointers).map(([key, pointer]) =>
                pointer.position === i ? key + " " : ""
              )}
            </td>
          );
        })}
      </tr>
    </React.Fragment>
  );
};

const getElementColor = (
  markers: Map<string, ArrayMarkerFrame>,
  index: number
) => {
  // return the first applicable color for the element
  const it = markers.values();
  let marker = it.next();
  while (!marker.done) {
    if (marker.value.selected[index] === 1) {
      return marker.value.color;
    }
    marker = it.next();
  }

  // no marker found for this elements
  return null;
};

export default ArrayRenderer;
