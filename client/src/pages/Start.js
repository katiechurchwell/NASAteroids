import React from "react";
import Footer from "../components/Footer";
import Leaderboard from "../components/Leaderboard";
import LevelLoadIn from "../components/LevelLoadIn";
import { Button, Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Press Start 2P',
    ],
    h3: {
      textTransform: 'uppercase',
    },
    body1: {
      textTransform: 'uppercase',
    },
  },
  palette: {
    text:{
      primary: "#FFFFFF"
    }
  }
});

const Start = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <Grid
        container
        columnSpacing={{ md: 1 }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <div className="logo">
          <h1>ASTEROIDS</h1>
        </div>
        <Leaderboard />
        <LevelLoadIn />
        <Footer />
      </Grid>
    </Box>
    </ThemeProvider>
    
  );
};

export default Start;
