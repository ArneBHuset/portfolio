import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function HolidazeCard() {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="Screenshot auth.png"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            textTransform="uppercase"
            component="div"
          >
            Holidaze
          </Typography>
          <Typography
            variant="body1"
            height="250px"
            sx={{ color: "text.secondary" }}
          >
            Holidaze is a modern website that allows users to book venues and
            villas worldwide. The platform serves both customers, who want to
            book venues, and see upcoming bookings, and venue managers, who can
            list, manage, and edit their venues and bookings. This project was
            developed as part of the Noroff Project Exam 2, using React,
            TypeScript, and Material UI.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://main--flashfinds.netlify.app/">
            Github repo
          </Button>
          <Button size="small" href="https://findmyholidaze.netlify.app/">
            Live site
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
