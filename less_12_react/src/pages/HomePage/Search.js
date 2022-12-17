import { Button, Grid, Input } from "@nextui-org/react";
import React, { useState } from "react";
import useTask from "../../hooks/useTask";

export default function Search() {
  const [text, setText] = useState("");
  const { onCreate } = useTask();
  return (
    <Grid>
      <Input
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        clearable
        contentRightStyling={false}
        placeholder="Type your message..."
        contentRight={
          <Button
            onClick={() => {
              console.log("Input data::", text);
              if (text) {
                onCreate({ name: text, status: false }, () => {
                  console.log("deleeee");
                  setText("");
                });
              }
            }}
            size="sm"
          >
            submit
          </Button>
        }
        width="500px"
      />
    </Grid>
  );
}
