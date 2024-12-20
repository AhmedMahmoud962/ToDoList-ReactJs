import "./App.css";
import ToDoList from "./Components/ToDoList.js";
import { TodoContext } from "./Context/TodoContext.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
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
    <div className="App">
      <TodoContext.Provider value={{ todo, setTodo }}>
        <ToDoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
