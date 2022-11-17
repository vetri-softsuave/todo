import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TodoList.css";
import React, { useContext, useState } from "react";
import TodoContext from "./context/todo-context";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  const [todoDeleted, setTodoDeleted] = useState(false);

  const deleteTodo = (event: React.MouseEvent<HTMLDivElement>, i: number) => {
    const tempList = todoCtx.todoList.filter((item, index) => index !== i);
    todoCtx.setTodoList(tempList);
    setTodoDeleted(true);
  };

  const handleClose = () => {
    setTodoDeleted(false);
  };
  return (
    <List>
      {todoCtx.todoList.map((item, i) => {
        return (
          <ListItem key={i} className="list-item">
            <ListItemText primary={item} />
            <ListItemButton
              className="remove-btn"
              sx={{
                justifyContent: "flex-end",
                marginLeft: "10px",
                maxWidth: "50px",
                ":hover": {
                  backgroundColor: "#d32f2f",
                  color: "#fff",
                },
              }}
              onClick={(event) => deleteTodo(event, i)}
            >
              <DeleteIcon />
            </ListItemButton>
          </ListItem>
        );
      })}
      <Snackbar
        open={todoDeleted}
        autoHideDuration={2000}
        onClose={handleClose}
        color="success"
      >
        <Alert onClose={handleClose} severity="success">
          Todo Deleted Successfully!
        </Alert>
      </Snackbar>
    </List>
  );
};

export default TodoList;
