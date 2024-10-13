import React from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function PortfolioIntro() {
  return (
    <React.Fragment>
      <Grid
        container
        maxWidth="md"
        display="flex"
        justifyContent="center"
        p={2}
        mx="auto"
        sx={{ marginTop: "2rem" }}
      >
        <Grid size={12} textAlign="center">
          <Typography variant="h3">ARNE BJELDE HUSTVEIT</Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="h5" textAlign="center" my={1}>
            WELCOME TO MY PORTFOLIO
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography
            variant="h6"
            height="250px"
            sx={{ marginTop: "1rem", maxWidth: "600px" }}
            display="flex"
            justifyContent="center"
            mx={"auto"}
          >
            A UX design and frontend development student, with a passion for
            creating intuitive and engaging user experiences. My skill set
            includes modern technologies such as TypeScript, JavaScript, MUI,
            React, HTML, CSS, SCSS, C# and MudBlazor. I enjoy working on
            projects that combine my design knowledge with technical expertise.
          </Typography>
        </Grid>
        <Grid
          size={12}
          sx={{
            marginY: "1rem",
            pt: { xs: 4, sm: 0 },
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
            Full Portfolio
          </Button>
          <Button
            variant="contained"
            size="large"
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
    </React.Fragment>
  );
}
