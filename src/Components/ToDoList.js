import { Container, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "./Todo";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ToDoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3"> My Tasks </Typography>
          <Divider />
          {/* filter buttons */}
          <ToggleButtonGroup
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            style={{ marginTop: "20px" }}
          >
            <ToggleButton value="left">All</ToggleButton>
            <ToggleButton value="center">Done</ToggleButton>
            <ToggleButton value="right">Not completed</ToggleButton>
          </ToggleButtonGroup>
          {/* filter buttons */}

          {/* ToDos */}
          <Todo />
          {/* ToDos */}

          {/* input + BUTTON */}
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item xs={8}>
              <TextField style={{ width: "100%" }}
                id="outlined-basic"
                label="New Task"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" style={{ width: "100%",height:"100%" }}>Add Task</Button>
            </Grid>
          </Grid>
          {/* input + BUTTON */}
        </CardContent>
      </Card>
    </Container>
  );
}

export default ToDoList;
