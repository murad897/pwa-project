import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import MessageContainer from "../../components/MessageContainer";
import Users from "../../components/Users";
import { makeStyles } from "@mui/styles";

const Home = () => {
  const useStyles = makeStyles({
    container: {
      marginTop: "50px",
    },
  });

  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Users />
        </Grid>
        <Grid item xs={6} md={8}>
          <MessageContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
