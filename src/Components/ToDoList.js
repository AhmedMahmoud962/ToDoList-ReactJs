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
import { useState, useContext, useEffect, useMemo } from "react";
import { TodoContext } from "../Context/TodoContext";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  // console.log("re rendering ToDoList");
  const { todo, setTodo } = useContext(TodoContext);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  // Filter todos based on completion status
  const completedTodos = useMemo(() => {
    console.log("Filtering completed todos");
    return todo.filter((t) => t.isCompleted);
  }, [todo]);
  const notCompletedTodos = useMemo(() => {
    console.log("Filtering not completed todos");
    return todo.filter((t) => !t.isCompleted);
  }, [todo]);

  // Determine which todos to render
  let todosToBeRendered = todo;
  if (displayedTodosType === "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType === "not-completed") {
    todosToBeRendered = notCompletedTodos;
  }

  const todosJsx = todosToBeRendered.map((t) => (
    <Todo key={t.id} todoItem={t} />
  ));

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodo(storageTodos);
  }, [setTodo]);

  // Handle filter button change
  function changeDisplayedType(e, newType) {
    if (newType !== null) {
      setDisplayedTodosType(newType);
    }
  }

  // Handle adding a new task
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

  return (
    <Container maxWidth="sm">
      <Card
        sx={{ minWidth: 275 }}
        style={{ maxHeight: "90vh", overflow: "auto" }}
      >
        <CardContent>
          <Typography variant="h3"> My Tasks </Typography>
          <Divider />

          {/* Filter buttons */}
          <ToggleButtonGroup
            exclusive
            aria-label="text alignment"
            style={{ marginTop: "20px" }}
            value={displayedTodosType}
            onChange={changeDisplayedType}
            color="primary"
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="completed">Done</ToggleButton>
            <ToggleButton value="not-completed">Not completed</ToggleButton>
          </ToggleButtonGroup>

          {/* Render Todos */}
          {todosJsx}

          {/* Input and Add Button */}
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item xs={8}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="New Task"
                variant="outlined"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                style={{ width: "100%", height: "100%" }}
                onClick={handleAddClick}
                disabled={titleInput.trim().length === 0}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ToDoList;
