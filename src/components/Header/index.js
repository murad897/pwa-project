import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useStyles } from "./HeaderStyles";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

const Header = () => {
  const styles = useStyles();
  const { user } = useContext(UsersContext);
  console.log(user);
  return (
    <Box className={styles.innerContainer}>
      <Typography className={styles.title} variant="h4">
        CHAT
      </Typography>
      {user && <Button variant="outlined">logout</Button>}
    </Box>
  );
};

export default Header;
