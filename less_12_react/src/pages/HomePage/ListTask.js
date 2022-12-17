import { Button, Grid, Switch, Table } from "@nextui-org/react";
import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useTask from "../../hooks/useTask";

export default function ListTask() {
  const { data: listTasks } = useContext(AppContext);
  console.log("listTasks::", listTasks);
  const { onDelete, onUpdate } = useTask();

  return (
    <Grid>
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>ID</Table.Column>
          <Table.Column>NAME</Table.Column>
          <Table.Column>STATUS</Table.Column>
          <Table.Column>ACTIONS</Table.Column>
        </Table.Header>
        <Table.Body>
          {listTasks.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item?.id}</Table.Cell>
              <Table.Cell>{item?.name}</Table.Cell>
              <Table.Cell>
                <Switch
                  checked={item?.status}
                  onClick={() => {
                    onUpdate(item?.id, { ...item, status: !item.status });
                  }}
                />
              </Table.Cell>
              <Table.Cell>
                <Button.Group color="gradient" ghost>
                  <Button
                    onClick={() => {
                      onDelete(item?.id);
                    }}
                  >
                    DEL
                  </Button>
                  <Button>UPDATE</Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Grid>
  );
}
