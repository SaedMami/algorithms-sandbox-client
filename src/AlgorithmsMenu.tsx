import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";

const AlgorithmsMenu = (props: any) => {
  const [selected, setSelected] = useState(0);
  const [code, setCode] = useState("");

  return (
    <div>
      <Container maxWidth="sm">
        {/* <List component="nav" aria-label="main mailbox folders">
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
        </List> */}
        <textarea onChange={(e) => setCode(e.target.value)}></textarea>
        <Button
          style={{ marginTop: "1em" }}
          variant="contained"
          color="primary"
          startIcon={<BuildIcon />}
          onClick={() => props.onBuildCode(code)}
        >
          Build
        </Button>
      </Container>
    </div>
  );
};

export default AlgorithmsMenu;
