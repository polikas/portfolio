import * as React from "react";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  trippInitemData,
  techStackTrippInBE,
  techStackTrippInFE,
} from "../imageData/trippIn";
import {
  articleItemData,
  techStackArticlesBE,
  techStackArticlesFE,
} from "../imageData/articles";
import { snakeItemData, techStackSnakeFE } from "../imageData/snake";
import {
  dictionaryItemData,
  techStackDictionaryFE,
} from "../imageData/dictionary";
import {
  calculatorItemData,
  techStackCalculatorFE,
} from "../imageData/calculator";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const handleTripApp = () => {
    const tripAppUrl = "https://github.com/polikas/TripApp";
    window.open(tripAppUrl, "_blank");
  };

  const handleArticlesApp = () => {
    const articlesAppUrl = "https://github.com/polikas/fe-nc-news";
    window.open(articlesAppUrl, "_blank");
  };

  const handleArticlesHost = () => {
    const articlesHostUrl = "https://articles-gallery.netlify.app/";
    window.open(articlesHostUrl, "_blank");
  };

  const handleCalculatorApp = () => {
    const calculatorAppUrl = "https://github.com/polikas/calculator";
    window.open(calculatorAppUrl, "_blank");
  };

  const handleCalculatorHost = () => {
    const calcluatorHostUrl = "https://mini-calclulator.netlify.app/";
    window.open(calcluatorHostUrl, "_blank");
  };

  const handleDictionaryApp = () => {
    const dictionaryAppUrl = "https://github.com/polikas/dictionary";
    window.open(dictionaryAppUrl, "_blank");
  };

  const handleDictionaryHost = () => {
    const dictionaryHostUrl = "https://stavros-dictionary.netlify.app/";
    window.open(dictionaryHostUrl, "_blank");
  };

  const handleSnakeApp = () => {
    const snakeAppUrl = "https://github.com/polikas/snake";
    window.open(snakeAppUrl, "_blank");
  };

  const handleSnakeHost = () => {
    const snakeHostUrl = "https://stavros-snake.netlify.app/";
    window.open(snakeHostUrl, "_blank");
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

  const techStackSnake = () => {
    const listItems = techStackSnakeFE.map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul>{listItems}</ul>;
  };

  const techStackDictionary = () => {
    const listItems = techStackDictionaryFE.map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul>{listItems}</ul>;
  };

  const techStackCalculator = () => {
    const listItems = techStackCalculatorFE.map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul>{listItems}</ul>;
  };

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Grid container spacing={2}>
        {/* TrippIn */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" gutterBottom>
            TrippIn
          </Typography>
          <ImageList sx={{ width: "100%" }} cols={2} rowHeight={164}>
            {trippInitemData.map((item) => (
              <ImageListItem key={item.img}>
                <a href="#" onClick={handleTripApp}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    style={{ width: "100%" }}
                    loading="lazy"
                  />
                </a>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Tech Stack
          </Typography>
          <Typography>Back-end</Typography>
          {techStackTripAppBE()}
          <Typography>Front-end</Typography>
          {techStackTripAppFE()}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Project Description
          </Typography>
          <Typography paragraph>
            Trippin is a mobile app designed for seamless trip planning. Our
            team recognized the challenges of coordinating group trips, where
            travel details are scattered across various platforms like email,
            Facebook, and WhatsApp chats. To address this, we created Trippin—a
            centralized hub where trip members can access all relevant
            information about their upcoming adventures. We prioritized
            flexibility, allowing admins to manage group membership while
            granting trip members the freedom to contribute and update travel,
            accommodation, and activity choices. Additionally, Trippin enables
            private in-app chats among members, ensuring everyone stays
            connected during their journeys. We’re proud to have met a
            real-world need with our app.
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
        {/* NC News - Articles */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" gutterBottom>
            NC News - Articles
          </Typography>
          <ImageList sx={{ width: "100%" }} cols={2} rowHeight={164}>
            {articleItemData.map((item) => (
              <ImageListItem key={item.img}>
                <a href="#" onClick={handleArticlesHost}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    style={{ width: "100%" }}
                    loading="lazy"
                  />
                </a>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Tech Stack
          </Typography>
          <Typography>Back-end</Typography>
          {techStackArticleBE()}
          <Typography>Front-end</Typography>
          {techStackArticleFE()}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Project Description
          </Typography>
          <Typography paragraph>
            A Web App for social news aggregation, where the user can view
            articles, comments, divide article by topics, vote an article and
            add/delete comments to an article. It is using a backend server with
            a list of integrated APIs. The project is focused on functionality
            and not at styling and user experience so much. Technologies used
            for this project React library, JavaScript and MUI Core for styled
            components.
          </Typography>
          <Typography paragraph>
            Available Source Code on GitHub
            <a
              href="#"
              onClick={handleArticlesApp}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <GitHubIcon sx={{ fontSize: 40 }} />
            </a>
          </Typography>
        </Grid>
        {/* Classic Snake Game */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" gutterBottom>
            Classic Snake Game
          </Typography>
          <ImageList sx={{ width: "100%" }} cols={2} rowHeight={164}>
            {snakeItemData.map((item) => (
              <ImageListItem key={item.img}>
                <a href="#" onClick={handleSnakeHost}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    style={{ width: "100%" }}
                    loading="lazy"
                  />
                </a>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Tech Stack
          </Typography>
          <Typography>Front-end</Typography>
          {techStackSnake()}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Project Description
          </Typography>
          <Typography paragraph>
            I developed a classic snake game web application that evokes
            nostalgia for the beloved mobile game back in the days. Leveraging
            React and PixiJS, a powerful graphics rendering framework, I crafted
            an immersive experience reminiscent of the iconic snake game. This
            project served as an exploration of PixiJS's capabilities, allowing
            me to delve into its intricacies while leveraging its features to
            create engaging visual elements such as dynamic rectangles and
            graphics. The game's difficulty dynamically adjusts as players
            progress, with each consumption of three orbs by the
            player-controlled snake leading to an increment in challenge level.
            This adaptive difficulty curve ensures an engaging and progressively
            challenging gameplay experience. Throughout the project, I conducted
            extensive research on snake game mechanics and leveraged React.js to
            efficiently manage application state and UI components.
          </Typography>
          <Typography paragraph>
            Available Source Code on GitHub
            <a
              href="#"
              onClick={handleSnakeApp}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <GitHubIcon sx={{ fontSize: 40 }} />
            </a>
          </Typography>
        </Grid>
        {/* Dictionary */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" gutterBottom>
            Dictionary
          </Typography>
          <ImageList sx={{ width: "100%" }} cols={2} rowHeight={164}>
            {dictionaryItemData.map((item) => (
              <ImageListItem key={item.img}>
                <a href="#" onClick={handleDictionaryHost}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    style={{ width: "100%" }}
                    loading="lazy"
                  />
                </a>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Tech Stack
          </Typography>
          <Typography>Front-end</Typography>
          {techStackDictionary()}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Project Description
          </Typography>
          <Typography paragraph>
            A native small-scale project that showcases the utilization of
            third-party APIs. The project focuses on extracting relevant data
            related to words, similar to a dictionary. I implemented it using
            React and leveraged the Axios library for API requests. Overall, it
            was a valuable exercise in strengthening my skills in working with
            external APIs and integrating them seamlessly.
          </Typography>
          <Typography paragraph>
            Available Source Code on GitHub
            <a
              href="#"
              onClick={handleDictionaryApp}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <GitHubIcon sx={{ fontSize: 40 }} />
            </a>
          </Typography>
        </Grid>
        {/* Calculator */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" gutterBottom>
            Calculator
          </Typography>
          <ImageList sx={{ width: "100%" }} cols={2} rowHeight={164}>
            {calculatorItemData.map((item) => (
              <ImageListItem key={item.img}>
                <a href="#" onClick={handleCalculatorHost}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    style={{ width: "100%" }}
                    loading="lazy"
                  />
                </a>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Tech Stack
          </Typography>
          <Typography>Front-end</Typography>
          {techStackCalculator()}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" gutterBottom>
            Project Description
          </Typography>
          <Typography paragraph>
            A web app calculator which supports addition, subtraction,
            multiplication and division, built with React.
          </Typography>
          <Typography paragraph>
            Available Source Code on GitHub
            <a
              href="#"
              onClick={handleCalculatorApp}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <GitHubIcon sx={{ fontSize: 40 }} />
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
