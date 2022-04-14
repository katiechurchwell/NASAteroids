import React from "react";
import { TextField, Button, Card, CardActions, Box, Grid, Typography } from "@mui/material";

const Signup = () => {
  return (
    <Box 
      component="form" 
      noValidate autoComplete="off"
      >
      <Grid
        container
        columnSpacing={{ md: 1 }}
        direction="column"
      >
        <Grid
          container
        >
        <Typography
          sx={{
            mr: 3
          }}
        >
          Username
        </Typography>
        <TextField
          id="username"
          name="username"
          type="text"
          variant="standard"
          sx={{
            bottomBorder: "1px #fff",
            mb: 5
          }}
        />
        </Grid>
        <Grid
          container
        >
        <Typography
          sx={{
            mr: 3
          }}
        >
          Email
        </Typography>
        <TextField
          id="email"
          name="email"
          type="text"
          variant="standard"
          sx={{
            bottomBorder: "1px #fff",
            mb: 5
          }}
        />
        </Grid>
        <Grid
          container
        >
        <Typography
          sx={{
            mr: 3
          }}
        >
          Password
        </Typography>
        <TextField
          id="password"
          name="password"
          type="text"
          variant="standard"
          sx={{
            mb:10
          }}
        />
        </Grid>

        <Card
          sx={{
            justifyContent: "space-between",
            backgroundColor: "transparent",
          }}
        >
          <CardActions
            sx={{
              justifyContent: "space-between",
              backgroundColor: "transparent",
            }}
          >
            <button type="button" className="nes-btn upperCase">
              Submit
            </button>
            <button type="button" className="nes-btn upperCase">
              Cancel
            </button>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
};

export default Signup;