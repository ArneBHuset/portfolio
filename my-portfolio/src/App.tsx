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
        height: "100vh",
        p: 0,
        marginX: "auto",
      }}
    >
      <Grid container spacing={1}>
        <Grid size={12} display="flex" justifyContent="center">
          <PortfolioIntro />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          display="flex"
          justifyContent="center"
        >
          <AuctionableCard />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          display="flex"
          justifyContent="center"
        >
          <HolidazeCard />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          display="flex"
          justifyContent="center"
          mb={4}
        >
          <FlashFindsCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
