import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function PortfolioIntro() {
  return (
    <Grid
      container
      maxWidth="md"
      display="flex"
      justifyContent="center"
      textAlign="center"
      sx={{ marginTop: "2rem", padding: "2rem" }}
    >
      <Grid size={12}>
        <Typography variant="h3" component="h1">
          ARNE
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant="h4" component="h2">
          WELCOME TO MY PORTFOLIO
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography
          variant="body1"
          sx={{ marginTop: "1rem", textAlign: "left", maxWidth: "500px" }}
        >
          I’m currently studying UX design and frontend development, with a
          passion for creating intuitive and engaging user experiences. My skill
          set includes modern technologies such as TypeScript, JavaScript, MUI,
          React, HTML, CSS, SCSS, YUP, and C# and MudBlazor. I enjoy working on
          projects that combine my design knowledge with technical expertise,
          allowing me to craft solutions that are not only functional but also
          visually appealing.
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          href="https://arnehustveit.myportfolio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </Button>
        <Button
          variant="contained"
          href="https://www.linkedin.com/in/arne-bjelde-hustveit-48ab31276/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
        <Button
          variant="contained"
          href="https://github.com/ArneBHuset"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </Grid>
    </Grid>
  );
}
