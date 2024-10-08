import MediaCard from "./components/HolidazeCard";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <MediaCard />
    </Container>
  );
}

export default App;
