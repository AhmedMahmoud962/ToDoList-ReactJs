import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// icons
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
function Todo() {
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
              task 1
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Details about the task
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
            <IconButton
              className="iconButton"
              aria-label="check"
              style={{
                color: "#8bc34a",
                background: "white",
                border: "2px solid #8bc34a",
              }}
            >
              <CheckIcon />
            </IconButton>
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
