import { TextField, Button, Stack, Alert, Snackbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./NewTodo.css";
import React, { useContext, useState } from "react";
import TodoContext from "./context/todo-context";

const NewTodo = () => {
  const [enteredTodo, setenteredTodo] = useState("" as string);
  const [todoValid, setTodoValid] = useState(true);
  const [todoAdded, setTodoAdded] = useState(false);
  const todoCtx = useContext(TodoContext);

  const addTodo = () => {
    if (enteredTodo.trim() === "") {
      setTodoValid(false);
      return;
    }

    todoCtx.setTodoList((prev) => {
      return [enteredTodo, ...prev];
    });
    setTodoAdded(true);
    setenteredTodo("");
  };

  const todoInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setenteredTodo(event.target.value);
    setTodoValid(true);
  };

  const handleClose = () => {
    setTodoAdded(false);
  };
  return (
    <Stack className="newtodo" direction={"row"} spacing={2}>
      <TextField
        label="Add New Todo"
        color="secondary"
        className="todo-input"
        margin="normal"
        onChange={todoInputHandler}
        type="text"
        value={enteredTodo}
        helperText={
          !todoValid ? (
            <span className="todo-invalid">*Please enter a valid todo</span>
          ) : (
            ""
          )
        }
      />
      <Button
        color="secondary"
        variant="contained"
        size="medium"
        onClick={addTodo}
      >
        <AddIcon fontSize="large" />
      </Button>
      <Snackbar open={todoAdded} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="success" onClose={handleClose}>
          Todo Added Successfully!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default NewTodo;
