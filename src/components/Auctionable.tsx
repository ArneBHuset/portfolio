import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AuctionableCard() {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="Landing page.png"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            textTransform="uppercase"
            component="div"
          >
            Auctionable
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary" }}
            height="250px"
          >
            This project is an auction website designed to allow users to post
            items for auction and bid on others' items. Utilizing modern web
            technologies, this front-end application provides a seamless user
            experience for auction activities. The project was developed using
            JavaScript, Tailwind CSS, SCSS and PostCSS
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href="https://github.com/ArneBHuset/ArneBHuset.github.io"
          >
            Github repo
          </Button>
          <Button size="small" href="https://arnebhuset.github.io/">
            Live site
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
