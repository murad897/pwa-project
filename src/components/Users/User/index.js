import React from "react";
import { useStyles } from "./UserStyles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const User = ({ user }) => {
  const styles = useStyles();
  return (
    <Box className={styles.item}>
      <Typography className={styles.itemText}>{user}</Typography>
    </Box>
  );
};

export default User;
