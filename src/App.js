import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Aot from "./pages/Aot";
import "./App.css";

function App() {
  return (
    <Container fixed>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Quotes
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        style={{
          backgroundColor: "#806491",
          height: "100%",
          padding: 10,
        }}
      >
        <Aot />
      </Grid>
    </Container>
  );
}

export default App;
