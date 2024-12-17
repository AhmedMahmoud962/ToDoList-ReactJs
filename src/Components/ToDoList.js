import { Container, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Todo from "./Todo";

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
        </CardContent>
      </Card>
    </Container>
  );
}

export default ToDoList;
