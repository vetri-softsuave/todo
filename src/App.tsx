import "./App.css";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./components/context/todo-context";
import TodoStatus from "./components/TodoStatus";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Paper className="outer" elevation={2}>
          <Typography variant="h4" className="heading">
            Todo App
          </Typography>
          <NewTodo />
          <TodoList />
          <TodoStatus/>
        </Paper>
      </TodoContextProvider>
    </div>
  );
}

export default App;
