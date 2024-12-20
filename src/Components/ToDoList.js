import { Container, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "./Todo";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
// uuid
import { v4 as uuidv4 } from "uuid";

const initialTodo = [
  {
    id: uuidv4(),
    title: "Task 1",
    description: "Task 1 Description",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Task 2",
    description: "Task 2 Description",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Task 3",
    description: "Task 3 Description",
    isCompleted: false,
  },
];
function ToDoList() {
  const [todo, setTodo] = useState(initialTodo);
  const [titleInput, setTitleInput] = useState("");

  // handel check
  const handleCheckButton = (id) => {
    // every todo has a id and i check on id to know is completed or not
    const updatedTodos = todo.map((t) => {
      if (t.id === id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodo(updatedTodos);
  };
  const handleAddClick = () => {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      description: "",
      isCompleted: false,
    };
    if (newTodo.title === "") return;
    setTodo([...todo, newTodo]);
    setTitleInput("");
  };

  const todoJsx = todo.map((t) => {
    return <Todo key={t.id} todo={t} handleCheck={handleCheckButton} />;
  });
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3"> My Tasks </Typography>
          <Divider />
          {/* filter buttons */}
          <ToggleButtonGroup
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            style={{ marginTop: "20px" }}
          >
            <ToggleButton value="left">All</ToggleButton>
            <ToggleButton value="center">Done</ToggleButton>
            <ToggleButton value="right">Not completed</ToggleButton>
          </ToggleButtonGroup>
          {/* filter buttons */}

          {/* ToDos */}
          {todoJsx}
          {/* ToDos */}

          {/* input + BUTTON */}
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item xs={8}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="New Task"
                variant="outlined"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                style={{ width: "100%", height: "100%" }}
                onClick={() => {
                  handleAddClick();
                }}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
          {/* input + BUTTON */}
        </CardContent>
      </Card>
    </Container>
  );
}

export default ToDoList;
