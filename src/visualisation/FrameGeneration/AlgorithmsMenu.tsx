import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import {
  bubbleSort,
  selectionSort,
  quickSort,
} from "../../algorithms/ArrayAlgorithms";

export type AlgorithmsMenuProps = {
  onAlgorithmSelected: (code: string) => void;
};

const algorithms = new Map();
algorithms.set("Bubble Sort", bubbleSort);
algorithms.set("Selection Sort", selectionSort);
algorithms.set("Quick Sort", quickSort);

const AlgorithmsMenu = (props: AlgorithmsMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAlgorithmSelected = (code: string) => {
    handleClose();
    props.onAlgorithmSelected(code);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="algorithms-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
        color="primary"
      >
        Select an algorithm
      </Button>
      <Menu
        id="algorithms-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Array.from(algorithms).map(([name, code]) => {
          return (
            <MenuItem key={name} onClick={() => handleAlgorithmSelected(code)}>
              {name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default AlgorithmsMenu;
