import "./App.css";
import ToDoList from "./Components/ToDoList.js";
import { TodoContext } from "./Context/TodoContext.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import MySnackBar from "./Components/MysnakBar.js";
import { ToastProvider } from "./Context/ToastContext.js";
function App() {
  const theme = createTheme({
    typography: {
      // fontFamily: ["Alexandria"],
    },

    palette: {
      primary: {
        main: "#dd2c00",
      },
    },
  });
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

  const [todo, setTodo] = useState(initialTodo);

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#191b1f",
            height: "100vh",
          }}
        >
          
          <TodoContext.Provider value={{ todo, setTodo }}>
            <ToDoList />
          </TodoContext.Provider>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
