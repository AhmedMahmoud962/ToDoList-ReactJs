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
import { useState, useContext, useEffect } from "react";
import { TodoContext } from "../Context/TodoContext";
// uuid
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  const { todo, setTodo } = useContext(TodoContext);

  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  // filteration arrays
  const completedTodos = todo.filter((t) => {
    return t.isCompleted;
  });

  const notCompletedTodos = todo.filter((t) => {
    return !t.isCompleted;
  });

  let todosToBeRendered = todo;

  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType == "non-completed") {
    todosToBeRendered = notCompletedTodos;
  } else {
    todosToBeRendered = todo;
  }

  const todosJsx = todosToBeRendered.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });

  useEffect(() => {
    console.log("calling use effect");
    const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodo(storageTodos);
  }, []);

  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value);
  }
  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };

    const updatedTodos = [...todo, newTodo];
    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTitleInput("");
  }
  const todoJsx = todo.map((t) => {
    return (
      <Todo
        key={t.id}
        todoItem={t}
        // onUpdate={handleUpdate}
        // onDelete={handleDelete}
      />
    );
  });

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3"> My Tasks </Typography>
          <Divider />
          {/* filter buttons */}
          <ToggleButtonGroup
            exclusive
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
