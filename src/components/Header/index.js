import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useStyles } from "./HeaderStyles";

const Header = () => {
  const styles = useStyles();
  return (
    <Box className={styles.innerContainer}>
      <Typography className={styles.title} variant="h4">CHAT</Typography>
      <Button variant="outlined">logout</Button>
    </Box>
  );
};

export default Header;
