import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProjectCards() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Fira Code"],
    },
    palette: {
      primary: {
        main: "#3d5634",
      },
      secondary: {
        main: "#507045",
      },
      background: {
        default: "#DFE5DC",
      },
    },
  });

  return (
    <div className="flex gap-7 pt-3 flex-wrap">
      <ThemeProvider theme={theme}>
        <Card
          sx={{ maxWidth: 345 }}
          className="font-code"
          style={{ backgroundColor: "#DFE5DC" }}
        >
          <CardMedia
            // component="img"
            height="140"
            image="././public/trilogy.png"
            alt="trilogy tutoring"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
              fontWeight="bold"
              align="center"
            >
              Trilogy Tutoring
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              A website for a small tutoring startup
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" color="primary">
              <Link
                to="https://github.com/nancywu45/trilogy-tutoring"
                target="_blank"
              >
                <FiGithub />
              </Link>
            </Button>
            <Typography variant="body2" color="text.secondary">
              React.js
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Firebase
            </Typography>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: 345 }}
          className="font-code"
          style={{ backgroundColor: "#DFE5DC" }}
        >
          <CardMedia
            // component="img"
            height="140"
            image=".\assets\tradeez.png"
            alt="tradeez"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
              fontWeight="bold"
              align="center"
            >
              TradeEz
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              A platform to connect everyday people with tradies for everyday
              needs
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" color="primary">
              <Link to="https://github.com/nancywu45/TradeEz" target="_blank">
                <FiGithub />
              </Link>
            </Button>
            <Typography variant="body2" color="text.secondary">
              React.js
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Firebase
            </Typography>
          </CardActions>
        </Card>
        <Card
          sx={{ maxWidth: 345 }}
          className="font-code"
          style={{ backgroundColor: "#DFE5DC" }}
        >
          <CardMedia
            // component="img"
            height="140"
            image="..\assets\musicale.png"
            alt="musicale"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
              fontWeight={"bold"}
              align="center"
            >
              Musicale
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              A spotify-like webapp for searching and saving music
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="medium" color="primary">
              <Link to="" target="_blank">
                <FiGithub />
              </Link>
            </Button> */}
            <Typography variant="body2" color="text.secondary">
              Flask
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Firebase
            </Typography>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div>
  );
}