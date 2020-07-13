import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Container,
} from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import {
  quickSort,
  bubbleSort,
  selectionSort,
} from "./arch/array/ArrayAlgorithms";

const options = [
  { name: "Bubble Sort", algo: bubbleSort },
  { name: "Quick Sort", algo: quickSort },
  { name: "Selection Sort", algo: selectionSort },
];

const AlgorithmsMenu = (props: any) => {
  const [selected, setSelected] = useState(0);

  const onBuildClicked = () => {
    const algo = options[selected].algo;
    props.onBuild(algo);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <List component="nav" aria-label="main mailbox folders">
          {options.map((option, index) => {
            return (
              <ListItem
                button
                selected={index === selected}
                onClick={() => setSelected(index)}
                key={index}
              >
                <ListItemText primary={option.name} />
              </ListItem>
            );
          })}
          <Divider />
        </List>
        <Button
          style={{ marginTop: "1em" }}
          variant="contained"
          color="primary"
          startIcon={<BuildIcon />}
          onClick={onBuildClicked}
        >
          Build
        </Button>
      </Container>
    </div>
  );
};

export default AlgorithmsMenu;
