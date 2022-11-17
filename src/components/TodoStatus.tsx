import { Alert, Button, Snackbar, Typography } from "@mui/material"
import { useContext, useState } from "react"
import TodoContext from "./context/todo-context"

const TodoStatus = () =>{
    const todoCtx = useContext(TodoContext);
    const [snackOpen, setSnackOpen] = useState(false);
    const deleteAllTodos = () =>{
        todoCtx.setTodoList([]);
        setSnackOpen(true);
    }

    const handleClose= () =>{
        setSnackOpen(false);
    }
    return (
      <div
        style={{
          display: "flex",
          marginTop: "30px",
          justifyContent: "space-between",
          alignItems: "space-between",
        }}
      >
        {todoCtx.todoList.length > 0 && (
          <>
            <Typography variant="subtitle1">
              You have {todoCtx.todoList.length} pending todos
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              sx={{ marginLeft: "20px" }}
              onClick={deleteAllTodos}
            >
              Clear all
            </Button>
          </>
        )}
        <Snackbar
          open={snackOpen}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose}>
            All todos are deleted successfully!
          </Alert>
        </Snackbar>
      </div>
    );
}

export default TodoStatus