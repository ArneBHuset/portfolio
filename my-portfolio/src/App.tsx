import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AuctionableCard from "./components/Auctionable";
import HolidazeCard from "./components/HolidazeCard";
import FlashFindsCard from "./components/FlashfindsCard";
import PortfolioIntro from "./components/PortfolioIntro";

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
      <Grid container spacing={1} mx="auto">
        <Grid size={12} display="flex" justifyContent="center">
          <PortfolioIntro />
        </Grid>
        <Grid size={4}>
          <AuctionableCard />
        </Grid>
        <Grid size={4}>
          <HolidazeCard />
        </Grid>
        <Grid size={4}>
          <FlashFindsCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
