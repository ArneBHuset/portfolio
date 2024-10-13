import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FlashFindsCard() {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/Landing page1.png"
          title="Autionable"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            textTransform="uppercase"
            component="div"
          >
            Flashfinds
          </Typography>
          <Typography
            variant="body1"
            height="250px"
            sx={{ color: "text.secondary" }}
          >
            eCOM Website Project eCOM website project for the JS-framework
            course by Noroff, focusing on React. This project aims to create an
            e-commerce store where users can browse products, add them to their
            cart, and check out. The project is build using React, TypeScript,
            and Material UI.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            href="https://github.com/ArneBHuset/ecom-website"
          >
            Github repo
          </Button>
          <Button size="large" href="https://main--flashfinds.netlify.app/">
            Live website
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}
