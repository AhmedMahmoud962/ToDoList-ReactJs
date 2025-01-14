import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TodoContext } from "../Context/TodoContext";

function Todo({ todoItem }) {
  const { todo, setTodo } = useContext(TodoContext);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    title: todoItem.title,
    details: todoItem.description,
  });

  // Event Handlers
  const handleCheckClick = () => {
    const updatedTodos = todo.map((t) => {
      if (t.id === todoItem.id) {
        t.isCompleted = !t.isCompleted;
        toast.success(
          t.isCompleted ? "Task marked as completed!" : "Task marked as incomplete!"
        );
      }
      return t;
    });
    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleUpdateClick = () => {
    setShowUpdateDialog(true);
  };

  const handleDeleteDialogClose = () => {
    setShowDeleteDialog(false);
  };

  const handleUpdateDialogClose = () => {
    setShowUpdateDialog(false);
  };

  const handleDeleteConfirm = () => {
    const updatedTodos = todo.filter((t) => t.id !== todoItem.id);
    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    toast.success("Task deleted successfully!");
    setShowDeleteDialog(false);
  };

  const handleUpdateConfirm = () => {
    if (!updatedTodo.title.trim() || !updatedTodo.details.trim()) {
      toast.error("Both title and description are required!");
      return;
    }

    const updatedTodos = todo.map((t) => {
      if (t.id === todoItem.id) {
        return { ...t, title: updatedTodo.title, description: updatedTodo.details };
      }
      return t;
    });

    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    toast.success("Task updated successfully!");
    setShowUpdateDialog(false);
  };

  return (
    <>
      {/* Delete Dialog */}
      <Dialog
        open={showDeleteDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="delete-dialog-title"
      >
        <DialogTitle id="delete-dialog-title">
          Are you sure you want to delete this task?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} style={{ color: "red" }} autoFocus>
            Yes, Delete it
          </Button>
        </DialogActions>
      </Dialog>

      {/* Update Dialog */}
      <Dialog
        open={showUpdateDialog}
        onClose={handleUpdateDialogClose}
        aria-labelledby="update-dialog-title"
      >
        <DialogTitle id="update-dialog-title">Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            label="Task Title"
            type="text"
            fullWidth
            variant="standard"
            value={updatedTodo.title}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, title: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            id="details"
            label="Task Description"
            type="text"
            fullWidth
            variant="standard"
            value={updatedTodo.details}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, details: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateDialogClose}>Cancel</Button>
          <Button onClick={handleUpdateConfirm} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Task Card */}
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          background: "royalblue",
          color: "white",
          marginTop: "5px",
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h5" sx={{ textAlign: "left" ,  textDecoration: todo.isCompleted ? "line-through" : "none", }}>
                {todoItem.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                {todoItem.description}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <IconButton
                onClick={handleCheckClick}
                aria-label="check"
                style={{
                  color: todoItem.isCompleted ? "white" : "#8bc34a",
                  background: todoItem.isCompleted ? "#8bc34a" : "white",
                  border: "2px solid #8bc34a",
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                onClick={handleUpdateClick}
                aria-label="edit"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "2px solid #1769aa",
                }}
              >
                <ModeEditOutlineOutlinedIcon />
              </IconButton>
              <IconButton
                onClick={handleDeleteClick}
                aria-label="delete"
                style={{
                  color: "#b23c17",
                  background: "white",
                  border: "2px solid #b23c17",
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <ToastContainer />
    </>
  );
}

export default Todo;
