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
        border={"1px solid black"}
        borderRadius={4}
        p={1}
        mx="auto"
        sx={{ marginTop: "2rem" }}
      >
        <Grid size={12} textAlign="center">
          <Typography variant="h3" mr={{ xs: 0, sm: 8 }}>
            ARNE BJELDE HUSTVEIT
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography
            variant="h5"
            textAlign="left"
            mx="auto"
            my={1}
            sx={{
              marginTop: "2rem",
              maxWidth: "600px",
              textDecoration: "underline",
            }}
          >
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
            As a UX-design and frontend development student, i am currently
            learning to create intuitive and engaging user experiences. My skill
            set includes modern technologies such as TypeScript, JavaScript,
            MUI, React, HTML, CSS, SCSS, C# and MudBlazor. I enjoy working on
            projects that combine my design knowledge with technical expertise.
          </Typography>
        </Grid>
        <Grid
          size={12}
          px={{ xs: 0, sm: 16 }}
          marginTop={{ xs: "2rem", sm: "0rem" }}
          pb={2}
          sx={{
            pt: { xs: 4, sm: 0 },
            display: "flex",
            gap: 1,
            justifyContent: "space-evenly",
          }}
        >
          <Button
            variant="contained"
            href="https://arnehustveit.myportfolio.com/"
            target="_blank"
            fullWidth
            rel="noopener noreferrer"
          >
            Full Portfolio
          </Button>
          <Button
            variant="contained"
            size="large"
            fullWidth
            href="https://www.linkedin.com/in/arne-bjelde-hustveit-48ab31276/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            fullWidth
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
