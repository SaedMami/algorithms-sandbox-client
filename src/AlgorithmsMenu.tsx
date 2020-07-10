import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Container,
} from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";

const AlgorithmsMenu = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button selected>
            <ListItemText primary="Bubble Sort" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Quick Sort" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Selection Sort" />
          </ListItem>
          <Divider />
        </List>
        <Button
          style={{ marginTop: "1em" }}
          variant="contained"
          color="primary"
          startIcon={<BuildIcon />}
        >
          Build
        </Button>
      </Container>
    </div>
  );
};

export default AlgorithmsMenu;
