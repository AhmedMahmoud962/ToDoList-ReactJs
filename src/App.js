import "./App.css";
import ToDoList from "./Components/ToDoList.js";
import { TodoContext } from "./Context/TodoContext.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MySnackBar from "./Components/MysnakBar.js";
import { ToastContext } from "./Context/ToastContext.js";
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
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [todo, setTodo] = useState(initialTodo);
  function HideShowToast( message ) {
    setToastMessage(message);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }
  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{ HideShowToast }}>
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
          <MySnackBar open={open} toastMessage={toastMessage} />
          <TodoContext.Provider value={{ todo, setTodo }}>
            <ToDoList />
          </TodoContext.Provider>
        </div>
      </ToastContext.Provider>
    </ThemeProvider>
  );
}

export default App;
