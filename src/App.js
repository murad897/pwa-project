import React from "react";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import MessageContainer from "./components/MessageContainer";
import Users from "./components/Users";
import { UserContextPorvider } from "./context/UsersContext";
import { makeStyles } from "@mui/styles";

const App = () => {
  const useStyles = makeStyles({
    container: {
      marginTop: "50px",
    },
  });

  const styles = useStyles();

  return (
    <UserContextPorvider>
      <Container maxWidth="lg">
        <Header />
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
      </Container>
    </UserContextPorvider>
  );
};

export default App;
