import { Grid } from "@nextui-org/react";
import React from "react";
import useTask from "../../hooks/useTask";
import ListTask from "./ListTask";
import Search from "./Search";

export default function HomePage() {
  useTask();

  return (
    <div className="App">
      <Grid.Container gap={4} direction="column">
        <Search />
        <ListTask />
        {/* <input type="date" /> */}
      </Grid.Container>
    </div>
  );
}
