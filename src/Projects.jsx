import * as React from "react";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  trippInitemData,
  techStackTrippInBE,
  techStackTrippInFE,
} from "./imageData/trippIn";
import {
  articleItemData,
  techStackArticlesBE,
  techStackArticlesFE,
} from "./imageData/articles";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const handleTripApp = () => {
    const tripAppUrl = "https://github.com/polikas/TripApp";
    window.open(tripAppUrl, "_blank");
  };

  const handleArticlesApp = () => {
    const articlesAppUrl = "https://articles-gallery.netlify.app/";
    window.open(articlesAppUrl, "_blank");
  };

  const handleCalculatorApp = () => {
    const calculatorAppUrl = "https://github.com/polikas/calculator";
    window.open(calculatorAppUrl, "_blank");
  };

  const handleDictionaryApp = () => {
    const dictionaryAppUrl = "https://github.com/polikas/dictionary";
    window.open(dictionaryAppUrl, "_blank");
  };

  const handleSnakeApp = () => {
    const snakeAppUrl = "https://github.com/polikas/snake";
    window.open(snakeAppUrl, "_blank");
  };

  const techStackTripAppBE = () => {
    const listItems = techStackTrippInBE.map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul>{listItems}</ul>;
  };

  const techStackTripAppFE = () => {
    const listItems = techStackTrippInFE.map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul>{listItems}</ul>;
  };

  const techStackArticleBE = () => {
    const listItems = techStackArticlesBE.map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul>{listItems}</ul>;
  };

  const techStackArticleFE = () => {
    const listItems = techStackArticlesFE.map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul>{listItems}</ul>;
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h3" gutterBottom>
          {" "}
          TrippIn
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {trippInitemData.map((item) => (
            <ImageListItem key={item.img}>
              <a href="#" onClick={handleTripApp}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  width={item.width}
                  loading="lazy"
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Tech Stack
        </Typography>
        <Typography>Back-end</Typography>
        {techStackTripAppBE()}
        <Typography>Front-end</Typography>
        {techStackTripAppFE()}
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Project Description
        </Typography>
        <Typography paragraph>
          “Trippin is a mobile app designed for seamless trip planning. Our team
          recognized the challenges of coordinating group trips, where travel
          details are scattered across various platforms like email, Facebook,
          and WhatsApp chats. To address this, we created Trippin—a centralized
          hub where trip members can access all relevant information about their
          upcoming adventures. We prioritized flexibility, allowing admins to
          manage group membership while granting trip members the freedom to
          contribute and update travel, accommodation, and activity choices.
          Additionally, Trippin enables private in-app chats among members,
          ensuring everyone stays connected during their journeys. We’re proud
          to have met a real-world need with our app.”
        </Typography>
        <Typography paragraph>
          Available Source Code on GitHub
          <a
            href="#"
            onClick={handleTripApp}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <GitHubIcon sx={{ fontSize: 40 }} />
          </a>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h3" gutterBottom>
          {" "}
          NC News - Articles
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {articleItemData.map((item) => (
            <ImageListItem key={item.img}>
              <a href="#" onClick={handleArticlesApp}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Tech Stack
        </Typography>
        <Typography>Back-end</Typography>
        {techStackArticleBE()}
        <Typography>Front-end</Typography>
        {techStackArticleFE()}
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Project Description
        </Typography>
        <Typography paragraph>
          A Web App for social news aggregation, where the user can view
          articles, comments, divide article by topics, vote an article and
          add/delete comments to an article. It is using a backend server with a
          list of integrated APIs. The project is focused on functionality and
          not at styling and user experience so much. Technologies used for this
          project React library, JavaScript and MUI Core for styled components.
        </Typography>
        <Typography paragraph>
          some other context maybe images of technologies?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h3" gutterBottom>
          {" "}
          Calculator
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {trippInitemData.map((item) => (
            <ImageListItem key={item.img}>
              <a href="#" onClick={handleCalculatorApp}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  width={item.width}
                  loading="lazy"
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Tech Stack
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Project Description
        </Typography>
        <Typography paragraph>
          “Trippin is a mobile app designed for seamless trip planning. Our team
          recognized the challenges of coordinating group trips, where travel
          details are scattered across various platforms like email, Facebook,
          and WhatsApp chats. To address this, we created Trippin—a centralized
          hub where trip members can access all relevant information about their
          upcoming adventures. We prioritized flexibility, allowing admins to
          manage group membership while granting trip members the freedom to
          contribute and update travel, accommodation, and activity choices.
          Additionally, Trippin enables private in-app chats among members,
          ensuring everyone stays connected during their journeys. We’re proud
          to have met a real-world need with our app.”
        </Typography>
        <Typography paragraph>
          some other context maybe images of technologies? Github source code
          icon with link to the source code?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h3" gutterBottom>
          {" "}
          Dictionary
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {trippInitemData.map((item) => (
            <ImageListItem key={item.img}>
              <a href="#" onClick={handleDictionaryApp}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  width={item.width}
                  loading="lazy"
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Tech Stack
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Project Description
        </Typography>
        <Typography paragraph>
          “Trippin is a mobile app designed for seamless trip planning. Our team
          recognized the challenges of coordinating group trips, where travel
          details are scattered across various platforms like email, Facebook,
          and WhatsApp chats. To address this, we created Trippin—a centralized
          hub where trip members can access all relevant information about their
          upcoming adventures. We prioritized flexibility, allowing admins to
          manage group membership while granting trip members the freedom to
          contribute and update travel, accommodation, and activity choices.
          Additionally, Trippin enables private in-app chats among members,
          ensuring everyone stays connected during their journeys. We’re proud
          to have met a real-world need with our app.”
        </Typography>
        <Typography paragraph>
          some other context maybe images of technologies? Github source code
          icon with link to the source code?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h3" gutterBottom>
          {" "}
          Classic Snake Game
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {trippInitemData.map((item) => (
            <ImageListItem key={item.img}>
              <a href="#" onClick={handleSnakeApp}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  width={item.width}
                  loading="lazy"
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Tech Stack
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4" gutterBottom>
          {" "}
          Project Description
        </Typography>
        <Typography paragraph>
          “Trippin is a mobile app designed for seamless trip planning. Our team
          recognized the challenges of coordinating group trips, where travel
          details are scattered across various platforms like email, Facebook,
          and WhatsApp chats. To address this, we created Trippin—a centralized
          hub where trip members can access all relevant information about their
          upcoming adventures. We prioritized flexibility, allowing admins to
          manage group membership while granting trip members the freedom to
          contribute and update travel, accommodation, and activity choices.
          Additionally, Trippin enables private in-app chats among members,
          ensuring everyone stays connected during their journeys. We’re proud
          to have met a real-world need with our app.”
        </Typography>
        <Typography paragraph>
          some other context maybe images of technologies? Github source code
          icon with link to the source code?
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Projects;
