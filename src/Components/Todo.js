import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// icons
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
function Todo({ todoItem }) {
  const { todo, setTodo } = useContext(TodoContext);
  const handleCheckButton = () => {
    // every todo has a id and i check on id to know is completed or not
    const updatedTodos = todo.map((t) => {
      if (t.id === todoItem.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodo(updatedTodos);
  };
  return (
    <Card
      className="todoCard"
      sx={{
        minWidth: 275,
        background: "royalblue",
        color: " white",
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
          {/* Action buttons */}
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            {/* Check button Action */}
            <IconButton
              onClick={() => {
                handleCheckButton();
              }}
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
            {/* Check button Action */}
            <IconButton
              className="iconButton"
              aria-label="check"
              style={{
                color: "#1769aa",
                background: "white",
                border: "2px solid #1769aa",
              }}
            >
              <ModeEditOutlineOutlinedIcon />
            </IconButton>
            <IconButton
              className="iconButton"
              aria-label="check"
              style={{
                color: "#b23c17",
                background: "white",
                border: "2px solid #b23c17",
              }}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Grid>
          {/* Action buttons */}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Todo;

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import IconButton from "@mui/material/IconButton";
// import CheckIcon from "@mui/icons-material/Check";
// import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import { useContext } from "react";
// import { TodoContext } from "../Context/TodoContext";

// function Todo({ todoItem }) {
//   const { todo, setTodo } = useContext(TodoContext);

//   const handleCheckButton = () => {
//     const updatedTodos = todo.map((t) => {
//       if (t.id === todoItem.id) {
//         return { ...t, isCompleted: !t.isCompleted };
//       }
//       return t;
//     });
//     setTodo(updatedTodos);
//   };

//   const handleDeleteButton = () => {
//     const updatedTodos = todo.filter((t) => t.id !== todoItem.id);
//     setTodo(updatedTodos);
//   };

//   return (
//     <Card
//       className="todoCard"
//       sx={{
//         minWidth: 275,
//         background: todoItem.isCompleted ? "#8bc34a" : "royalblue",
//         color: "white",
//         marginTop: "5px",
//       }}
//     >
//       <CardContent>
//         <Grid container spacing={2}>
//           <Grid item xs={8}>
//             <Typography variant="h5" sx={{ textAlign: "left" }}>
//               {todoItem.title}
//             </Typography>
//             <Typography variant="h6" sx={{ textAlign: "left" }}>
//               {todoItem.description}
//             </Typography>
//           </Grid>
//           <Grid
//             item
//             xs={4}
//             display="flex"
//             justifyContent="space-around"
//             alignItems="center"
//           >
//             {/* Check Button */}
//             <IconButton
//               onClick={handleCheckButton}
//               className="iconButton"
//               aria-label="check"
//               style={{
//                 color: todoItem.isCompleted ? "white" : "#8bc34a",
//                 background: todoItem.isCompleted ? "#8bc34a" : "white",
//                 border: "2px solid #8bc34a",
//               }}
//             >
//               <CheckIcon />
//             </IconButton>
//             {/* Edit Button */}
//             <IconButton
//               className="iconButton"
//               aria-label="edit"
//               style={{
//                 color: "#1769aa",
//                 background: "white",
//                 border: "2px solid #1769aa",
//               }}
//             >
//               <ModeEditOutlineOutlinedIcon />
//             </IconButton>
//             {/* Delete Button */}
//             <IconButton
//               onClick={handleDeleteButton}
//               className="iconButton"
//               aria-label="delete"
//               style={{
//                 color: "#b23c17",
//                 background: "white",
//                 border: "2px solid #b23c17",
//               }}
//             >
//               <DeleteOutlineOutlinedIcon />
//             </IconButton>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }

// export default Todo;
