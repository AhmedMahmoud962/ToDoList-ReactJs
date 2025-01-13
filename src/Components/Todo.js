import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Model Delete
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
function Todo({ todoItem }) {
  const { todo, setTodo } = useContext(TodoContext);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [showUpdateModel, setShowUpdateModel] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todoItem.title);
  const [editedDescription, setEditedDescription] = useState(
    todoItem.description
  );

  // Event Handlers
  const handleCheckButton = () => {
    const updatedTodos = todo.map((t) => {
      if (t.id === todoItem.id) {
        t.isCompleted = !t.isCompleted;
        toast.success(
          t.isCompleted ? `Task marked as completed!` : `Task not complete!`
        );
      }
      return t;
    });
    setTodo(updatedTodos);
  };

  const HandleDeleteButton = () => {
    setShowDeleteModel(true);
  };

  const handleDeleteDialogClose = () => {
    setShowDeleteModel(false);
  };

  const handleUpdateDialogClose = () => {
    setShowUpdateModel(false);
  };

  const HandleDeleteConfirm = () => {
    setShowDeleteModel(false);
    const updatedTodos = todo.filter((t) => t.id !== todoItem.id);
    if (updatedTodos.length === todo.length) {
      toast.error("Task not deleted!");
    } else {
      toast.success("Task deleted successfully!");
      setTodo(updatedTodos);
    }
  };

  const handleEditButton = () => {
    setEditedTitle(todoItem.title);
    setEditedDescription(todoItem.description);
    setShowUpdateModel(true);
  };

  const handleUpdateConfirm = () => {
    if (!editedTitle.trim() || !editedDescription.trim()) {
      toast.error("Both title and description are required!");
      return;
    }

    const updatedTodos = todo.map((t) => {
      if (t.id === todoItem.id) {
        return {
          ...t,
          title: editedTitle.trim(),
          description: editedDescription.trim(),
        };
      }
      return t;
    });

    setTodo(updatedTodos);
    setShowUpdateModel(false);
    toast.success("Task updated successfully!");
  };

  return (
    <>
      {/* Delete Dialog */}
      <Dialog
        open={showDeleteModel}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can't undo this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>No</Button>
          <Button
            style={{ color: "red" }}
            onClick={HandleDeleteConfirm}
            autoFocus
          >
            Yes, Delete it
          </Button>
        </DialogActions>
      </Dialog>

      {/* Update Dialog */}
      <Dialog
        open={showUpdateModel}
        onClose={handleUpdateDialogClose}
        aria-labelledby="edit-dialog-title"
        aria-describedby="edit-dialog-description"
      >
        <DialogTitle id="edit-dialog-title">Edit Task</DialogTitle>
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
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <TextField
            required
            margin="dense"
            id="description"
            label="Task Description"
            type="text"
            fullWidth
            variant="standard"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
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
              <Typography variant="h5" sx={{ textAlign: "left" }}>
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
                onClick={handleCheckButton}
                className="iconButton"
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
                onClick={handleEditButton}
                className="iconButton"
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
                onClick={HandleDeleteButton}
                className="iconButton"
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
