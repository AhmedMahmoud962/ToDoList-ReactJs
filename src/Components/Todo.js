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
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
function Todo({ todoItem }) {
  const { todo, setTodo } = useContext(TodoContext);
  const [showDeleteModel, setShowDeleteModel] = useState(false);

  // Event Handleres 
  // Handle check
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
  // Event Handleres 
  const HandleDeleteButton = () => {
    setShowDeleteModel(true);
  }
  const handleClose = () => {
    setShowDeleteModel(false);
  }

  // Confirm Delete
  const HandleDeleteConfirm = () => {
    setShowDeleteModel(false);
    const updatedTodos = todo.filter((t) => t.id !== todoItem.id);
    setTodo(updatedTodos);
  }
  // Handle Function calls
  return (
    <>
      {/* Model Delete */}
      <Dialog
        open={showDeleteModel}
        onClose={handleClose} // for close model when click in any place in document
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this task ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can't undo this action unless you have permission to do so and have the required permissions to do so.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>No</Button>
          <Button style={{ color: "red" }} autoFocus onClick={HandleDeleteConfirm}>Yes</Button>
        </DialogActions>
      </Dialog>
      {/* Model Delete */}
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
              {/*  Delete Button */}
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
              {/*  Delete Button */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <ToastContainer />
    </>
  );
}

export default Todo;
